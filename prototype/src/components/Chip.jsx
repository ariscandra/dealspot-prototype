import React from 'react';

const base = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 32,
  paddingLeft: 12,
  paddingRight: 12,
  borderRadius: 9999,
  fontFamily: 'var(--font-family)',
  fontSize: 'var(--text-body-small-size)',
  fontWeight: 500,
  border: '1px solid transparent',
  cursor: 'default',
};

const clickableBase = {
  ...base,
  cursor: 'pointer',
};

const variants = {
  default: {
    ...base,
    backgroundColor: 'var(--color-bg-subtle)',
    color: 'var(--color-text-primary)',
    borderColor: 'var(--color-border)',
  },
  defaultClickable: {
    ...clickableBase,
    backgroundColor: 'var(--color-bg-subtle)',
    color: 'var(--color-text-primary)',
    borderColor: 'var(--color-border)',
  },
  selected: {
    ...base,
    backgroundColor: 'var(--color-primary-subtle)',
    color: 'var(--color-primary)',
    borderColor: 'var(--color-primary)',
  },
  selectedClickable: {
    ...clickableBase,
    backgroundColor: 'var(--color-primary-subtle)',
    color: 'var(--color-primary)',
    borderColor: 'var(--color-primary)',
  },
};

export function Chip({ label, icon, selected = false, onClick, ...props }) {
  const key = selected ? (onClick ? 'selectedClickable' : 'selected') : (onClick ? 'defaultClickable' : 'default');
  const style = variants[key];
  return (
    <span
      style={{ ...style, display: 'inline-flex', alignItems: 'center', gap: 6 }}
      role={onClick ? 'button' : undefined}
      onClick={onClick}
      {...props}
    >
      {icon}
      {label}
    </span>
  );
}
