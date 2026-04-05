import React from 'react';

const iconProps = (size = 20) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
});

export function IconTruck({ size = 20 }) {
  return (
    <svg {...iconProps(size)} aria-hidden>
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18h2" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
    </svg>
  );
}

export function IconTag({ size = 20 }) {
  return (
    <svg {...iconProps(size)} aria-hidden>
      <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
      <path d="M7 7h.01" />
    </svg>
  );
}

export function IconStore({ size = 20 }) {
  return (
    <svg {...iconProps(size)} aria-hidden>
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" />
    </svg>
  );
}

export function IconSearch({ size = 20 }) {
  return (
    <svg {...iconProps(size)} aria-hidden>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

export function IconShirt({ size = 20 }) {
  return (
    <svg {...iconProps(size)} aria-hidden>
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </svg>
  );
}

export function IconZap({ size = 20 }) {
  return (
    <svg {...iconProps(size)} aria-hidden>
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
  );
}

export function IconHome({ size = 20 }) {
  return (
    <svg {...iconProps(size)} aria-hidden>
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

export function IconSparkles({ size = 20 }) {
  return (
    <svg {...iconProps(size)} aria-hidden>
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  );
}

export function IconDumbbell({ size = 20 }) {
  return (
    <svg {...iconProps(size)} aria-hidden>
      <path d="M6.5 6.5h11" />
      <path d="M6.5 6.5v11" />
      <path d="M17.5 6.5v11" />
      <path d="M6.5 12h11" />
      <path d="M2 10h3" />
      <path d="M19 10h3" />
      <path d="M2 14h3" />
      <path d="M19 14h3" />
    </svg>
  );
}

export function IconExternal({ size = 20 }) {
  return (
    <svg {...iconProps(size)} aria-hidden>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export function IconStar({ size = 20 }) {
  return (
    <svg {...iconProps(size)} aria-hidden>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export function IconSort({ size = 20 }) {
  return (
    <svg {...iconProps(size)} aria-hidden>
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
    </svg>
  );
}

export function IconChevronDown({ size = 20 }) {
  return (
    <svg {...iconProps(size)} aria-hidden>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function IconChevronRight({ size = 20 }) {
  return (
    <svg {...iconProps(size)} aria-hidden>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export function IconChevronLeft({ size = 20 }) {
  return (
    <svg {...iconProps(size)} aria-hidden>
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

export function IconMapPin({ size = 20 }) {
  return (
    <svg {...iconProps(size)} aria-hidden>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function IconAlertCircle({ size = 20 }) {
  return (
    <svg {...iconProps(size)} aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

export function IconBookmark({ size = 20 }) {
  return (
    <svg {...iconProps(size)} aria-hidden>
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export function IconBell({ size = 20 }) {
  return (
    <svg {...iconProps(size)} aria-hidden>
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

const CATEGORY_ICONS = {
  Fashion: IconShirt,
  Elektronik: IconZap,
  Rumah: IconHome,
  Kecantikan: IconSparkles,
  Olahraga: IconDumbbell,
};

export function CategoryIcon({ name, size = 20 }) {
  const Icon = CATEGORY_ICONS[name] || IconTag;
  return <Icon size={size} />;
}
