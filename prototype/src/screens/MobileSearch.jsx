import React from 'react';
import { Logo } from '../components/Logo';
import { SearchBar } from '../components/SearchBar';
import { Chip } from '../components/Chip';

const WRAPPER = {
  width: 390,
  height: 844,
  backgroundColor: 'var(--color-bg-default)',
  display: 'flex',
  flexDirection: 'column',
  padding: 'var(--space-24) var(--space-16)',
  overflow: 'hidden',
};

const HEADER = {
  marginBottom: 'var(--space-24)',
};

const SEARCH_SECTION = {
  marginBottom: 'var(--space-24)',
};

const CHIPS = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 'var(--space-8)',
};

const categories = ['Fashion', 'Elektronik', 'Rumah', 'Kecantikan', 'Olahraga'];

export function MobileSearch() {
  return (
    <div style={WRAPPER} className="dealspot-frame MobileSearch">
      <header style={HEADER}>
        <Logo />
      </header>
      <div style={SEARCH_SECTION}>
        <SearchBar placeholder="Cari produk, bandingkan harga" />
      </div>
      <div style={CHIPS}>
        {categories.map((label, i) => (
          <Chip key={label} label={label} selected={i === 0} />
        ))}
      </div>
    </div>
  );
}
