import React, { useState } from 'react';
import { Logo } from '../components/Logo';
import { ExtensionPanel } from './ExtensionPanel';

const BROWSER = {
  width: '100%',
  maxWidth: 1200,
  height: 700,
  backgroundColor: 'var(--color-bg-subtle)',
  borderRadius: 'var(--radius-12)',
  overflow: 'hidden',
  boxShadow: 'var(--shadow-browser)',
  display: 'flex',
  flexDirection: 'column',
};

const CHROME = {
  backgroundColor: 'var(--color-bg-elevated)',
  borderBottom: '1px solid var(--color-border)',
  padding: '8px 12px',
  display: 'flex',
  alignItems: 'center',
  gap: 8,
};

const DOT = (c) => ({
  width: 12,
  height: 12,
  borderRadius: '50%',
  backgroundColor: c,
});

const URL_BAR = {
  flex: 1,
  minWidth: 200,
  maxWidth: 720,
  height: 36,
  borderRadius: 8,
  backgroundColor: 'var(--color-bg-subtle)',
  border: '1px solid var(--color-border)',
  marginLeft: 16,
  padding: '0 16px',
  fontFamily: 'var(--font-family)',
  fontSize: 13,
  color: 'var(--color-text-secondary)',
  display: 'flex',
  alignItems: 'center',
};

const TOOLBAR = {
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  marginLeft: 'auto',
  paddingLeft: 12,
};

const EXTENSION_BTN = (glow) => ({
  width: 40,
  height: 40,
  borderRadius: 10,
  border: glow ? '2px solid var(--color-primary)' : '2px solid var(--color-border)',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: glow ? 'var(--color-primary-subtle)' : 'var(--color-bg-default)',
  transition: 'border-color 0.2s ease, background-color 0.2s ease, transform 0.15s ease',
});

const PAGE = {
  flex: 1,
  overflow: 'auto',
  backgroundColor: 'var(--color-bg-default)',
  padding: 24,
  display: 'flex',
  gap: 24,
};

const PRODUCT_MOCK = {
  flex: 1,
  minWidth: 0,
};

const PRODUCT_IMAGE = {
  width: '100%',
  maxWidth: 320,
  aspectRatio: '1',
  backgroundColor: 'var(--color-bg-subtle)',
  borderRadius: 'var(--radius-12)',
  marginBottom: 16,
  objectFit: 'cover',
};

const PRODUCT_TITLE = {
  fontFamily: 'var(--font-family)',
  fontSize: 22,
  fontWeight: 600,
  color: 'var(--color-text-primary)',
  marginBottom: 8,
};

const PRODUCT_PRICE = {
  fontFamily: 'var(--font-family)',
  fontSize: 24,
  fontWeight: 700,
  color: 'var(--color-primary)',
  marginBottom: 16,
};

const PRODUCT_DESC = {
  fontFamily: 'var(--font-family)',
  fontSize: 14,
  color: 'var(--color-text-secondary)',
  lineHeight: 1.5,
};

const PANEL_WRAP = {
  width: 384,
  flexShrink: 0,
  borderLeft: '1px solid var(--color-border)',
  backgroundColor: 'var(--color-bg-default)',
  overflow: 'hidden',
  animation: 'dealspot-panel-drop 0.3s ease-out',
  boxShadow: 'var(--shadow-panel)',
};

const PANEL_PLACEHOLDER = {
  width: 384,
  flexShrink: 0,
  borderLeft: '1px solid var(--color-border)',
  backgroundColor: 'var(--color-bg-subtle)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'var(--font-family)',
  fontSize: 13,
  color: 'var(--color-text-tertiary)',
  padding: 24,
  textAlign: 'center',
};

const DEMO_LINK = {
  fontFamily: 'var(--font-family)',
  fontSize: 11,
  color: 'var(--color-link)',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  textDecoration: 'underline',
};

export function Desktop() {
  const [panelOpen, setPanelOpen] = useState(false);
  const [panelState, setPanelState] = useState('results');

  return (
    <div className="dealspot-frame Desktop" style={{ width: '100%', maxWidth: 1200 }}>
      <div style={BROWSER}>
        <div style={CHROME}>
          <div style={{ display: 'flex', gap: 6 }}>
            <div style={DOT('#ff5f57')} />
            <div style={DOT('#febc2e')} />
            <div style={DOT('#28c840')} />
          </div>
          <div style={URL_BAR}>
            https://tokopedia.com/example-product
          </div>
          <div style={TOOLBAR}>
            <button
              type="button"
              style={EXTENSION_BTN(!panelOpen)}
              onClick={() => setPanelOpen(!panelOpen)}
              title="Open DealSpot — Compare prices"
              className={!panelOpen ? 'dealspot-animate-glow' : ''}
              onMouseEnter={(e) => { if (!panelOpen) e.currentTarget.style.transform = 'scale(1.05)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
            >
              <Logo size="compact" showWordmark={false} />
            </button>
          </div>
        </div>
        <div style={PAGE}>
          <div style={PRODUCT_MOCK}>
            <img
              src="/placeholder-kemeja.jpg"
              alt=""
              style={PRODUCT_IMAGE}
            />
            <h1 style={PRODUCT_TITLE}>Kemeja Pria Lengan Panjang Oxford</h1>
            <div style={PRODUCT_PRICE}>Rp 199.000</div>
            <p style={PRODUCT_DESC}>
              Kemeja formal pria bahan cotton oxford. Cocok untuk kerja dan acara semi-formal.
              Klik ikon DealSpot di toolbar untuk membandingkan harga di toko lain.
            </p>
            {panelOpen && (
              <div style={{ marginTop: 16, fontSize: 12, color: 'var(--color-text-tertiary)' }}>
                Demo panel:{' '}
                <button type="button" style={DEMO_LINK} onClick={() => setPanelState('results')}>Hasil</button>
                {' · '}
                <button type="button" style={DEMO_LINK} onClick={() => setPanelState('empty')}>Kosong</button>
                {' · '}
                <button type="button" style={DEMO_LINK} onClick={() => setPanelState('errorPartial')}>Error sebagian</button>
                {' · '}
                <button type="button" style={DEMO_LINK} onClick={() => setPanelState('errorFull')}>Error penuh</button>
              </div>
            )}
          </div>
          {panelOpen ? (
            <div style={PANEL_WRAP}>
              <ExtensionPanel
                embedded
                empty={panelState === 'empty'}
                error={panelState === 'errorPartial' ? 'partial' : panelState === 'errorFull' ? 'full' : null}
                errorSource="Lazada"
                onRetry={() => setPanelState('results')}
              />
            </div>
          ) : (
            <div style={PANEL_PLACEHOLDER}>
              Klik ikon DealSpot di toolbar untuk membuka panel perbandingan harga.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
