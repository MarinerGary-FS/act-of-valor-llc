/**
 * Resend email delivery via the public REST API. No SDK dependency.
 * Only imported from server-side code (route handlers).
 */

const RESEND_ENDPOINT = 'https://api.resend.com/emails';

export interface LeadEmailInput {
  name: string;
  email: string;
  phone: string;
  service: string;
  location: string;
  message: string;
  pageUrl: string;
  timestamp: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function row(label: string, value: string): string {
  const v = value.trim() === '' ? '<em>(not provided)</em>' : escapeHtml(value);
  return `<tr><td style="padding:6px 12px 6px 0;color:#6B7280;white-space:nowrap;vertical-align:top"><strong>${label}</strong></td><td style="padding:6px 0;color:#1C1C1C">${v}</td></tr>`;
}

function buildHtml(input: LeadEmailInput): string {
  return `<!doctype html>
<html><body style="font-family:-apple-system,Segoe UI,sans-serif;background:#F7F7F7;margin:0;padding:24px">
  <table role="presentation" cellspacing="0" cellpadding="0" style="max-width:600px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;border:1px solid #E5E7EB">
    <tr><td style="background:#0B1F2A;padding:20px 24px"><h1 style="margin:0;color:#C8A96A;font-size:18px;letter-spacing:.05em">NEW LEAD — ACT OF VALOR</h1></td></tr>
    <tr><td style="padding:20px 24px"><table role="presentation" cellspacing="0" cellpadding="0" style="width:100%;font-size:14px">
      ${row('Name', input.name)}
      ${row('Phone', input.phone)}
      ${row('Email', input.email)}
      ${row('Service', input.service)}
      ${row('Location', input.location)}
      ${row('Message', input.message)}
      ${row('Page URL', input.pageUrl)}
      ${row('Submitted', input.timestamp)}
    </table></td></tr>
  </table>
</body></html>`;
}

function buildText(input: LeadEmailInput): string {
  return [
    'NEW LEAD — Act of Valor Website',
    '',
    `Name:     ${input.name}`,
    `Phone:    ${input.phone || '(not provided)'}`,
    `Email:    ${input.email || '(not provided)'}`,
    `Service:  ${input.service}`,
    `Location: ${input.location || '(not provided)'}`,
    `Message:  ${input.message || '(not provided)'}`,
    '',
    `Page:     ${input.pageUrl}`,
    `Time:     ${input.timestamp}`,
  ].join('\n');
}

export async function sendLeadEmail(input: LeadEmailInput): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured');
  }

  const from =
    process.env.LEAD_FROM_EMAIL ?? 'Act of Valor Website <onboarding@resend.dev>';
  const to = process.env.LEAD_RECIPIENT_EMAIL ?? 'info@actofvalorllc.com';

  const body: Record<string, unknown> = {
    from,
    to: [to],
    subject: 'NEW LEAD — Act of Valor Website',
    html: buildHtml(input),
    text: buildText(input),
  };

  if (input.email) {
    body.reply_to = input.email;
  }

  const response = await fetch(RESEND_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => '');
    throw new Error(`Resend API error ${response.status}: ${text.slice(0, 500)}`);
  }
}
