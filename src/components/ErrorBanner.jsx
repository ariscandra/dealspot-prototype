import React from 'react';
import { IconAlertCircle } from './Icons';

const BANNER = {
  padding: 'var(--space-12) var(--space-16)',
  backgroundColor: 'var(--color-bg-subtle)',
  borderBottom: '1px solid var(--color-border)',
  fontFamily: 'var(--font-family)',
  fontSize: 'var(--text-body-small-size)',
  lineHeight: 'var(--text-body-small-line)',
  color: 'var(--color-text-secondary)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 'var(--space-12)',
  flexWrap: 'wrap',
};

const RETRY = {
  fontFamily: 'var(--font-family)',
  fontSize: 'var(--text-caption-size)',
  fontWeight: 600,
  lineHeight: 'var(--text-caption-line)',
  color: 'var(--color-primary)',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  textDecoration: 'underline',
  padding: 'var(--space-4) 0',
  minHeight: 44,
  display: 'inline-flex',
  alignItems: 'center',
};

export function ErrorBanner({ message, onRetry }) {
  return (
    <div style={BANNER} className="ErrorBanner" role="alert">
      <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)', color: 'var(--color-text-secondary)' }}>
        <span style={{ flexShrink: 0, color: 'var(--color-warning)' }}>
          <IconAlertCircle size={18} />
        </span>
        {message}
      </span>
      {onRetry && (
        <button type="button" style={RETRY} onClick={onRetry}>
          Coba lagi
        </button>
      )}
    </div>
  );
}
