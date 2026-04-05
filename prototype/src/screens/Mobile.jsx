import React, { useState, useRef, useEffect } from 'react';
import { Logo } from '../components/Logo';
import { SearchBar } from '../components/SearchBar';
import { Chip } from '../components/Chip';
import { Card } from '../components/Card';
import { EmptyState } from '../components/EmptyState';
import { Button } from '../components/Button';
import { CategoryIcon, IconSort, IconChevronRight, IconChevronLeft, IconMapPin, IconBell, IconBookmark } from '../components/Icons';

const PADDING_H = 24;
const PADDING_V = 20;

const WRAPPER = {
  width: 390,
  height: 844,
  backgroundColor: 'var(--color-bg-default)',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  boxShadow: '0 0 0 1px var(--color-border)',
  borderRadius: 16,
  position: 'relative',
};

const HEADER = {
  padding: `${PADDING_V}px ${PADDING_H}px ${PADDING_V - 8}px`,
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 'var(--space-12)',
};

const SUBHEADER_BACK = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 'var(--space-8)',
  padding: 'var(--space-8) 0',
  minHeight: 44,
  border: 'none',
  background: 'none',
  fontFamily: 'var(--font-family)',
  fontSize: 'var(--text-body-size)',
  lineHeight: 'var(--text-body-line)',
  color: 'var(--color-link)',
  cursor: 'pointer',
};

const SCREEN_TITLE = {
  fontFamily: 'var(--font-family)',
  fontSize: 'var(--text-h2-size)',
  fontWeight: 'var(--text-h2-weight)',
  lineHeight: 'var(--text-h2-line)',
  color: 'var(--color-text-primary)',
  marginBottom: 'var(--space-24)',
};

const SCREEN_TITLE_ROW = {
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--space-12)',
  marginBottom: 'var(--space-24)',
};

const INPUT_HINT = {
  fontFamily: 'var(--font-family)',
  fontSize: 'var(--text-caption-size)',
  lineHeight: 'var(--text-caption-line)',
  color: 'var(--color-text-tertiary)',
  marginTop: 'var(--space-8)',
  marginBottom: 'var(--space-24)',
};

const LOCATION_ROW = {
  padding: `0 ${PADDING_H}px`,
  marginBottom: PADDING_V - 4,
  flexShrink: 0,
};

const SEARCH_SECTION = {
  padding: `0 ${PADDING_H}px`,
  marginBottom: PADDING_V,
};

const CHIPS_SECTION = {
  marginBottom: PADDING_V,
  position: 'relative',
};

const CHIPS_WRAP = {
  overflowX: 'auto',
  overflowY: 'hidden',
  WebkitOverflowScrolling: 'touch',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
};

const CHIPS = {
  display: 'inline-flex',
  gap: 'var(--space-8)',
  padding: `10px ${PADDING_H}px 12px`,
  width: 'max-content',
  boxSizing: 'border-box',
};

const chipFadeBase = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  width: 56,
  display: 'flex',
  alignItems: 'center',
  padding: 0,
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  zIndex: 2,
  font: 'inherit',
  transition: 'opacity 0.2s ease',
};

const CHIPS_FADE_LEFT = {
  ...chipFadeBase,
  left: 0,
  background: 'linear-gradient(to right, var(--color-bg-default) 0%, var(--color-bg-default) 28%, transparent 100%)',
  justifyContent: 'flex-start',
  paddingLeft: 6,
};

const CHIPS_FADE_RIGHT = {
  ...chipFadeBase,
  right: 0,
  background: 'linear-gradient(to left, var(--color-bg-default) 0%, var(--color-bg-default) 28%, transparent 100%)',
  justifyContent: 'flex-end',
  paddingRight: 6,
};

const CHIPS_ARROW_ICON = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 32,
  height: 32,
  color: 'var(--color-text-secondary)',
  filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.12))',
};

const RESULTS_HEADER = {
  padding: `0 ${PADDING_H}px ${PADDING_V - 8}px`,
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 12,
};

const QUERY = {
  fontFamily: 'var(--font-family)',
  fontSize: 'var(--text-body-small-size)',
  color: 'var(--color-text-secondary)',
  flex: 1,
  minWidth: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};

