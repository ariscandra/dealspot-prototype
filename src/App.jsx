import React, { useState, useEffect } from 'react';
import { Desktop } from './screens/Desktop';
import { Mobile } from './screens/Mobile';
import { LogoScreen } from './screens/Logo';
import { BreakdownCarousel } from './components/BreakdownCarousel';
import {
  breakdownDesktop,
  breakdownExtensionPanel,
  breakdownExtensionPanelEmpty,
  breakdownExtensionPanelError,
  breakdownMobile,
  breakdownMobileLocation,
  breakdownMobileSaved,
  breakdownLogo,
} from './data/breakdowns';

const THEME_KEY = 'dealspot-theme';

const TABS = [
  { id: 'desktop', label: 'Desktop' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'logo', label: 'Logo' },
];

const navStyle = {
  position: 'sticky',
  top: 0,
  zIndex: 10,
  backgroundColor: 'var(--color-bg-default)',
  borderBottom: '1px solid var(--color-border)',
  padding: 'var(--space-12) var(--space-24)',
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--space-8)',
  flexWrap: 'wrap',
  boxShadow: 'var(--shadow-nav)',
};

const showNavBtnStyle = {
  position: 'fixed',
  bottom: 'var(--space-24)',
  right: 'var(--space-24)',
  zIndex: 20,
  width: 48,
  height: 48,
  borderRadius: '50%',
  border: '1px solid var(--color-border)',
  backgroundColor: 'var(--color-bg-default)',
  boxShadow: 'var(--shadow-popover)',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 22,
  color: 'var(--color-text-primary)',
};

const tabStyle = (active) => ({
  padding: 'var(--space-8) var(--space-16)',
  borderRadius: 'var(--radius-8)',
  border: 'none',
  fontFamily: 'var(--font-family)',
  fontSize: 'var(--text-body-size)',
  fontWeight: 500,
  cursor: 'pointer',
  backgroundColor: active ? 'var(--color-primary-subtle)' : 'var(--color-bg-subtle)',
  color: active ? 'var(--color-primary)' : 'var(--color-text-primary)',
  transition: 'background-color 0.2s ease, color 0.2s ease',
});

const mainStyle = {
  padding: 'var(--space-24)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh',
};

const collapseBtnStyle = {
  padding: 'var(--space-8) var(--space-12)',
  borderRadius: 'var(--radius-8)',
  border: '1px solid var(--color-border)',
  backgroundColor: 'var(--color-bg-subtle)',
  fontFamily: 'var(--font-family)',
  fontSize: 'var(--text-body-small-size)',
  color: 'var(--color-text-secondary)',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--space-8)',
};

function getCarouselItems(active) {
  if (active === 'desktop') {
    return [
      ...breakdownDesktop,
      ...breakdownExtensionPanel,
      ...breakdownExtensionPanelEmpty,
      ...breakdownExtensionPanelError,
    ];
  }
  if (active === 'mobile') {
    return [
      ...breakdownMobile,
      ...breakdownMobileLocation,
      ...breakdownMobileSaved,
    ];
  }
  const byTab = {
    desktop: breakdownDesktop,
    logo: breakdownLogo,
  };
  return byTab[active] || [];
}

function readTheme() {
  try {
    return localStorage.getItem(THEME_KEY) || 'light';
  } catch {
    return 'light';
  }
}

export default function App() {
  const [active, setActive] = useState('desktop');
  const [theme, setTheme] = useState(readTheme);
  const [navCollapsed, setNavCollapsed] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : '');
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (_) {}
  }, [theme]);

  const screen = {
    desktop: <Desktop />,
    mobile: <Mobile />,
    logo: <LogoScreen />,
  };

  const carouselItems = getCarouselItems(active);

  return (
    <>
      {!navCollapsed && (
        <nav style={navStyle} aria-label="Prototype screens">
          <button
            type="button"
            style={collapseBtnStyle}
            onClick={() => setNavCollapsed(true)}
            title="Sembunyikan navigasi"
            aria-expanded="true"
          >
            <span aria-hidden>▲</span>
          </button>
          {TABS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              style={tabStyle(active === id)}
              onClick={() => setActive(id)}
            >
              {label}
            </button>
          ))}
          <button
            type="button"
            style={{
              marginLeft: 'auto',
              padding: 'var(--space-8) var(--space-12)',
              borderRadius: 'var(--radius-8)',
              border: '1px solid var(--color-border)',
              fontFamily: 'var(--font-family)',
              fontSize: 'var(--text-caption-size)',
              color: 'var(--color-text-secondary)',
              backgroundColor: 'var(--color-bg-subtle)',
              cursor: 'pointer',
            }}
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            title="Toggle light/dark theme"
          >
            {theme === 'dark' ? '☀ Light' : '◇ Dark'}
          </button>
        </nav>
      )}
      {navCollapsed && (
        <button
          type="button"
          style={showNavBtnStyle}
          onClick={() => setNavCollapsed(false)}
          title="Tampilkan navigasi"
          aria-label="Tampilkan navigasi"
        >
          ☰
        </button>
      )}
      <main style={mainStyle}>
        {screen[active]}
        {carouselItems.length > 0 && (
          <BreakdownCarousel items={carouselItems} title="Keterangan mockup" />
        )}
      </main>
    </>
  );
}
