// The couple chose the Deep Wine look (2026-11-23): deep wine, champagne, ivory, gold.
// The earlier six preview themes are in git history if ever needed.
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const img = (name: string) => `${BASE}/deep-wine/${name}.jpg`;