const SORT_BTN = {
  flexShrink: 0,
  height: 36,
  minWidth: 36,
  padding: '0 10px',
  borderRadius: 'var(--radius-8)',
  border: '1px solid var(--color-border)',
  backgroundColor: 'var(--color-bg-default)',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 4,
  fontFamily: 'var(--font-family)',
  fontSize: 'var(--text-caption-size)',
  color: 'var(--color-text-secondary)',
};

const POPOVER = {
  position: 'absolute',
  top: '100%',
  right: PADDING_H,
  marginTop: 4,
  minWidth: 160,
  backgroundColor: 'var(--color-bg-elevated)',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--radius-8)',
  boxShadow: 'var(--shadow-popover)',
  padding: 'var(--space-8)',
  zIndex: 30,
};

const POPOVER_ITEM = {
  display: 'block',
  width: '100%',
  padding: '10px 12px',
  border: 'none',
  borderRadius: 6,
  fontFamily: 'var(--font-family)',
  fontSize: 'var(--text-body-small-size)',
  color: 'var(--color-text-primary)',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  textAlign: 'left',
};

const LIST = {
  flex: 1,
  overflow: 'auto',
  padding: `0 ${PADDING_H}px ${PADDING_V + 16}px`,
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 'var(--space-12)',
  gridAutoRows: 'minmax(300px, 1fr)',
  alignContent: 'start',
};

const SUBSCREEN_PAD = {
  padding: `0 ${PADDING_H}px ${PADDING_V + 16}px`,
  flex: 1,
  overflow: 'auto',
};

const INPUT_FIELD = {
  width: '100%',
  height: 48,
  minHeight: 48,
  padding: '0 var(--space-16)',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--radius-8)',
  fontFamily: 'var(--font-family)',
  fontSize: 'var(--text-body-size)',
  lineHeight: 'var(--text-body-line)',
  color: 'var(--color-text-primary)',
  backgroundColor: 'var(--color-bg-default)',
  marginBottom: 0,
  outline: 'none',
  boxSizing: 'border-box',
};

const PILL_SAVED = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 'var(--space-8)',
  minHeight: 44,
  paddingLeft: 'var(--space-12)',
  paddingRight: 'var(--space-16)',
  borderRadius: 'var(--radius-pill)',
  backgroundColor: 'var(--color-primary-subtle)',
  color: 'var(--color-primary)',
  border: 'none',
  fontFamily: 'var(--font-family)',
  fontSize: 'var(--text-body-small-size)',
  fontWeight: 500,
  lineHeight: 'var(--text-body-small-line)',
  cursor: 'pointer',
};

const SAVED_LIST = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--space-12)',
};

const SAVED_ITEM_WRAP = {
  padding: 'var(--space-16)',
  backgroundColor: 'var(--color-bg-elevated)',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--radius-12)',
  marginBottom: 'var(--space-16)',
};

const NOTIF_ROW = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 'var(--space-12)',
  paddingTop: 'var(--space-12)',
  borderTop: '1px solid var(--color-border)',
  fontFamily: 'var(--font-family)',
  fontSize: 'var(--text-body-small-size)',
  lineHeight: 'var(--text-body-small-line)',
  color: 'var(--color-text-secondary)',
};

const TOGGLE_WRAP = {
  minWidth: 44,
  minHeight: 44,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
};

const TOGGLE = {
  width: 44,
  height: 24,
  borderRadius: 'var(--radius-pill)',
  backgroundColor: 'var(--color-bg-subtle)',
  border: '1px solid var(--color-border)',
  cursor: 'pointer',
  position: 'relative',
  flexShrink: 0,
  transition: 'background-color 0.2s ease, border-color 0.2s ease',
};

const TOGGLE_KNOB = (on) => ({
  position: 'absolute',
  width: 18,
  height: 18,
  borderRadius: '50%',
  backgroundColor: 'white',
  top: 2,
  left: on ? 22 : 2,
  boxShadow: 'var(--shadow-card)',
  transition: 'left 0.2s ease',
});

const CARD_WRAP = {
  minHeight: 0,
  display: 'flex',
  flexDirection: 'column',
};

