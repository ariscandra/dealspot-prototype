import React from 'react';
import { Card } from '../components/Card';
import { Chip } from '../components/Chip';

const WRAPPER = {
  width: 390,
  height: 844,
  backgroundColor: 'var(--color-bg-default)',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
};

const HEADER = {
  padding: 'var(--space-16)',
  borderBottom: '1px solid var(--color-border)',
  flexShrink: 0,
};

const QUERY = {
  fontFamily: 'var(--font-family)',
  fontSize: 'var(--text-body-small-size)',
  color: 'var(--color-text-secondary)',
  marginBottom: 'var(--space-8)',
};

const SORT_ROW = {
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--space-8)',
  marginTop: 'var(--space-8)',
};

const LIST = {
  flex: 1,
  overflow: 'auto',
  padding: 'var(--space-16)',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 'var(--space-12)',
};

const query = 'kemeja pria';
const sortLabel = 'Harga terendah';
const products = [
  { title: 'Kemeja Pria Oxford Lengan Panjang', store: 'Tokopedia', price: 'Rp 189.000', bestDeal: true },
  { title: 'Kemeja Formal Pria Slim Fit', store: 'Shopee', price: 'Rp 199.000', bestDeal: false },
  { title: 'Kemeja Kerja Pria Cotton', store: 'Lazada', price: 'Rp 195.000', bestDeal: false },
  { title: 'Kemeja Pria Lengan Pendek', store: 'Blibli', price: 'Rp 179.000', bestDeal: false },
  { title: 'Kemeja Flanel Pria Casual', store: 'Tokopedia', price: 'Rp 215.000', bestDeal: false },
  { title: 'Kemeja Polo Pria', store: 'Shopee', price: 'Rp 165.000', bestDeal: false },
];

export function MobileResults() {
  return (
    <div style={WRAPPER} className="dealspot-frame MobileResults">
      <header style={HEADER}>
        <div style={QUERY}>Hasil untuk &lsquo;{query}&rsquo;</div>
        <div style={SORT_ROW}>
          <Chip label={sortLabel} selected />
        </div>
      </header>
      <div style={LIST}>
        {products.map((p, i) => (
          <Card
            key={i}
            title={p.title}
            storeName={p.store}
            price={p.price}
            bestDeal={p.bestDeal}
          />
        ))}
      </div>
    </div>
  );
}
