import React from 'react';

const WRAPPER = {
  width: 1440,
  height: 900,
  backgroundColor: 'var(--color-bg-default)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 'var(--space-32)',
};

const TITLE = {
  fontFamily: 'var(--font-family)',
  fontSize: 48,
  fontWeight: 700,
  color: 'var(--color-text-primary)',
  marginBottom: 'var(--space-16)',
};

const TAGLINE = {
  fontFamily: 'var(--font-family)',
  fontSize: 'var(--text-h2-size)',
  fontWeight: 400,
  color: 'var(--color-text-secondary)',
  marginBottom: 'var(--space-32)',
};

const MOCKUPS = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-32)',
  flexWrap: 'wrap',
};

const PLACEHOLDER = {
  width: 360,
  height: 520,
  backgroundColor: 'var(--color-bg-subtle)',
  borderRadius: 'var(--radius-12)',
  border: '2px dashed var(--color-border)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'var(--font-family)',
  fontSize: 'var(--text-body-small-size)',
  color: 'var(--color-text-tertiary)',
};

const PHONE = {
  ...PLACEHOLDER,
  width: 280,
  height: 560,
};

export function DesktopSecondary() {
  return (
    <div style={WRAPPER} className="dealspot-frame DesktopSecondary">
      <h1 style={TITLE}>DealSpot</h1>
      <p style={TAGLINE}>Bandingkan harga, temukan deal terbaik.</p>
      <div style={MOCKUPS}>
        <div style={PLACEHOLDER}>Extension panel mockup</div>
        <div style={PHONE}>Phone / app mockup</div>
      </div>
    </div>
  );
}