const categories = [
  { id: 'all', label: 'Semua' },
  { id: 'fashion', label: 'Fashion' },
  { id: 'elektronik', label: 'Elektronik' },
  { id: 'rumah', label: 'Rumah' },
  { id: 'kecantikan', label: 'Kecantikan' },
  { id: 'olahraga', label: 'Olahraga' },
  { id: 'gaming', label: 'Gaming' },
  { id: 'buku', label: 'Buku' },
];

const categoryIcons = {
  fashion: 'Fashion',
  elektronik: 'Elektronik',
  rumah: 'Rumah',
  kecantikan: 'Kecantikan',
  olahraga: 'Olahraga',
  gaming: 'Elektronik',
  buku: 'Rumah',
};

const sortOptions = ['Harga terendah', 'Harga tertinggi', 'Rating', 'Terbaru'];

const products = [
  { title: 'Kemeja Pria Oxford Lengan Panjang', store: 'Tokopedia', price: 'Rp 189.000', bestDeal: true, memberDiscount: false, category: 'fashion', seed: 'kemeja1' },
  { title: 'Kemeja Formal Pria Slim Fit', store: 'Shopee', price: 'Rp 199.000', bestDeal: false, memberDiscount: true, category: 'fashion', seed: 'kemeja2' },
  { title: 'Kemeja Kerja Pria Cotton', store: 'Lazada', price: 'Rp 195.000', bestDeal: false, memberDiscount: false, category: 'fashion', seed: 'kemeja3' },
  { title: 'Kemeja Pria Lengan Pendek', store: 'Blibli', price: 'Rp 179.000', bestDeal: false, memberDiscount: true, category: 'fashion', seed: 'kemeja4' },
  { title: 'Kemeja Flanel Pria Casual', store: 'Tokopedia', price: 'Rp 215.000', bestDeal: false, memberDiscount: false, category: 'fashion', seed: 'kemeja5' },
  { title: 'Kemeja Polo Pria', store: 'Shopee', price: 'Rp 165.000', bestDeal: false, memberDiscount: true, category: 'fashion', seed: 'kemeja6' },
];

