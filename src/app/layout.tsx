import type { Metadata, Viewport } from "next";
import "./globals.css";
import { DEFAULT_THEME, THEMES } from "@/themes";

export const metadata: Metadata = {
  title: "Alex & Kaila | September 19, 2027",
  description: "Join us in Fort Lauderdale, Florida on September 19, 2027.",
  // Keep the site out of search engines. Guests get the link from us.
  robots: { index: false, follow: false, nocache: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const FONTS =
  "https://fonts.googleapis.com/css2?" +
  [
    "Cinzel:wght@400;500;600",
    "Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400",
    "DM+Serif+Display:ital@0;1",
    "Inter:wght@300;400;500",
    "Jost:wght@300;400;500",
    "Lato:wght@300;400;700",
    "Libre+Franklin:wght@300;400;500",
    "Nunito+Sans:wght@300;400;600",
    "Playfair+Display:ital,wght@0,400;0,500;1,400",
    "Work+Sans:wght@300;400;500",
  ]
    .map((f) => "family=" + f)
    .join("&") +
  "&display=swap";

// Picks the theme before first paint so there is no flash.
const themeScript = `(function(){try{var ok=${JSON.stringify(
  THEMES.map((t) => t.slug),
)};var q=new URLSearchParams(location.search).get('theme');var s=localStorage.getItem('wedding-theme');var t=ok.indexOf(q)>-1?q:(ok.indexOf(s)>-1?s:null);if(t){document.documentElement.setAttribute('data-theme',t);if(q)localStorage.setItem('wedding-theme',q);}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme={DEFAULT_THEME} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href={FONTS} />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
