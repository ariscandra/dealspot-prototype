import React from 'react';
import { Logo } from '../components/Logo';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { EmptyState } from '../components/EmptyState';
import { ErrorBanner } from '../components/ErrorBanner';
import { IconMapPin } from '../components/Icons';

const wrapperBase = {
  width: 384,
  backgroundColor: 'var(--color-bg-default)',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
};

const HEADER = {
  padding: 'var(--space-16)',
  borderBottom: '1px solid var(--color-border)',
  flexShrink: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-8)',
};

const HEADER_ROW = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 'var(--space-8)',
};

const CONTEXT = {
  fontFamily: 'var(--font-family)',
  fontSize: 'var(--text-body-small-size)',
  color: 'var(--color-text-secondary)',
};

const SET_LOKASI_BTN = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 'var(--space-8)',
  fontFamily: 'var(--font-family)',
  fontSize: 'var(--text-body-small-size)',
  fontWeight: 500,
  color: 'var(--color-link)',
  backgroundColor: 'transparent',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--radius-8)',
  padding: 'var(--space-8) var(--space-12)',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease',
};

const SUMMARY_BAR = {
  padding: 'var(--space-12) var(--space-16)',
  backgroundColor: 'var(--color-success-subtle)',
  borderBottom: '1px solid var(--color-border)',
  fontFamily: 'var(--font-family)',
  fontSize: 'var(--text-body-small-size)',
  color: 'var(--color-text-primary)',
};

const SUMMARY_HIGHLIGHT = {
  color: 'var(--color-success)',
  fontWeight: 600,
};

const FOOTER = {
  padding: 'var(--space-12) var(--space-16)',
  borderTop: '1px solid var(--color-border)',
  flexShrink: 0,
  fontFamily: 'var(--font-family)',
  fontSize: 'var(--text-caption-size)',
  color: 'var(--color-text-tertiary)',
};

const SUBSCRIPTION = {
  padding: 'var(--space-12) var(--space-16)',
  backgroundColor: 'var(--color-primary-subtle)',
  borderBottom: '1px solid var(--color-border)',
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-8)',
};
const SUBSCRIPTION_TITLE = {
  fontFamily: 'var(--font-family)',
  fontSize: 'var(--text-body-small-size)',
  fontWeight: 600,
  color: 'var(--color-text-primary)',
};
const SUBSCRIPTION_ACTIONS = {
  display: 'flex',
  gap: 'var(--space-8)',
  flexWrap: 'wrap',
};

const LIST = {
  flex: 1,
  overflow: 'auto',
  padding: 'var(--space-16)',
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-12)',
};

const productName = 'Kemeja Pria Lengan Panjang Oxford';
const cards = [
  { storeName: 'Tokopedia', price: 'Rp 189.000', shipping: 'Gratis ongkir', bestDeal: true },
  { storeName: 'Shopee', price: 'Rp 199.000', shipping: 'Rp 8.000', bestDeal: false },
  { storeName: 'Lazada', price: 'Rp 195.000', shipping: 'Gratis ongkir', bestDeal: false },
  { storeName: 'Blibli', price: 'Rp 205.000', shipping: 'Rp 12.000', bestDeal: false },
];

const cardsPartialError = cards.filter((c) => c.storeName !== 'Lazada');

export function ExtensionPanel({ embedded, empty = false, error = null, errorSource = 'Lazada', onRetry }) {
  const WRAPPER = { ...wrapperBase, height: embedded ? '100%' : 600, minHeight: embedded ? 400 : 600 };
  const displayCards = error === 'partial' ? cardsPartialError : cards;
  const bestCard = displayCards.find((c) => c.bestDeal) || displayCards[0];
  const showEmpty = empty || error === 'full';

  return (
    <div style={WRAPPER} className="dealspot-frame ExtensionPanel">
      <header style={HEADER}>
        <div style={HEADER_ROW}>
          <Logo size="compact" />
          <button
            type="button"
            style={SET_LOKASI_BTN}
            onClick={() => {}}
            title="Atur alamat pengiriman untuk estimasi ongkir"
            className="dealspot-btn-transition dealspot-set-lokasi-btn"
          >
            <IconMapPin size={16} />
            Set lokasi
          </button>
        </div>
        <div style={CONTEXT}>Comparing: {productName}</div>
      </header>
      {!showEmpty && (
        <>
          <div style={SUMMARY_BAR}>
            Total termurah: <span style={SUMMARY_HIGHLIGHT}>{bestCard.storeName}, {bestCard.price}</span> (termasuk ongkir)
          </div>
          <div style={SUBSCRIPTION}>
            <div style={SUBSCRIPTION_TITLE}>DealSpot Member — dapat harga khusus</div>
            <div style={SUBSCRIPTION_ACTIONS}>
              <Button variant="primary" compact className="dealspot-btn-transition">Subscribe now</Button>
              <Button variant="secondary" compact className="dealspot-btn-transition">Log in / Daftar</Button>
            </div>
          </div>
          {error === 'partial' && (
            <ErrorBanner
              message={`Sumber ${errorSource} sementara tidak tersedia.`}
              onRetry={onRetry}
            />
          )}
          <div style={LIST}>
            {displayCards.map((c, i) => (
              <div key={c.storeName} className="dealspot-animate-slide-up" style={{ animationDelay: `${(i + 1) * 0.06}s` }}>
                <Card
                  title={productName}
                  storeName={c.storeName}
                  price={c.price}
                  shipping={c.shipping}
                  freeShipping={c.shipping?.toLowerCase().includes('gratis')}
                  bestDeal={c.bestDeal}
                  compact
                  ctaSize="small"
                  imageSeed={`ext-${c.storeName}-${i}`}
                />
              </div>
            ))}
          </div>
        </>
      )}
      {showEmpty && (
        <div style={{ ...LIST, flex: 1, display: 'flex', flexDirection: 'column' }}>
          <EmptyState
            variant={error === 'full' ? 'error' : 'default'}
            message={empty ? 'Belum ada perbandingan untuk produk ini.' : 'Tidak bisa memuat data. Periksa koneksi dan coba lagi.'}
            ctaLabel={error === 'full' ? 'Coba lagi' : 'Cari di app'}
            onCta={error === 'full' ? onRetry : () => {}}
          />
        </div>
      )}
      <footer style={FOOTER}>
        Data diperbarui setiap hari
      </footer>
    </div>
  );
}
