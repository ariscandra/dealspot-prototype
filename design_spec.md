# DealSpot — Design Specification (Prototype Guide)

**Purpose of this document:** This spec is the single source of truth for building the DealSpot UI prototype. It is written for the implementer (AI or human) so that all layout, color, typography, and component decisions are justified and reproducible. When asked to "create the prototype from the concept," use this spec plus `concept.md` and `prompt_dumpt.md`.

**Recommended implementation approach:** Build the prototype as a **multi-file React (or Vue) app** with a clear structure: one component per screen, shared UI components, and a single source of truth for design tokens. Open it in a **browser** so the user can review and give feedback. A single HTML file or one big React file is easier to set up but produces worse output—duplicated markup, no clean reuse, harder to iterate and to export to Figma later. For best output use multiple files and shared components. Optionally, use Code2Figma later to import into Figma.

**Reference:** Product concept and scope are in `concept.md`. Build instructions and frame list are in `prompt_dumpt.md`.

---

## 1. Product Summary (for context)

DealSpot is a **price-aggregation product** in two forms:

- **Browser extension:** Used when the user is already on a product page. Detects the product, shows a compact comparison panel with similar products from other stores (price, shipping, promo), and lets the user jump to the best option in one click. Optimizes the "before checkout" moment on desktop.
- **Mobile app:** Used when the user is searching from scratch. Single search bar, aggregated results from multiple e-commerce platforms in one list, with filters (price range, category, etc.) and sort (price, rating). Tap a result to go to the store. Optimizes discovery and comparison on the go.

Both aim to reduce friction and time spent comparing prices across platforms. Target categories (initial scope): fashion, small electronics, general household. Primary comparison factors: **price** and **shipping**; promo/rating can be secondary in the UI.

---

## 2. Design Goals & Principles

- **Clarity over cleverness:** Numbers (prices, savings, shipping) must be scannable in under 2 seconds. No decorative clutter that competes with data.
- **Trust:** The product helps users make rational decisions; the UI should feel reliable and neutral (no dark patterns, no fake urgency unless it’s a real deal).
- **Efficiency:** Extension = minimal steps to open panel and pick an alternative. Mobile = fast search, clear filters, and obvious tap targets.
- **Consistency:** Same color semantics, type scale, and component language across extension and app so "DealSpot" feels like one product.
- **Accessibility:** Contrast and touch targets must meet WCAG 2.1 AA where applicable; see Section 10.
- **Trust in UI:** Where relevant, surface transparency: e.g. "Data diperbarui [frekuensi]" (footer or subtle caption), and optional "Cara kami dapat data" link to privacy/explainer. No dark patterns; urgency only when real (e.g. real price drop).

---

## 3. Color Palette

Rationale: Deal/savings products often use warm accents (orange, amber) to signal value and action; blue is used for trust. We avoid looking like a generic "red sale" banner and avoid copying Honey’s exact orange so DealSpot is recognizable.

### 3.1 Primary palette

| Role | Hex | Usage |
|------|-----|--------|
| **Primary (brand)** | `#E85D04` | Main CTAs, key highlights, logo accent, "best price" indicators. Warm orange, energetic but not aggressive. |
| **Primary hover/pressed** | `#C44F03` | Hover and active states for primary buttons/links. |
| **Primary subtle** | `#FFF4ED` | Light background for "you save" badges, selected states, or soft highlights. |

*Justification:* Orange is associated with value and action in e-commerce; slightly deeper than Honey’s #FF7227 to feel more "spot/deal" and less "honey." Works on white and light gray.

### 3.2 Neutrals (UI and text)

| Role | Hex | Usage |
|------|-----|--------|
| **Text primary** | `#1A1A1A` | Headings, primary body copy. |
| **Text secondary** | `#5C5C5C` | Supporting text, captions, metadata (store name, "free shipping"). |
| **Text tertiary** | `#8C8C8C` | Placeholders, hints, disabled text. |
| **Border / divider** | `#E0E0E0` | Card borders, dividers, input borders. |
| **Background default** | `#FFFFFF` | Main canvas (extension panel, app screens). |
| **Background elevated** | `#FAFAFA` | Cards, dropdowns, modal backgrounds. |
| **Background subtle** | `#F5F5F5` | Search bar, filter chips, secondary sections. |

*Justification:* High contrast for text (1A1A on FFFFFF) for readability; grays keep the UI calm so price and CTA stand out.

