import React from 'react';

const WRAPPER = {
  marginTop: 'var(--space-24)',
  padding: 'var(--space-24)',
  backgroundColor: 'var(--color-bg-elevated)',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--radius-12)',
  maxWidth: 720,
};

const TITLE = {
  fontFamily: 'var(--font-family)',
  fontSize: 'var(--text-h3-size)',
  fontWeight: 'var(--text-h3-weight)',
  lineHeight: 'var(--text-h3-line)',
  color: 'var(--color-text-primary)',
  marginBottom: 'var(--space-16)',
};

const LIST = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-12)',
};

const ITEM = {
  display: 'flex',
  gap: 'var(--space-12)',
  alignItems: 'flex-start',
  fontFamily: 'var(--font-family)',
};

const NUMBER = {
  flexShrink: 0,
  width: 24,
  height: 24,
  borderRadius: 'var(--radius-8)',
  backgroundColor: 'var(--color-primary-subtle)',
  color: 'var(--color-primary)',
  fontSize: 'var(--text-body-small-size)',
  fontWeight: 600,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const LABEL = {
  fontSize: 'var(--text-body-size)',
  fontWeight: 600,
  color: 'var(--color-text-primary)',
  marginBottom: 2,
};

const DESC = {
  fontSize: 'var(--text-body-small-size)',
  color: 'var(--color-text-secondary)',
  lineHeight: 1.4,
};

export function Breakdown({ items, title = 'Keterangan' }) {
  if (!items || items.length === 0) return null;
  return (
    <section style={WRAPPER} className="Breakdown" aria-label={title}>
      <h2 style={TITLE}>{title}</h2>
      <ol style={LIST} start={1}>
        {items.map((item, i) => (
          <li key={i} style={ITEM}>
            <span style={NUMBER} aria-hidden>{i + 1}</span>
            <div>
              <div style={LABEL}>{item.label}</div>
              <div style={DESC}>{item.description}</div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
