import React from 'react';

const gapMap = { default: 6, compact: 4 };
const markSizeMap = { default: 32, compact: 24 };
const wordmarkSizeMap = { default: 'var(--text-h2-size)', compact: '15px' };
const wordmarkLineMap = { default: 'var(--text-h2-line)', compact: '20px' };

function LogoMark({ size = 'default', variant = 'dark', style: styleProp }) {
  const px = size === 'compact' ? 24 : 32;
  const isLight = variant === 'light';
  return (
    <div
      style={{
        width: px,
        height: px,
        borderRadius: '50%',
        backgroundColor: isLight ? '#FFFFFF' : 'var(--color-primary)',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: isLight ? 'var(--color-primary)' : '#FFFFFF',
        fontFamily: 'var(--font-family)',
        fontWeight: 700,
        fontSize: size === 'compact' ? 12 : 16,
        lineHeight: 1,
        ...styleProp,
      }}
      aria-hidden
    >
      $
    </div>
  );
}

export function Logo({
  size = 'default',
  showWordmark = true,
  variant = 'dark',
}) {
  const gap = gapMap[size] ?? 6;
  const markPx = markSizeMap[size] ?? 32;
  const isLight = variant === 'light';
  const wordmarkColor = isLight ? '#FFFFFF' : 'var(--color-text-primary)';
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap,
      }}
      className="dealspot-logo"
    >
      <LogoMark size={size} variant={variant} />
      {showWordmark && (
        <span
          style={{
            fontFamily: 'var(--font-family)',
            fontSize: wordmarkSizeMap[size] ?? 'var(--text-h2-size)',
            fontWeight: 700,
            lineHeight: wordmarkLineMap[size] ?? 'var(--text-h2-line)',
            color: wordmarkColor,
            letterSpacing: '-0.02em',
          }}
        >
          DealSpot
        </span>
      )}
    </div>
  );
}

export function LogoMarkOnly({ size = 'default', variant = 'dark' }) {
  return <LogoMark size={size} variant={variant} />;
}

export function LogoCompact({ showWordmark = true, variant = 'dark' }) {
  return <Logo size="compact" showWordmark={showWordmark} variant={variant} />;
}

export function LogoLight({ size = 'default', showWordmark = true }) {
  return <Logo size={size} showWordmark={showWordmark} variant="light" />;
}
