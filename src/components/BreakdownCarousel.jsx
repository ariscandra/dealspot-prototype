import React, { useState, useEffect } from 'react';

const WRAPPER = {
  marginTop: 'var(--space-24)',
  maxWidth: 560,
  width: '100%',
};

const CARD = {
  padding: 'var(--space-16) var(--space-24)',
  backgroundColor: 'var(--color-bg-elevated)',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--radius-12)',
  minHeight: 100,
  position: 'relative',
};

const COUNTER = {
  fontFamily: 'var(--font-family)',
  fontSize: 'var(--text-caption-size)',
  color: 'var(--color-text-tertiary)',
  marginBottom: 'var(--space-8)',
};

const LABEL = {
  fontFamily: 'var(--font-family)',
  fontSize: 'var(--text-body-size)',
  fontWeight: 600,
  color: 'var(--color-text-primary)',
  marginBottom: 'var(--space-8)',
  lineHeight: 1.3,
};

const DESC = {
  fontFamily: 'var(--font-family)',
  fontSize: 'var(--text-body-small-size)',
  color: 'var(--color-text-secondary)',
  lineHeight: 1.5,
};

const NAV_ROW = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 'var(--space-12)',
  gap: 'var(--space-12)',
};

const DOTS = {
  display: 'flex',
  gap: 'var(--space-8)',
  alignItems: 'center',
  flex: 1,
  justifyContent: 'center',
};

const DOT = (active) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  backgroundColor: active ? 'var(--color-primary)' : 'var(--color-border)',
  transition: 'background-color 0.2s ease, transform 0.2s ease',
});

const ARROW_BTN = {
  width: 40,
  height: 40,
  borderRadius: 'var(--radius-8)',
  border: '1px solid var(--color-border)',
  backgroundColor: 'var(--color-bg-default)',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--color-text-primary)',
  fontFamily: 'var(--font-family)',
  fontSize: 18,
  flexShrink: 0,
};

const TITLE = {
  fontFamily: 'var(--font-family)',
  fontSize: 'var(--text-caption-size)',
  fontWeight: 600,
  color: 'var(--color-text-tertiary)',
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
  marginBottom: 'var(--space-8)',
};

export function BreakdownCarousel({ items, title = 'Keterangan' }) {
  const [index, setIndex] = useState(0);
  const total = items?.length ?? 0;

  useEffect(() => {
    setIndex(0);
  }, [items]);

  if (!items || total === 0) return null;

  const item = items[index];
  const goPrev = () => setIndex((i) => (i <= 0 ? total - 1 : i - 1));
  const goNext = () => setIndex((i) => (i >= total - 1 ? 0 : i + 1));

  return (
    <section style={WRAPPER} className="BreakdownCarousel" aria-label={title}>
      <div style={TITLE}>{title}</div>
      <div style={CARD}>
        <div style={COUNTER} aria-live="polite">
          {index + 1} / {total}
        </div>
        <h3 style={LABEL}>{item.label}</h3>
        <p style={DESC}>{item.description}</p>
      </div>
      <div style={NAV_ROW}>
        <button
          type="button"
          style={ARROW_BTN}
          onClick={goPrev}
          aria-label="Item sebelumnya"
        >
          ‹
        </button>
        <div style={DOTS} role="tablist" aria-label="Pilih item keterangan">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Item ${i + 1}`}
              style={DOT(i === index)}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <button
          type="button"
          style={ARROW_BTN}
          onClick={goNext}
          aria-label="Item berikutnya"
        >
          ›
        </button>
      </div>
    </section>
  );
}
