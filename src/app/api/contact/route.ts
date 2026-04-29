import { NextResponse } from 'next/server';
import { z } from 'zod';
import { sendLeadEmail } from '@/lib/server/email';
import { appendLeadToSheet } from '@/lib/server/sheets';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const contactSchema = z
  .object({
    name: z.string().trim().min(1, 'Name is required'),
    phone: z.string().trim(),
    email: z
      .string()
      .trim()
      .refine(
        (v) => v === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
        'Invalid email'
      ),
    service: z.string().trim().min(1, 'Service is required'),
    location: z.string().trim(),
    message: z.string().trim(),
    page: z.string().trim(),
    timestamp: z.string().trim(),
  })
  .refine((d) => d.phone.length > 0 || d.email.length > 0, {
    message: 'Phone or email is required',
    path: ['phone'],
  });

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'Invalid JSON body' },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Invalid input', issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const data = parsed.data;
  const timestamp =
    data.timestamp && !Number.isNaN(Date.parse(data.timestamp))
      ? data.timestamp
      : new Date().toISOString();

  const emailPromise = sendLeadEmail({
    name: data.name,
    email: data.email,
    phone: data.phone,
    service: data.service,
    location: data.location,
    message: data.message,
    pageUrl: data.page,
    timestamp,
  });

  const sheetPromise = appendLeadToSheet([
    timestamp,
    data.name,
    data.phone,
    data.email,
    data.service,
    data.location,
    data.message,
    data.page,
  ]);

  const [emailResult, sheetResult] = await Promise.allSettled([
    emailPromise,
    sheetPromise,
  ]);

  if (emailResult.status === 'rejected') {
    console.error('[contact] email send failed:', emailResult.reason);
  }
  if (sheetResult.status === 'rejected') {
    console.error('[contact] sheets append failed:', sheetResult.reason);
  }

  // Email is the critical path — if it failed, the lead may be lost, so
  // surface a 502 to the client. Sheet failures are logged but non-blocking
  // (the lead still landed in the inbox).
  if (emailResult.status === 'rejected') {
    return NextResponse.json(
      {
        error: 'Lead delivery failed',
        emailDelivered: false,
        sheetLogged: sheetResult.status === 'fulfilled',
      },
      { status: 502 }
    );
  }

  return NextResponse.json(
    {
      ok: true,
      emailDelivered: true,
      sheetLogged: sheetResult.status === 'fulfilled',
    },
    { status: 200 }
  );
}
