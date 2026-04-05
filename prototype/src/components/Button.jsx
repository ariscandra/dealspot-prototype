import React from 'react';

const base = {
  fontFamily: 'var(--font-family)',
  fontSize: 'var(--text-body-size)',
  fontWeight: 500,
  border: 'none',
  cursor: 'pointer',
  borderRadius: 'var(--radius-8)',
  paddingLeft: 'var(--space-16)',
  paddingRight: 'var(--space-16)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const variants = {
  primary: {
    ...base,
    height: 40,
    backgroundColor: 'var(--color-primary)',
    color: 'var(--color-on-primary)',
  },
  primaryMobile: {
    ...base,
    height: 44,
    minHeight: 44,
    backgroundColor: 'var(--color-primary)',
    color: 'var(--color-on-primary)',
  },
  primaryCompact: {
    ...base,
    height: 28,
    minHeight: 28,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 12,
    fontWeight: 600,
    backgroundColor: 'var(--color-primary)',
    color: 'var(--color-on-primary)',
  },
  primarySmall: {
    ...base,
    height: 32,
    minHeight: 32,
    paddingLeft: 12,
    paddingRight: 12,
    fontSize: 13,
    fontWeight: 600,
    backgroundColor: 'var(--color-primary)',
    color: 'var(--color-on-primary)',
  },
  secondary: {
    ...base,
    height: 40,
    backgroundColor: 'transparent',
    color: 'var(--color-primary)',
    border: '2px solid var(--color-primary)',
  },
  ghost: {
    ...base,
    height: 40,
    backgroundColor: 'transparent',
    color: 'var(--color-text-secondary)',
  },
  secondaryCompact: {
    ...base,
    height: 28,
    minHeight: 28,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 12,
    fontWeight: 500,
    backgroundColor: 'transparent',
    color: 'var(--color-primary)',
    border: '1px solid var(--color-primary)',
  },
  pill: {
    ...base,
    height: 32,
    minHeight: 32,
    paddingLeft: 14,
    paddingRight: 14,
    fontSize: 13,
    fontWeight: 500,
    borderRadius: 9999,
    backgroundColor: 'var(--color-primary-subtle)',
    color: 'var(--color-primary)',
    border: 'none',
  },
  pillCompact: {
    ...base,
    height: 26,
    minHeight: 26,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 12,
    fontWeight: 500,
    borderRadius: 9999,
    backgroundColor: 'var(--color-primary-subtle)',
    color: 'var(--color-primary)',
    border: 'none',
  },
};

export function Button({ variant = 'primary', mobile = false, compact = false, small = false, pill = false, children, ...props }) {
  let key = variant;
  if (pill) {
    key = compact ? 'pillCompact' : 'pill';
  } else if (variant === 'primary') {
    if (compact) key = 'primaryCompact';
    else if (small) key = 'primarySmall';
    else if (mobile) key = 'primaryMobile';
  } else if (variant === 'secondary' && compact) {
    key = 'secondaryCompact';
  }
  const style = variants[key] || variants.primary;
  return (
    <button type="button" style={style} {...props}>
      {children}
    </button>
  );
}
