'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { SAFETY_UPDATES } from '@/lib/constants';

type PublicSafetyUpdate = {
  title: string;
  category: string;
  description: string;
  source?: string;
  date?: string;
  url?: string;
};

type PublicSafetyResponse = {
  mode: 'live' | 'fallback';
  source: string;
  updatedAt: string;
  updates: readonly PublicSafetyUpdate[];
};

const defaultFeed: PublicSafetyResponse = {
  mode: 'fallback',
  source: 'Manual safety awareness fallback',
  updatedAt: '2026-04-30T00:00:00-04:00',
  updates: SAFETY_UPDATES,
};

const formatDateTime = (value: string) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Recently checked';

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'short',
  }).format(date);
};

export default function PublicSafety() {
  const [feed, setFeed] = useState<PublicSafetyResponse>(defaultFeed);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    let cancelled = false;

    async function loadPublicSafetyFeed() {
      try {
        const response = await fetch('/api/public-safety', {
          headers: { Accept: 'application/json' },
        });
        if (!response.ok) throw new Error('Unable to load public safety feed');

        const data = (await response.json()) as PublicSafetyResponse;
        if (!cancelled) {
          setFeed(data);
          setStatus('ready');
        }
      } catch {
        if (!cancelled) {
          setFeed(defaultFeed);
          setStatus('error');
        }
      }
    }

    loadPublicSafetyFeed();

    return () => {
      cancelled = true;
    };
  }, []);

  const feedLabel = useMemo(() => {
    if (status === 'loading') return 'Checking live public safety sources...';
    if (feed.mode === 'live') return `Live feed: ${feed.source}`;
    return status === 'error'
      ? 'Live feed unavailable. Showing safety awareness fallback.'
      : 'No active local alerts. Showing safety awareness fallback.';
  }, [feed.mode, feed.source, status]);

  return (
    <section id="safety" className="w-full bg-[var(--color-surface-page)] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-10 max-w-3xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-brand-primary)]">
            Local Awareness
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[var(--color-navy)] md:text-4xl">
            Atlanta Public Safety Awareness
          </h2>
          <p className="mt-4 text-lg text-[var(--color-content-primary)]">
            Public safety awareness helps families, businesses, and property managers understand when professional trauma, biohazard, or hazardous cleanup support may be needed.
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
            <p className="inline-flex rounded-full border border-[var(--color-border-default)] bg-[var(--color-surface-card)] px-4 py-2 text-sm font-semibold text-[var(--color-content-secondary)]">
              Last checked: {formatDateTime(feed.updatedAt)}
            </p>
            <p className="inline-flex rounded-full border border-[var(--color-border-default)] bg-[var(--color-surface-card)] px-4 py-2 text-sm font-semibold text-[var(--color-content-secondary)]">
              {feedLabel}
            </p>
          </div>
        </motion.div>

        {/* Awareness Cards */}
        <motion.div
          className="grid grid-cols-1 gap-5 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {feed.updates.map((update) => (
            <motion.div
              key={update.title}
              className="flex h-full flex-col rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-card)] p-6 shadow-[var(--shadow-sm)] transition-shadow duration-200 hover:shadow-[var(--shadow-md)]"
              variants={fadeUp}
            >
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-primary)]">
                {update.category}
              </p>
              <h3 className="text-lg font-bold leading-snug text-[var(--color-navy)]">
                {update.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-content-primary)]">
                {update.description}
              </p>
              {(update.source || update.date || update.url) && (
                <div className="mt-5 border-t border-[var(--color-border-default)] pt-4 text-xs leading-5 text-[var(--color-content-tertiary)]">
                  {update.source && <p>{update.source}</p>}
                  {update.date && <p>{formatDateTime(update.date)}</p>}
                  {update.url && (
                    <a
                      href={update.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex font-semibold text-[var(--color-brand-primary-hover)] hover:text-[var(--color-navy)]"
                    >
                      View source
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          className="mt-8 rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-surface-card)] p-5 text-sm leading-6 text-[var(--color-content-secondary)]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <p>
            This section is general public safety awareness for Atlanta-area property owners and residents. Act of Valor is not affiliated with Atlanta Police, Fire, EMS, or any government agency. For emergencies or official incident information, contact the appropriate public authority directly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
