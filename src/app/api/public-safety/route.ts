import { NextResponse } from 'next/server';
import { SAFETY_UPDATES } from '@/lib/constants';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const NWS_ALERTS_URL =
  'https://api.weather.gov/alerts/active?zone=GAC067,GAC121,GAC089,GAC063,GAC097';

type SafetyUpdate = {
  title: string;
  category: string;
  description: string;
  source?: string;
  date?: string;
  url?: string;
};

type NwsFeature = {
  id?: string;
  properties?: {
    event?: string;
    headline?: string;
    description?: string;
    instruction?: string;
    severity?: string;
    certainty?: string;
    sent?: string;
    effective?: string;
    areaDesc?: string;
  };
};

type NwsResponse = {
  updated?: string;
  features?: NwsFeature[];
};

const text = (value: unknown) =>
  typeof value === 'string' ? value.replace(/\s+/g, ' ').trim() : '';

const summarize = (value: string, maxLength = 190) => {
  if (value.length <= maxLength) return value;
  const sliced = value.slice(0, maxLength).trim();
  return `${sliced.replace(/[.,;:!?-]*$/, '')}...`;
};

const fallbackUpdates = () => ({
  mode: 'fallback' as const,
  source: 'Manual safety awareness fallback',
  updatedAt: new Date().toISOString(),
  updates: SAFETY_UPDATES,
});

export async function GET() {
  try {
    const response = await fetch(NWS_ALERTS_URL, {
      cache: 'no-store',
      headers: {
        Accept: 'application/geo+json',
        'User-Agent':
          'actofvalorllc.com public-safety awareness info@actofvalorllc.com',
      },
    });

    if (!response.ok) {
      return NextResponse.json(fallbackUpdates(), {
        status: 200,
        headers: { 'Cache-Control': 'public, max-age=300' },
      });
    }

    const data = (await response.json()) as NwsResponse;
    const alerts = (data.features ?? [])
      .map<SafetyUpdate | null>((feature) => {
        const props = feature.properties;
        if (!props) return null;

        const title = text(props.event || props.headline);
        const description = summarize(
          text(props.headline || props.description || props.instruction)
        );

        if (!title || !description) return null;

        return {
          title,
          category: text(props.severity || props.certainty || 'Weather Alert'),
          description,
          source: 'National Weather Service',
          date: text(props.effective || props.sent),
          url: feature.id,
        };
      })
      .filter((alert): alert is SafetyUpdate => Boolean(alert))
      .slice(0, 3);

    if (alerts.length === 0) {
      return NextResponse.json(
        fallbackUpdates(),
        {
          status: 200,
          headers: { 'Cache-Control': 'public, max-age=300' },
        }
      );
    }

    return NextResponse.json(
      {
        mode: 'live',
        source: 'National Weather Service active alerts',
        updatedAt: data.updated || new Date().toISOString(),
        updates: alerts,
      },
      {
        status: 200,
        headers: { 'Cache-Control': 'public, max-age=120' },
      }
    );
  } catch {
    return NextResponse.json(fallbackUpdates(), {
      status: 200,
      headers: { 'Cache-Control': 'public, max-age=300' },
    });
  }
}
