export const THEMES = [
  { slug: "black-tie", name: "Black Tie" },
  { slug: "moody-botanical", name: "Moody Botanical" },
  { slug: "coastal", name: "Coastal" },
  { slug: "modern-minimal", name: "Modern Minimal" },
  { slug: "garden-romance", name: "Garden Romance" },
  { slug: "golden-vineyard", name: "Golden Vineyard" },
] as const;

export type ThemeSlug = (typeof THEMES)[number]["slug"];

// Set this to the couple's pick and turn the picker off when they choose.
export const DEFAULT_THEME: ThemeSlug = "black-tie";
export const SHOW_THEME_PICKER = true;

export const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
