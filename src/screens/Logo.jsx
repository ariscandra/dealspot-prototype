import React from 'react';
import { Logo, LogoMarkOnly, LogoCompact, LogoLight } from '../components/Logo';

const WRAPPER = {
  width: '100%',
  maxWidth: 560,
  padding: 'var(--space-32)',
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-32)',
};

const SECTION = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-12)',
};

const LABEL = {
  fontFamily: 'var(--font-family)',
  fontSize: 'var(--text-caption-size)',
  fontWeight: 600,
  color: 'var(--color-text-tertiary)',
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
};

const CARD = {
  backgroundColor: 'var(--color-bg-elevated)',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--radius-12)',
  padding: 'var(--space-24)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 100,
};

const CARD_DARK = {
  ...CARD,
  backgroundColor: 'var(--color-bg-subtle)',
  backgroundImage: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
  borderColor: 'rgba(255,255,255,0.1)',
};

export function LogoScreen() {
  return (
    <div style={WRAPPER} className="dealspot-frame Logo dealspot-animate-scale-in">
      <section style={SECTION}>
        <div style={LABEL}>Full (default)</div>
        <div style={CARD}>
          <Logo />
        </div>
      </section>
      <section style={SECTION}>
        <div style={LABEL}>Mark only</div>
        <div style={CARD}>
          <LogoMarkOnly size="default" />
          <span style={{ marginLeft: 24 }} />
          <LogoMarkOnly size="compact" />
        </div>
      </section>
      <section style={SECTION}>
        <div style={LABEL}>Compact</div>
        <div style={CARD}>
          <LogoCompact showWordmark />
        </div>
      </section>
      <section style={SECTION}>
        <div style={LABEL}>Light (on dark)</div>
        <div style={CARD_DARK}>
          <LogoLight size="default" />
        </div>
      </section>
    </div>
  );
}
