# DealSpot prototype

Multi-file React UI prototype. Use `concept.md`, `design_spec.md`, and `prompt_dumpt.md` in the repo root for context.

## Run

From this folder:

```bash
npm install
npm run dev
```

Then open **http://localhost:5173/** in your browser. Use the top tabs to switch between **Desktop**, **Mobile**, and **Logo**.

## Structure

- **`src/tokens.css`** — Design tokens (colors, typography, spacing, radii).
- **`src/animations.css`** — Keyframes and utility classes (fade-in, slide-up, glow, card hover, etc.).
- **`src/components/`** — Shared: `Logo` ($ in circle + “Spot”), `Button`, `Card`, `SearchBar`, `Chip`, `Icons` (truck, tag, store, category icons).
- **`src/screens/`** — `Desktop` (browser mockup + extension panel), `Mobile` (search + results combined), `ExtensionPanel`, `Logo`.
- **`src/App.jsx`** — Three views: Desktop, Mobile, Logo.

## Interactions

- **Desktop:** Click the DealSpot icon in the browser toolbar (glow) to open/close the comparison panel. Product image and copy explain the flow.
- **Mobile:** Search bar (focus ring), category and sort chips, product cards with “View on [Store]” (toast on click). Placeholder images via picsum.photos.
- **Logo:** Mark (orange circle with $) + wordmark “Spot”, reduced spacing.

Optional: use [Code2Figma](https://code2figma.com) later to export to Figma.
