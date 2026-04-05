import React from 'react';
import { IconSearch, IconAlertCircle, IconBookmark } from './Icons';

const WRAPPER = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 'var(--space-32) var(--space-24)',
  textAlign: 'center',
  minHeight: 200,
};

const iconWrapBase = {
  width: 64,
  height: 64,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 'var(--space-16)',
};

const MESSAGE = {
  fontFamily: 'var(--font-family)',
  fontSize: 'var(--text-body-size)',
  lineHeight: 'var(--text-body-line)',
  color: 'var(--color-text-secondary)',
  marginBottom: 'var(--space-16)',
  maxWidth: 280,
};

const CTA = {
  fontFamily: 'var(--font-family)',
  fontSize: 'var(--text-body-small-size)',
  fontWeight: 600,
  lineHeight: 'var(--text-body-small-line)',
  color: 'var(--color-primary)',
  backgroundColor: 'var(--color-primary-subtle)',
  border: 'none',
  borderRadius: 'var(--radius-8)',
  padding: 'var(--space-12) var(--space-24)',
  cursor: 'pointer',
  minHeight: 44,
};

const variantStyles = {
  default: {
    iconWrap: { ...iconWrapBase, backgroundColor: 'var(--color-bg-subtle)', color: 'var(--color-text-tertiary)' },
  },
  error: {
    iconWrap: { ...iconWrapBase, backgroundColor: 'var(--color-bg-subtle)', color: 'var(--color-error)' },
  },
  saved: {
    iconWrap: { ...iconWrapBase, backgroundColor: 'var(--color-primary-subtle)', color: 'var(--color-primary)' },
  },
};

export function EmptyState({ icon, message, ctaLabel, onCta, variant = 'default' }) {
  const styles = variantStyles[variant] || variantStyles.default;
  const defaultIcons = { default: IconSearch, error: IconAlertCircle, saved: IconBookmark };
  const Icon = icon ?? defaultIcons[variant] ?? IconSearch;
  return (
    <div style={WRAPPER} className="EmptyState">
      <div style={styles.iconWrap}>
        <Icon size={32} />
      </div>
      <p style={MESSAGE}>{message}</p>
      {ctaLabel && onCta && (
        <button type="button" style={CTA} onClick={onCta}>
          {ctaLabel}
        </button>
      )}
    </div>
  );
}
