# Prompt: DealSpot prototype — implement & update

Use this when creating or updating the DealSpot UI prototype. **Build a multi-file React (or Vue) app in `prototype/` and preview in a browser.** Do not use a single HTML file, one big React file, or OpenPencil/.fig.

**Critical:** Before making changes, **read Section 0** and **inspect the current `prototype/` code** so you extend what exists instead of redoing or contradicting it. Every screen must have a **breakdown (keterangan ala wireframe)** below or beside the mockup.

---

## 0. Current prototype state (`prototype/`) — check first

Before any implementation step, **confirm** what is in the repo (open the files or list key components).

| Area | What’s there now |
|------|------------------|
| **Navigation** | 3 tabs: **Desktop** \| **Mobile** \| **Logo**. Theme toggle (light/dark). No breakdown yet. |
| **Desktop** | One view: browser chrome + product mock left + right: **ExtensionPanel** (when open) or placeholder. No separate landing screen. |
| **ExtensionPanel** | Header (Logo, "Comparing: [product]"), **subscription block** (Member + Subscribe / Log in), 4 cards. **Missing:** summary bar, Set lokasi, footer "Data diperbarui." |
| **Mobile** | One component `Mobile.jsx`: Logo, search bar, chips, results on same screen. **Missing:** location chip, Simpan/Notifikasi on cards, empty/error, Set lokasi screen, Daftar simpan. |
| **Logo** | `LogoScreen` exists. |
| **Shared** | Card, Button, Logo, SearchBar, Chip, Icons. **Missing:** EmptyState, ErrorBanner, SummaryBar, LocationSelector, Breakdown. |

**Already done in previous sessions:** Design tokens (incl. dark mode, shadows), concept/design_spec/prompt_dumpt updated; docs include Section 9.0 / 0 (current state). Do not re-doc or re-spec the same content.

**Rule:** Extend the existing structure. Do not duplicate or replace entire screens unless the spec explicitly asks for a new frame.

---

## 1. Mandatory behaviour (every session)

1. **Read before changing:** Read `concept.md`, `design_spec.md`, and this prompt. For the prototype, read Section 0 above and **inspect** `prototype/src` (App, screens, components) to see what exists.
2. **One source of truth:** Follow `design_spec.md` for UI (colors, type, components, empty/error, breakdown). Use `tokens.css` for all design values.
3. **Extend, don’t rewrite:** Add to existing `ExtensionPanel`, `Mobile`, `Desktop`; add new components (e.g. Breakdown, EmptyState) where the spec says so. Do not create a second "MobileSearch" or "MobileResults" file if the app is one `Mobile.jsx` with one screen.
4. **Avoid revision loops:**
   - Before editing a file, **read the relevant part** of that file to see current content.
   - Do **not** apply the same fix or the same edit twice. If something "didn’t work", re-read the file and fix the **actual** cause instead of repeating the same change.
   - After an edit, **verify** (e.g. read the changed section, run `npm run build` or `npm run dev`, or run linter). If the user says "still wrong", re-read and fix with new information, not the same suggestion again.
5. **Scope per turn:** Prefer one logical unit of work per response (e.g. "add Breakdown component + data for Desktop and ExtensionPanel") then confirm. If the user asks for "everything", break it into ordered steps and do the first step(s) first.

---

## 2. What to read (in order)

1. **`concept.md`** — Product: aggregator, extension + app, lokasi, simpan & notifikasi, empty/error, deep link.
2. **`design_spec.md`** — Spec: Sections 3–4 (tokens), 6 (core UI, empty/error, location, summary bar, saved), 7 (extension), 8 (mobile), 9 (frames + **breakdown 9.2**), 11 (structure).
3. **This file** — Section 0 (current state), Section 1 (behaviour), Section 3 (implementation order).

---

## 3. Implementation order (new session)

Implement in this order so work is additive and not stuck redoing the same things.

### Phase A — Breakdown + ExtensionPanel spec alignment

1. **Add Breakdown (keterangan mockup)**  
   - Create a shared component (e.g. `Breakdown.jsx` or `ScreenAnnotations.jsx`) that takes an array `items: [{ label, description }]` and renders a "Keterangan" / "Breakdown" section (numbered list or headings).  
   - Add breakdown data for: **Desktop** (browser + panel), **ExtensionPanel**, **Mobile**, **Logo**. Store in a constant (e.g. `breakdowns.js`) or next to each screen.  
   - In `App.jsx`, for the **active tab**, render the mockup then the **Breakdown** for that tab below it (so user can scroll and read).