### 3.3 Semantic colors

| Role | Hex | Usage |
|------|-----|--------|
| **Success / best price** | `#0D9488` | "Best deal," "Lowest total," success messages. Teal reads as positive without being "sale red." |
| **Success subtle** | `#CCFBF1` | Light background for best-deal badge or success toast. |
| **Warning / attention** | `#D97706` | Limited stock, price increased, or non-critical warnings. |
| **Error** | `#DC2626` | Errors, failed load, invalid input. |
| **Link** | `#2563EB` | Secondary links (e.g. "Learn more," "Terms"). |

*Justification:* Teal for "best" avoids red (which can feel like pressure); amber for warning is familiar and not alarming.

### 3.4 Usage rules

- **Extension panel:** White or #FAFAFA background; primary orange for "View on [Store]" and "Compare" CTAs; teal only for the single "best deal" card if we highlight one.
- **Mobile app:** Same palette; primary for main search CTA and primary buttons; teal for "Best deal" badge on cards.
- **Logo:** Primary orange as main brand color; see Section 6.

---

## 4. Typography

### 4.1 Font family

- **Primary:** **Inter** (or system-ui fallback). Rationale: Neutral, highly readable at small sizes (extension panel, dense tables), free, and widely supported. Avoids the "startup default" feel if we keep weight and scale intentional.
- **Optional for logo/marketing only:** A single display font for "DealSpot" wordmark only (e.g. **DM Sans** or **Plus Jakarta Sans** Bold). Do not use for body or UI labels in the prototype unless specified.

### 4.2 Scale (mobile & extension)

| Name | Size | Weight | Line height | Use |
|------|------|--------|-------------|-----|
| **H1** | 24px | 700 | 32px | App: main screen title (e.g. "Search") |
| **H2** | 20px | 600 | 28px | Panel title, modal title |
| **H3** | 17px | 600 | 24px | Card title, section heading |
| **Body** | 15px | 400 | 22px | Default body, product names |
| **Body small** | 13px | 400 | 20px | Metadata, store name, secondary info |
| **Caption** | 12px | 400 | 16px | Labels, hints, timestamps |
| **Price** | 18px | 700 | 24px | Main price (current/best) |
| **Price secondary** | 14px | 500 | 20px | Compare-at price, savings amount |

*Justification:* Sizes stay readable in a narrow extension panel and on mobile; price is the visual anchor so it’s larger and bold.

### 4.3 Rules

- Maximum line length for body: ~45–50 characters where possible (e.g. in modals or wide cards).
- Prices: always same format (e.g. "Rp 99.000" or "IDR 99.000") and use tabular figures if the font supports it for alignment in lists.

---

## 5. Logo & Brand Suggestions

### 5.1 Concept direction

- **"Deal" + "Spot":** Emphasize the idea of *spotting* the best deal. Visual ideas: a magnifying glass over a tag, a pin/marker on a map, or a spotlight on a price tag.
- **Avoid:** Generic shopping bag, honeycomb (Honey), or clip-art discount stickers. We want ownable and simple.

### 5.2 Logo recommendations

1. **Mark (icon):** Simple geometric mark that works at 16×16 (extension favicon) and 32×32 (app icon). Options:
   - **Tag + dot:** Stylized price tag with a circular "spot" (dot) on it; dot in primary orange, tag outline in neutral.
   - **Pin + "D":** Location pin shape that doubles as a "D" for DealSpot; single color (primary) on light background.
   - **Spotlight:** Minimal cone or beam shape suggesting "spotlight on a deal"; can sit beside wordmark.
2. **Wordmark:** "DealSpot" — one word, capital D and S. Prefer clean sans (e.g. Inter/DM Sans/Plus Jakarta Sans) in bold for headers; primary orange or text primary depending on background.
3. **Lockup:** Icon left of wordmark for headers; icon alone for favicon and app icon.

### 5.3 Do’s and don’ts

- **Do:** Use primary orange `#E85D04` for the mark on light backgrounds; ensure 3:1 minimum contrast for any text.
- **Don’t:** Use more than two colors in the mark; avoid thin strokes below 1.5px at small sizes.

---

## 6. Core UI Elements

These components appear across extension and mobile; keep proportions and styles consistent.

### 6.1 Buttons

