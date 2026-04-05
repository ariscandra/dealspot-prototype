import React from 'react';

const wrapStyle = {
  width: '100%',
  height: 48,
  minHeight: 48,
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--radius-8)',
  padding: '0 var(--space-16)',
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--space-12)',
  backgroundColor: 'var(--color-bg-default)',
};

const inputStyle = {
  flex: 1,
  border: 'none',
  outline: 'none',
  fontFamily: 'var(--font-family)',
  fontSize: 'var(--text-body-size)',
  color: 'var(--color-text-primary)',
  backgroundColor: 'transparent',
};

const inputStylePlaceholder = {
  color: 'var(--color-text-tertiary)',
};

export function SearchBar({ placeholder = 'Cari produk, bandingkan harga', value = '', onChange, ...props }) {
  return (
    <div style={wrapStyle} className="dealspot-search-bar dealspot-search-focus">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-tertiary)" strokeWidth="2" aria-hidden>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
      <input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={e => onChange && onChange(e.target.value)}
        style={inputStyle}
        aria-label="Search products"
        {...props}
      />
    </div>
  );
}