2. **ExtensionPanel: align with spec**  
   - **Summary bar:** Add one line below header: "Total termurah: Tokopedia, Rp 189.000 (termasuk ongkir)" (or use first best-deal card data). Use success/best-deal styling (see design_spec 6.9).  
   - **Set lokasi:** In header, add a text link or small button "Set lokasi" (can open a minimal modal or be static for prototype).  
   - **Footer:** Add one line at bottom: "Data diperbarui setiap hari" or similar (design_spec 7.2).  
   - Keep existing subscription block unless the spec says to remove it; spec says optional footer, so coexistence is fine.  
   - Update ExtensionPanel breakdown data to include: Header (Logo, Set lokasi), Konteks produk, Ringkasan, Daftar card, Footer.

After Phase A: run app, confirm breakdown appears for Desktop/ExtensionPanel, Mobile, Logo; confirm summary bar and footer in panel.

### Phase B — Mobile: location chip + empty state

3. **Location chip on Mobile**  
   - In `Mobile.jsx`, below or above the header, add a chip/line: "Dikirim ke: Jakarta Pusat" (or "Set lokasi" if no location). Tappable can go to a placeholder or a simple modal for prototype.  
   - Update Mobile breakdown to mention the location chip.

4. **Empty state (results)**  
   - Add a simple **EmptyState** component (icon + message + optional CTA) per design_spec 6.6.  
   - In Mobile, when a filter/query would yield no results (e.g. a dedicated "empty" view or mock state), show EmptyState instead of the card list. Copy: "Tidak ada hasil untuk '[query]'. Coba kata kunci lain atau ubah filter." + CTA.  
   - Add breakdown entry for empty state when shown.

After Phase B: run app, confirm location chip and empty state appear when applicable.

### Phase C — Extended screens (optional, as scope allows)

5. **ExtensionPanel empty** — When there are no comparison results, show EmptyState in the panel (copy per 6.6). Can be a prop or state on ExtensionPanel (e.g. `empty` or `results=[]`).  
6. **ExtensionPanel error** — Optional banner "Sumber [X] sementara tidak tersedia" when partial failure; or full error + "Coba lagi".  
7. **Mobile: Set lokasi screen** — New view/screen: title "Lokasi pengiriman", input/dropdown, CTA "Simpan". Can be a separate component or a view inside Mobile (e.g. `view === 'location'`).  
8. **Mobile: Daftar simpan** — New view/screen: title "Daftar simpan", list of saved cards with "Notifikasi harga" toggle, or empty state per 6.6. Can be a tab or a view inside Mobile.  
9. **DesktopSecondary (landing)** — Optional: add a 4th tab "Landing" or switch Desktop to show landing (title, tagline, mockups) when chosen. Per design_spec frame 4.

Each new screen or view gets its own breakdown data and is wired into the app (tab or internal state).

---

## 4. Frames summary (target)

| # | Screen | Status / action |
|---|--------|------------------|
| 1 | ExtensionPanel (in Desktop) | Exists; add summary bar, Set lokasi, footer, breakdown. |
| 2 | DesktopSecondary | Optional; add if scope includes landing. |
| 3–4 | Mobile (search + results) | Exists as one screen; add location chip, optional Simpan/Notifikasi, breakdown. |
| 5 | Logo | Exists; add breakdown. |
| 6–10 | Empty, error, Location, Saved | Add per Phase B/C; each with breakdown. |

Every screen that is user-visible must have a breakdown block below (or beside) the mockup.

---

## 5. Apply consistently

- All colors, typography, spacing from `design_spec.md` via `tokens.css`.  
- One `Card` for extension and mobile; one `Logo` everywhere.  
- Touch targets ≥ 44px on mobile; contrast per WCAG 2.1 AA.  
- Do not ship a screen without its breakdown.

---

## 6. Do not

- Use a single HTML file, one large React file, OpenPencil MCP, or .fig as the main deliverable.  
- Re-edit the same file with the same change without re-reading the file and verifying the cause.  
- Add a screen without a breakdown.  
- Redocument or respec what is already in `concept.md` / `design_spec.md` (e.g. re-writing "current state" from scratch).

---

*When the user asks to "implement the prototype" or "apply the recommendations," follow this prompt: read docs, check Section 0 and `prototype/`, then implement in the order of Section 3 (Phase A → B → C).*