- **Primary:** Background primary orange, white text, border-radius 8px. Height: 40px (desktop/extension), 44px (mobile for touch). Padding horizontal 16px. Hover: darker primary.
- **Secondary:** Outline only (border primary, text primary, transparent fill). Same radius and height.
- **Ghost / tertiary:** No border, text primary or secondary; for "Cancel," "Skip," low-emphasis actions.

### 6.2 Product / comparison card

- **Container:** White or #FAFAFA, border 1px #E0E0E0, border-radius 12px, padding 12–16px. Optional soft shadow for mobile (e.g. 0 2px 8px rgba(0,0,0,0.06)).
- **Content:** Thumbnail (fixed aspect ratio, e.g. 4:3 or 1:1), product name (H3 or Body, truncate 2 lines), store name (Body small, secondary color), price (Price style), optional "Best deal" badge (teal), CTA (e.g. "View" primary button or text link).
- **Extension:** Cards can be more compact (smaller thumbnail, single line title); "View on [Store]" as primary CTA.

### 6.3 Search input

- **Desktop/extension:** Height 40px, border 1px #E0E0E0, border-radius 8px, padding 12px 16px, placeholder in tertiary. Focus: border primary, optional ring.
- **Mobile:** Height 48px (touch-friendly), same style; optional full-width with search icon left.

### 6.4 Filters & chips

