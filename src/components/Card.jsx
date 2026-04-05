import React from 'react';
import { IconTruck, IconExternal, IconStore, IconTag } from './Icons';

const thumbStyle = {
  width: '100%',
  aspectRatio: '4/3',
  backgroundColor: 'var(--color-bg-subtle)',
  borderRadius: 'var(--radius-8)',
  objectFit: 'cover',
};

const thumbCompactStyle = {
  width: 64,
  minWidth: 64,
  height: 64,
  backgroundColor: 'var(--color-bg-subtle)',
  borderRadius: 'var(--radius-8)',
  objectFit: 'cover',
};

const titleStyle = {
  fontFamily: 'var(--font-family)',
  fontSize: 'var(--text-h3-size)',
  fontWeight: 600,
  lineHeight: 'var(--text-h3-line)',
  color: 'var(--color-text-primary)',
  margin: 'var(--space-8) 0 var(--space-4)',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
};

const storeStyle = {
  fontFamily: 'var(--font-family)',
  fontSize: 'var(--text-body-small-size)',
  fontWeight: 400,
  lineHeight: 'var(--text-body-small-line)',
  color: 'var(--color-text-secondary)',
  marginBottom: 'var(--space-8)',
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  minWidth: 0,
  overflow: 'hidden',
};

const priceStyle = {
  fontFamily: 'var(--font-family)',
  fontSize: 'var(--text-price-size)',
  fontWeight: 700,
  lineHeight: 'var(--text-price-line)',
  color: 'var(--color-text-primary)',
  marginBottom: 'var(--space-8)',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};

const shippingRowStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  fontFamily: 'var(--font-family)',
  fontSize: 'var(--text-body-small-size)',
  color: 'var(--color-text-secondary)',
  marginBottom: 'var(--space-8)',
};

const shippingFreeStyle = {
  color: 'var(--color-success)',
};

const badgeStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  padding: '2px 8px',
  borderRadius: 'var(--radius-8)',
  backgroundColor: 'var(--color-success-subtle)',
  color: 'var(--color-success)',
  fontSize: 'var(--text-caption-size)',
  fontWeight: 600,
  marginBottom: 'var(--space-8)',
};

const memberBadgeStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  padding: '2px 8px',
  borderRadius: 'var(--radius-8)',
  backgroundColor: 'var(--color-primary-subtle)',
  color: 'var(--color-primary)',
  fontSize: 'var(--text-caption-size)',
  fontWeight: 600,
  marginBottom: 'var(--space-8)',
  marginLeft: 'var(--space-4)',
};

export function getProductImageUrl(seed, width = 400, height = 300) {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${width}/${height}`;
}

export function Card({
  title,
  storeName,
  price,
  shipping,
  freeShipping = false,
  imageUrl,
  imageSeed,
  bestDeal = false,
  memberDiscount = false,
  compact = false,
  ctaLabel,
  ctaSize = 'default',
  interactive = true,
  onCtaClick,
  fillHeight = false,
}) {
  const isCompactCta = ctaSize === 'compact';
  const isSmallCta = ctaSize === 'small';
  const cta = ctaLabel ?? (isCompactCta ? 'Buka' : (storeName ? `View on ${storeName}` : 'View'));
  const imgSrc = imageUrl || (imageSeed ? getProductImageUrl(imageSeed, compact ? 128 : 400, compact ? 128 : 300) : null);
  const cardStyle = {
    backgroundColor: 'var(--color-bg-elevated)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-12)',
    padding: 'var(--space-12) var(--space-16)',
    boxShadow: 'var(--shadow-card)',
    display: compact ? 'flex' : 'block',
    gap: 'var(--space-12)',
    alignItems: 'flex-start',
    overflow: 'hidden',
    ...(fillHeight && !compact && {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0,
    }),
  };
  const thumbStyleFinal = compact
    ? thumbCompactStyle
    : { ...thumbStyle, ...(fillHeight ? { flexShrink: 0 } : {}) };
  const thumb = imgSrc ? (
    <img src={imgSrc} alt="" style={thumbStyleFinal} loading="lazy" />
  ) : (
    <div style={thumbStyleFinal} aria-hidden />
  );
  const titleEl = (
    <div style={{ ...titleStyle, ...(compact ? { marginTop: 0, WebkitLineClamp: 1 } : {}) }}>{title}</div>
  );
  const shippingEl = shipping && (
    <div style={shippingRowStyle}>
      <span style={{ display: 'flex', color: 'inherit' }}>
        <IconTruck size={14} />
      </span>
      <span style={freeShipping ? shippingFreeStyle : undefined}>{shipping}</span>
    </div>
  );
  return (
    <div
      style={cardStyle}
      className={`dealspot-card ${interactive ? 'dealspot-card-interactive' : ''}`}
    >
      {thumb}
      <div style={{ flex: 1, minWidth: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', ...(fillHeight && { justifyContent: 'space-between', flex: 1 }) }}>
        <div style={{ minWidth: 0, overflow: 'hidden' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
          {bestDeal && (
            <span style={badgeStyle}>
              <span style={{ display: 'flex' }}><IconTag size={12} /></span>
              Best deal
            </span>
          )}
          {memberDiscount && (
            <span style={memberBadgeStyle}>
              <span style={{ display: 'flex' }}><IconTag size={12} /></span>
              Member deal
            </span>
          )}
        </div>
        {titleEl}
        <div style={storeStyle}>
          <span style={{ flexShrink: 0, display: 'flex' }}><IconStore size={14} /></span>
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{storeName}</span>
        </div>
        <div style={priceStyle}>{price}</div>
        {shippingEl}
        </div>
        <button
          type="button"
          onClick={onCtaClick}
          className="dealspot-card-cta"
          style={{
            marginTop: 'auto',
            padding: 0,
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            fontFamily: 'var(--font-family)',
            fontSize: isCompactCta ? 12 : 13,
            fontWeight: 500,
            color: 'var(--color-primary)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 5,
            alignSelf: 'flex-start',
            minHeight: 24,
          }}
        >
          <span>{cta}</span>
          <span style={{ display: 'inline-flex', flexShrink: 0 }}><IconExternal size={isCompactCta ? 12 : 14} /></span>
        </button>
      </div>
    </div>
  );
}