export function Mobile() {
  const [query, setQuery] = useState('kemeja pria');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('Harga terendah');
  const [sortOpen, setSortOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [chipsScrollLeft, setChipsScrollLeft] = useState(0);
  const [chipsAtEnd, setChipsAtEnd] = useState(false);
  const [locationName, setLocationName] = useState('Jakarta Pusat');
  const [view, setView] = useState('search');
  const [locationInput, setLocationInput] = useState('');
  const [savedItems, setSavedItems] = useState([
    { id: 's1', title: 'Kemeja Pria Oxford Lengan Panjang', store: 'Tokopedia', price: 'Rp 189.000', notifOn: true, seed: 'kemeja1' },
    { id: 's2', title: 'Kemeja Formal Pria Slim Fit', store: 'Shopee', price: 'Rp 199.000', notifOn: false, seed: 'kemeja2' },
  ]);
  const sortRef = useRef(null);
  const chipsScrollRef = useRef(null);

  const filteredProducts = products.filter(
    (p) => selectedCategory === 'all' || p.category === selectedCategory
  );

  useEffect(() => {
    if (!sortOpen) return;
    const close = (e) => {
      if (sortRef.current && !sortRef.current.contains(e.target)) setSortOpen(false);
    };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [sortOpen]);

  useEffect(() => {
    const el = chipsScrollRef.current;
    if (!el) return;
    const update = () => {
      const left = el.scrollLeft;
      const maxLeft = el.scrollWidth - el.clientWidth;
      setChipsScrollLeft(left);
      setChipsAtEnd(maxLeft <= 0 || left >= maxLeft - 2);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2000);
  };

  const updateChipsScrollState = () => {
    const el = chipsScrollRef.current;
    if (!el) return;
    const left = el.scrollLeft;
    const maxLeft = el.scrollWidth - el.clientWidth;
    setChipsScrollLeft(left);
    setChipsAtEnd(maxLeft <= 0 || left >= maxLeft - 2);
  };

  const scrollChipsRight = () => {
    const el = chipsScrollRef.current;
    if (el) {
      el.scrollTo({ left: el.scrollWidth - el.clientWidth, behavior: 'smooth' });
    }
  };

  const scrollChipsLeft = () => {
    const el = chipsScrollRef.current;
    if (el) {
      el.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  const openLocation = () => {
    setLocationInput(locationName || '');
    setView('location');
  };

  const saveLocation = () => {
    setLocationName(locationInput.trim() || 'Jakarta Pusat');
    setView('search');
    showToast('Lokasi disimpan');
  };

  const toggleSavedNotif = (id) => {
    setSavedItems((prev) => prev.map((p) => (p.id === id ? { ...p, notifOn: !p.notifOn } : p)));
  };

  return (
    <div style={WRAPPER} className="dealspot-frame Mobile">
      <header style={HEADER}>
        {view === 'search' && (
          <>
            <Logo />
            <button type="button" style={PILL_SAVED} onClick={() => setView('saved')} aria-label="Daftar simpan">
              <IconBookmark size={18} />
              Daftar simpan
            </button>
          </>
        )}
        {view === 'location' && (
          <>
            <button type="button" style={SUBHEADER_BACK} onClick={() => setView('search')}>
              <IconChevronLeft size={22} />
              Kembali
            </button>
          </>
        )}
        {view === 'saved' && (
          <>
            <button type="button" style={SUBHEADER_BACK} onClick={() => setView('search')}>
              <IconChevronLeft size={22} />
              Kembali
            </button>
          </>
        )}
      </header>

      {view === 'location' && (
        <div style={SUBSCREEN_PAD}>
          <div style={SCREEN_TITLE_ROW}>
            <span style={{ color: 'var(--color-primary)', flexShrink: 0 }}>
              <IconMapPin size={28} />
            </span>
            <h1 style={{ ...SCREEN_TITLE, marginBottom: 0 }}>Lokasi pengiriman</h1>
          </div>
          <input
            type="text"
            style={INPUT_FIELD}
            placeholder="Kota atau kecamatan"
            value={locationInput}
            onChange={(e) => setLocationInput(e.target.value)}
            aria-label="Kota atau kecamatan"
            className="dealspot-input-focus"
          />
          <p style={INPUT_HINT}>Untuk estimasi ongkir yang akurat.</p>
          <Button variant="primary" mobile onClick={saveLocation} className="dealspot-btn-transition">
            Simpan
          </Button>
        </div>
      )}

      {view === 'saved' && (
        <div style={SUBSCREEN_PAD}>
          <h1 style={{ ...SCREEN_TITLE, marginBottom: 'var(--space-16)' }}>Daftar simpan</h1>
          {savedItems.length === 0 ? (
            <EmptyState
              variant="saved"
              message="Belum ada produk disimpan. Simpan dari hasil pencarian untuk dapat notifikasi harga."
              ctaLabel="Cari produk"
              onCta={() => setView('search')}
            />
          ) : (
            <div style={SAVED_LIST}>
              {savedItems.map((item) => (
                <div key={item.id} style={SAVED_ITEM_WRAP}>
                  <Card
                    title={item.title}
                    storeName={item.store}
                    price={item.price}
                    imageSeed={item.seed}
                    ctaSize="compact"
                    fillHeight={false}
                    onCtaClick={() => showToast(`Membuka ${item.store}...`)}
                  />
                  <div style={NOTIF_ROW}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)' }}>
                      <span style={{ color: 'var(--color-text-tertiary)', display: 'flex' }}>
                        <IconBell size={16} />
                      </span>
                      Notifikasi harga
                    </span>
                    <div style={TOGGLE_WRAP}>
                      <button
                        type="button"
                        style={{
                          ...TOGGLE,
                          backgroundColor: item.notifOn ? 'var(--color-primary)' : undefined,
                          borderColor: item.notifOn ? 'var(--color-primary)' : undefined,
                        }}
                        onClick={() => toggleSavedNotif(item.id)}
                        aria-pressed={item.notifOn}
                        aria-label={item.notifOn ? 'Matikan notifikasi' : 'Nyalakan notifikasi'}
                      >
                        <span style={TOGGLE_KNOB(item.notifOn)} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {view === 'search' && (
        <>
          <div style={LOCATION_ROW}>
            <Chip
              label={locationName ? `Dikirim ke: ${locationName}` : 'Set lokasi'}
              icon={<IconMapPin size={16} />}
              onClick={openLocation}
              className="dealspot-chip-transition"
            />
          </div>
          <div style={SEARCH_SECTION}>
        <SearchBar
          placeholder="Cari produk, bandingkan harga"
          value={query}
          onChange={setQuery}
        />
      </div>
      <div style={CHIPS_SECTION}>
        <div
          ref={chipsScrollRef}
          style={CHIPS_WRAP}
          className="hide-scrollbar"
          onScroll={updateChipsScrollState}
        >
          <div style={CHIPS}>
            {categories.map(({ id, label }) => (
              <Chip
                key={id}
                label={label}
                icon={categoryIcons[id] ? <CategoryIcon name={categoryIcons[id]} size={16} /> : null}
                selected={selectedCategory === id}
                onClick={() => setSelectedCategory(id)}
                className="dealspot-chip-transition"
              />
            ))}
          </div>
        </div>
        {chipsScrollLeft > 4 && (
          <button
            type="button"
            style={CHIPS_FADE_LEFT}
            onClick={scrollChipsLeft}
            aria-label="Scroll categories to the start"
          >
            <span style={CHIPS_ARROW_ICON}>
              <IconChevronLeft size={22} />
            </span>
          </button>
        )}
        <button
          type="button"
          style={{
            ...CHIPS_FADE_RIGHT,
            opacity: chipsAtEnd ? 0.35 : 1,
            pointerEvents: chipsAtEnd ? 'none' : 'auto',
          }}
          onClick={scrollChipsRight}
          aria-label="Scroll categories to the end"
        >
          <span style={CHIPS_ARROW_ICON}>
            <IconChevronRight size={22} />
          </span>
        </button>
      </div>
      <div style={RESULTS_HEADER}>
        <div style={QUERY} className="dealspot-animate-fade-in">
          Hasil untuk &lsquo;{query}&rsquo;
        </div>
        <div style={{ position: 'relative' }} ref={sortRef}>
          <button
            type="button"
            style={SORT_BTN}
            onClick={() => setSortOpen((o) => !o)}
            aria-expanded={sortOpen}
            aria-haspopup="listbox"
          >
            <IconSort size={18} />
            <span>Sort</span>
          </button>
          {sortOpen && (
            <div style={POPOVER} role="listbox">
              {sortOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  style={{
                    ...POPOVER_ITEM,
                    backgroundColor: sortBy === opt ? 'var(--color-primary-subtle)' : undefined,
                    color: sortBy === opt ? 'var(--color-primary)' : undefined,
                  }}
                  onClick={() => {
                    setSortBy(opt);
                    setSortOpen(false);
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div style={LIST}>
        {filteredProducts.length === 0 ? (
          <div style={{ gridColumn: '1 / -1' }}>
            <EmptyState
            message={`Tidak ada hasil untuk '${query}'. Coba kata kunci lain atau ubah filter.`}
            ctaLabel="Tampilkan semua kategori"
            onCta={() => setSelectedCategory('all')}
          />
          </div>
        ) : (
          filteredProducts.map((p, i) => (
            <div
              key={p.seed}
              style={{ ...CARD_WRAP, animationDelay: `${i * 0.05}s` }}
              className="dealspot-animate-slide-up"
            >
              <Card
                title={p.title}
                storeName={p.store}
                price={p.price}
                bestDeal={p.bestDeal}
                memberDiscount={p.memberDiscount}
                imageSeed={p.seed}
                ctaSize="compact"
                fillHeight
                onCtaClick={() => showToast(`Membuka ${p.store}...`)}
              />
            </div>
          ))
        )}
      </div>
        </>
      )}

      {toast && (
        <div
          className="dealspot-animate-slide-up"
          style={{
            position: 'absolute',
            bottom: 32,
            left: PADDING_H,
            right: PADDING_H,
            margin: '0 auto',
            maxWidth: 280,
            backgroundColor: 'var(--color-text-primary)',
            color: 'var(--color-on-primary)',
            padding: '12px 20px',
            borderRadius: 'var(--radius-8)',
            fontSize: 'var(--text-body-small-size)',
            fontFamily: 'var(--font-family)',
            boxShadow: 'var(--shadow-toast)',
            zIndex: 20,
            textAlign: 'center',
          }}
        >
          {toast}
        </div>
      )}
    </div>
  );
}