- **Filter chips (mobile):** Pill shape, border or light fill (#F5F5F5), 32px height, 12px horizontal padding. Selected: primary fill or primary border + primary text.
- **Sort dropdown:** Same as other dropdowns; label "Sort by" with options (Price low–high, Price high–low, Rating, Newest).

### 6.5 Badges

- **"Best deal":** Teal background (#CCFBF1) or teal text on light, small bold label (Caption or Body small).
- **Savings:** e.g. "Save Rp 20k" in success color or primary subtle background.
- **Store name:** Text only, secondary color; optional small store logo if available.

### 6.6 Empty & loading states

- **Empty (no results):** Illustration or icon + short message. Examples: "Tidak ada hasil untuk '[query]'. Coba kata kunci lain atau ubah filter." (mobile); "Belum ada perbandingan untuk produk ini." (extension). Include one clear CTA: "Cari di app" / "Ubah pencarian" / "Set lokasi untuk hasil lebih akurat" as appropriate.
- **Empty (saved list):** "Belum ada produk disimpan. Simpan dari hasil pencarian untuk dapat notifikasi harga." + CTA ke search/home.
- **Loading:** Skeleton cards (same layout as product card, gray placeholders) or spinner in brand primary; avoid blocking the whole panel/screen.

### 6.7 Error states

- **Partial failure (e.g. one platform down):** Show results from other platforms; add a non-blocking line or banner: "Sumber [Platform X] sementara tidak tersedia." Use text secondary or warning color; optional "Coba lagi" for retry.
- **Full failure / no connection:** Icon + "Tidak bisa memuat data. Periksa koneksi dan coba lagi." + primary CTA "Coba lagi". Use error color for message only if critical.

### 6.8 Location selector (Set lokasi)

- **Purpose:** Let users set delivery location so shipping estimates and "gratis ongkir" are meaningful.
- **Placement:** Extension: in panel header (icon + "Set lokasi") or settings; opens small modal or inline form. Mobile: entry from search/home (e.g. "Lokasi pengiriman" with current city/area) or from profile/settings.
- **UI:** Input for city/kecamatan or dropdown of common areas; optional "Gunakan lokasi saat ini" (with permission). After set: show short confirmation ("Ongkir untuk [Lokasi]") and use across comparison.
- **Fallback:** If no location set, show disclaimer near shipping info: "Set lokasi untuk estimasi ongkir akurat" (caption/link).

### 6.9 Comparison summary bar (extension)

- **Placement:** Directly below panel header / "Comparing: [product]".
- **Content:** One line: "Total termurah: [Store name], [Total Rp] (termasuk ongkir)" or "Termurah: [Store], Rp X". Use success/best-deal color for the store name or total. Optional: small "Berdasarkan lokasi Anda" if location is set.
- **Interaction:** Optional: tapping the line scrolls to or highlights that card. Keeps panel scannable in under 2 seconds.

### 6.10 Saved list & price alert

- **Saved item:** Same card as product card, with added: "Simpan" heart/icon (toggle saved), and "Notifikasi harga" toggle (on = dapat notifikasi saat harga turun atau stok kembali). In list view, show current price and optional "Turun X%" if price dropped since save.
- **List screen:** Title "Daftar simpan" or "Simpanan"; list of saved products; sort/filter optional. Empty state per 6.6.
- **Copy:** "Nyalakan notifikasi untuk diberi tahu saat harga turun." Tooltip or short explainer on first use acceptable.

### 6.11 Price history (future / backlog)

- **Intent:** Help users judge if a price is truly a deal (e.g. "Turun 12% dalam 30 hari" or "Harga terendah 90 hari: Rp X").
- **Placement (when implemented):** On card (small caption) or in product detail sheet. One line; success color if price dropped. No need to implement in current prototype; keep in spec for backlog.

---

## 7. Browser Extension UI

### 7.1 Context

- Shown when the user is on a product page; panel is a **side panel** (Chrome Side Panel API) or equivalent. No injection into the host page for the main UI; only an icon/indicator that opens the panel.
- Single-purpose: compare price for *this* product across stores. No full search hub in the extension.

### 7.2 Panel layout (recommended width: 360–400px)

- **Header:** DealSpot logo (compact lockup or icon + "DealSpot"), optional "Compare" or page title (e.g. product name truncated). Include **Set lokasi** (icon or text link) that opens location modal/sheet. Height ~56px.
- **Product context (optional):** One line or small block: "Comparing: [Product name from page]." Can be collapsed if many results.
- **Comparison summary bar (see 6.9):** One line below header: "Total termurah: [Store], Rp X (termasuk ongkir)" or equivalent. Uses success/best-deal styling.
- **List:** Vertical list of comparison cards (see 6.2). Each card: store, price, shipping, total or "Free shipping," "View on [Store]" button. If one is "best," add "Best deal" badge.
- **Footer (optional):** "Data diperbarui [frekuensi]" (trust), "Powered by DealSpot," settings link, or nothing to maximize list space.

### 7.3 States to consider in prototype

- **Loaded with results:** Summary bar + 3–5 cards visible; one with "Best deal." Location set or disclaimer "Set lokasi untuk ongkir akurat."
- **Loading:** Skeleton cards or spinner.
- **Empty / no comparisons:** Message per 6.6 (e.g. "Belum ada perbandingan untuk produk ini.") + CTA "Cari di app" or "Ubah pencarian."
- **Error:** Per 6.7: partial (show other results + "Sumber X sementara tidak tersedia") or full (message + "Coba lagi").
- **Location modal/sheet:** Small overlay or slide-in with location input and confirm; prototype can be static.

### 7.4 Desktop frame suggestions for prototype

- **Extension panel (main):** 384 × 600 px (or 720px to show scroll). Content: header with Set lokasi, "Comparing: [product]," **summary bar**, 4 comparison cards, optional footer with "Data diperbarui …". One card with "Best deal."
- **Extension panel – empty state:** Same size; replace list with empty state (icon + copy + CTA) per 6.6.
- **Extension panel – error state (optional):** Same size; show partial results + banner "Sumber [X] sementara tidak tersedia" or full error + retry.

---

## 8. Mobile App UI

### 8.1 Context

- Standalone app; entry is search. Results aggregated from multiple platforms; user can filter, sort, tap to open in store app or browser.

### 8.2 Key screens to cover in prototype

1. **Home / Search**
   - Top: DealSpot logo/wordmark, optional greeting.
   - **Lokasi pengiriman:** One line or chip (e.g. "Dikirim ke: Jakarta Pusat") tappable → opens Set lokasi screen/sheet.
   - Main: Large search bar (placeholder e.g. "Cari produk, bandingkan harga").
   - Below: Optional quick filters (categories) or "Recent searches"; can be simplified in prototype.

2. **Search results**
   - Sticky or inline: Sort + Filter chips (e.g. "Harga terendah," "Rating," "Gratis ongkir").
   - List: Scrollable product cards (image, name, price, store, optional "Best deal," **Simpan** and **Notifikasi harga** toggles per 6.10). Card tap → deep link to store app or browser.
   - **Empty state:** Per 6.6: "Tidak ada hasil untuk '[query]'. Coba kata kunci lain atau ubah filter." + CTA.
   - **Error (partial):** Optional banner "Sumber [X] sementara tidak tersedia" while showing other results.

3. **Set lokasi (Lokasi pengiriman)**
   - Screen or bottom sheet: Title "Lokasi pengiriman" / "Atur lokasi"; input or dropdown for kota/kecamatan; optional "Gunakan lokasi saat ini." Primary CTA "Simpan". After save, show confirmation and return to previous screen. Prototype can show one static state (form or confirmation).

4. **Daftar simpan (Saved list)**
   - Screen: Title "Daftar simpan"; list of saved product cards with price and "Notifikasi harga" toggle. Empty state per 6.6. Entry from tab bar or profile/menu.

5. **Product / comparison detail (optional)**
   - If we show a sheet or second screen for one product with multiple store options: same card pattern as extension; "Buka di [Store]" (deep link). Can be merged into one "results" screen for simplicity.

### 8.3 Layout and spacing

- Safe area: respect notch/status bar; bottom actions at least 34px from bottom.
- Grid: 2 columns for cards on mobile (or 1 column for larger cards); 16px gutter, 16px side padding.
- Section spacing: 24px between sections (e.g. search bar block vs result list).

### 8.4 Mobile frame suggestions for prototype

- **Mobile – Search:** 390 × 844 px. Logo, lokasi chip ("Dikirim ke: …"), search bar, category chips.
- **Mobile – Results:** Same viewport. "Hasil untuk '[query]'", sort/filter row, 4–6 product cards (one "Best deal"; cards show Simpan + Notifikasi harga where specified in spec).
- **Mobile – Results empty state:** Same viewport; replace list with empty state (no results) per 6.6.
- **Mobile – Set lokasi:** Same viewport. Title, location input/dropdown, CTA Simpan (one static state enough for prototype).
- **Mobile – Daftar simpan:** Same viewport. Title "Daftar simpan", 2–3 saved cards with notif toggle; or empty state per 6.6.

---

## 9. Prototype Frame Summary (for implementation)

When building the prototype, create the frames below. **Each frame must be accompanied by a wireframe-style breakdown** (see Section 9.2): labels and short descriptions for each region of the screen, rendered below or beside the mockup so reviewers can read what each part does.

### 9.0 Current prototype state (folder `prototype/`)

The existing React prototype in `prototype/` has the following structure. Use this as the baseline when iterating; the table in 9.1 is the **target** (some items already exist, others are to be added or changed).

| What exists | Implementation note |
|-------------|----------------------|
| **App** | 3 tabs: Desktop, Mobile, Logo. Theme toggle (light/dark). No breakdown component yet. |
| **Desktop** | Single view: browser chrome mockup (URL bar, extension icon) + product page left + right: either **ExtensionPanel** (when panel open) or placeholder "Klik ikon DealSpot…". There is no separate "DesktopSecondary" (landing/marketing) frame. |
| **ExtensionPanel** | Header (Logo compact, "Comparing: [product]"), then a **subscription/member block** ("DealSpot Member — dapat harga khusus" + Subscribe / Log in), then 4 comparison cards. **Not yet:** summary bar ("Total termurah: …"), Set lokasi in header, footer "Data diperbarui." |
| **Mobile** | **Single component** `Mobile.jsx`: one screen that shows header (Logo), search bar, category chips, then results header ("Hasil untuk '[query]'") + sort + grid of cards. So search and results are on the **same screen** (no separate search-only vs results-only views). **Not yet:** location chip ("Dikirim ke: …"), Simpan / Notifikasi harga on cards, empty/error states, Set lokasi screen, Daftar simpan screen. |
| **Logo** | Standalone `LogoScreen` (Logo.jsx in screens). |
| **Components** | Card, Button, Logo, SearchBar, Chip, Icons. Card supports bestDeal, memberDiscount. **Not yet:** EmptyState, ErrorBanner, SummaryBar, LocationSelector, Breakdown. |
| **Tokens** | `tokens.css` with light/dark theme, shadows, spacing, typography. |

When adding spec features (summary bar, Set lokasi, empty/error, location screen, saved list, breakdown), extend the existing `Desktop`, `ExtensionPanel`, and `Mobile` structure where it makes sense (e.g. add summary bar and Set lokasi to ExtensionPanel; add location chip and optional sub-views or tabs in Mobile) rather than assuming entirely separate components for every frame. New screens (e.g. ExtensionPanelEmpty, MobileLocation, MobileSaved) can be separate components or internal views/states depending on how the app is navigated.

### 9.1 Frames to build

| # | Canvas | Size (px) | Content |
|---|--------|-----------|---------|
| 1 | Desktop – Extension panel | 384 × 600 (or 720) | Header (Logo, Set lokasi), "Comparing: [product]," **summary bar** ("Total termurah: …"), 4 comparison cards, one "Best deal," optional footer "Data diperbarui …". |
| 2 | Desktop – Extension empty | 384 × 600 | Same layout; list replaced by empty state (icon + copy + CTA "Cari di app" / "Ubah pencarian"). |
| 3 | Desktop – Extension error (optional) | 384 × 600 | Same layout; partial results + banner "Sumber [X] sementara tidak tersedia" or full error + "Coba lagi." |
| 4 | Desktop – Marketing/landing | 1440 × 900 | DealSpot title, tagline ("Bandingkan harga, temukan deal terbaik."), optional extension + phone mockup placeholders. |
| 5 | Mobile – Search | 390 × 844 | Logo, **lokasi chip** ("Dikirim ke: …"), search bar ("Cari produk, bandingkan harga"), category chips. |
| 6 | Mobile – Results | 390 × 844 | "Hasil untuk '[query]'", sort chip, 4–6 product cards (one "Best deal"; Simpan + Notifikasi harga on cards). |
| 7 | Mobile – Results empty | 390 × 844 | Same chrome; list replaced by empty state (no results) per 6.6. |
| 8 | Mobile – Set lokasi | 390 × 844 | Title "Lokasi pengiriman", input/dropdown, CTA "Simpan" (one static state). |
| 9 | Mobile – Daftar simpan | 390 × 844 | Title "Daftar simpan", 2–3 saved cards with notif toggle, or empty state per 6.6. |
| 10 | Logo | 1:1 (e.g. 512 × 512) | DealSpot mark + wordmark lockup; clear space; primary on light. |

Minimum for first delivery: frames 1, 4, 5, 6, 10 (core flows). Frames 2, 3, 7, 8, 9 add empty/error and location/saved flows as specified in `prompt_dumpt.md`. All frames use the same palette, type scale, and components defined in this spec.

### 9.2 Wireframe-style breakdown (keterangan mockup)

For **every** frame, the implementer must provide a **breakdown** (keterangan seperti di wireframe) so that each area of the screen has a clear label and short description. This supports review, presentasi, dan dokumentasi.

- **Placement:** Below the mockup (preferred) or to the side. In a code prototype, this can be a collapsible section under each screen or a fixed block under the viewport.
- **Format:** Numbered or named regions with 1–2 sentences each. Example:
  - **1. Header** – Logo DealSpot (compact), link "Set lokasi" untuk atur alamat pengiriman.
  - **2. Konteks produk** – "Comparing: [nama produk]" dari halaman yang sedang dibuka.
  - **3. Ringkasan** – Satu baris "Total termurah: Tokopedia, Rp X (termasuk ongkir)."
  - **4. Daftar card** – Empat card perbandingan; satu dengan badge "Best deal"; tiap card: toko, harga, ongkir, CTA "View on [Store]."
  - **5. Footer** – Teks "Data diperbarui setiap hari" (trust).
- **Detail level:** Enough that someone who only reads the breakdown understands purpose and content of each zone. No need to describe every pixel; focus on function and copy.
- **Naming in code:** If building in React/Vue, use a shared component or section for "Breakdown" that receives an array of `{ label, description }` per screen so it stays maintainable.

---

## 10. Accessibility & Standards

- **Touch targets (mobile):** Minimum 44×44pt (iOS) / 48×48dp (Android) for buttons and tappable cards. Use padding to hit target even if visual is smaller.
- **Contrast:** Text primary on white ≥ 4.5:1; secondary text ≥ 4.5:1; large text (e.g. Price) ≥ 3:1. Primary orange on white: check contrast for small text (may need darker variant for body text).
- **Focus (extension):** Visible focus ring for keyboard users (e.g. 2px primary or neutral ring).
- **Labels:** All interactive elements have accessible names; "View on [Store]" is self-explanatory.

---

## 11. Prototype Structure (for best output)

Use a **multi-file** structure so the prototype is consistent, maintainable, and easy to iterate. Do not put everything in one HTML file or one large React file—that leads to duplication and worse output.

- **Recommended layout:** A dedicated folder (e.g. `prototype/` or `dealspot-prototype/`) containing:
  - **Design tokens:** One file (e.g. `tokens.css`, `theme.js`, or Tailwind config) that defines colors, font sizes, spacing, and radii from Sections 3–4 of this spec. All components import or use these tokens so the UI stays consistent.
  - **Shared components:** Reusable pieces used in more than one screen—e.g. `Card` (product/comparison card), `Button`, `Logo`, `SearchBar`, `Chip`. Same component for extension panel and mobile results where the spec says “reuse.”
  - **Screens/frames:** One component per frame—e.g. `ExtensionPanel`, `ExtensionPanelEmpty`, `DesktopSecondary`, `MobileSearch`, `MobileResults`, `MobileResultsEmpty`, `MobileLocation`, `MobileSaved`, `Logo`. Each uses tokens and shared components. No duplicated card markup or button styles across files.
  - **Breakdown / keterangan mockup:** A shared way to show wireframe-style annotations (labels + short descriptions) for each screen—e.g. a `Breakdown` or `ScreenAnnotations` component that renders below or beside the mockup; content can be per-screen data (see Section 9.2).
  - **App entry:** A root component or page that renders all screens (tabs, sidebar nav, or scrollable sections) plus the breakdown for the active screen so the user can preview and read keterangan di browser.
- **Why multi-file:** Single-file or “small” apps force copy-paste or one giant component. Multi-file gives one place to change the card, one place for colors, and a structure that Code2Figma (or a designer) can parse cleanly for Figma export. Result: best output.
- **If exporting to Figma later:** Use Code2Figma or similar; name components/frames consistently: `DealSpot_Extension_Panel`, `DealSpot_Extension_Empty`, `DealSpot_Desktop_Secondary`, `DealSpot_Mobile_Search`, `DealSpot_Mobile_Results`, `DealSpot_Mobile_Results_Empty`, `DealSpot_Mobile_Location`, `DealSpot_Mobile_Saved`, `DealSpot_Logo`. Logo at 1x and 2x for app/extension icon if needed.

---

## 12. Implementation Notes (for the implementer)

- **Build as a multi-file React (or Vue) app, preview in browser.** Do not use a single HTML file or one big React file; do not use OpenPencil MCP or .fig authoring. See Section 11 for folder and file structure.
- **One component per screen**, plus shared components (Card, Button, Logo, etc.) and one tokens/theme file. Import tokens and shared components everywhere so styles and layout stay consistent.
- Use **flexbox and/or grid** for layout so alignment and spacing are predictable. Avoid absolute positioning except where necessary (e.g. overlays).
- **One product/comparison card component** used in both the extension panel and mobile results. Same primary CTA and "Best deal" badge treatment. No duplicated card markup in two places.
- **Logo:** Its own component: dot (circle) + wordmark "DealSpot" laid out with flexbox (e.g. `display: flex; align-items: center; gap: 12px`) so they sit side-by-side with clear spacing—never overlapping. Use the same Logo component in the extension header, mobile search, and the standalone Logo screen.
- **Breakdown per screen:** For every frame, render the wireframe-style breakdown (Section 9.2) below or beside the mockup so reviewers see both the UI and the keterangan for each region.
- When in doubt: prioritize **clarity of price and CTA** over visual flair.

---

## 13. Prototype Approach: Why Code First, Not .fig

### Why not OpenPencil / .fig for this prototype

- The implementer (AI) **cannot see** what is drawn in a .fig file. Building via MCP or coordinate-based APIs produced stacked frames, invisible text, and misaligned logo. That workflow is not reliable without visual feedback.
- **Recommended:** Build the prototype as a **multi-file React (or Vue) app** (see Section 11). The user opens it in a browser, sees the result, and can give concrete feedback. The implementer fixes the code; with separate components and tokens, changes are local and consistent. Layout is predictable (flexbox/grid), and all text is visible by default.

### Getting Figma later (optional)

- If you need a Figma file for stakeholders or handoff: after the browser prototype looks good, use **Code2Figma** (code2figma.com). Parse your React (or Vue/Angular) components, paste the generated JSON into the Figma plugin, and get editable layers. Paid (~$5/month); supports Tailwind. Alternatively, a designer can recreate the approved browser prototype in Figma using this spec.

### Legacy .fig attempts

- `DealSpot_Prototype.fig` and `DealSpot_Logo.fig` exist from earlier OpenPencil MCP attempts; they have known issues (stacked frames, alignment). Do not use them as the source of truth. Use the HTML/React prototype and this spec instead.

---

*End of design spec. Use with `concept.md` and `prompt_dumpt.md` when generating or refining the prototype.*
