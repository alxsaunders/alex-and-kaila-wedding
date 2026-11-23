"use client";

import { useEffect, useState } from "react";
import { DEFAULT_THEME, THEMES } from "@/themes";

export default function ThemePicker() {
  const [current, setCurrent] = useState<string>(DEFAULT_THEME);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setCurrent(document.documentElement.getAttribute("data-theme") || DEFAULT_THEME);
  }, []);

  function pick(slug: string) {
    document.documentElement.setAttribute("data-theme", slug);
    try {
      localStorage.setItem("wedding-theme", slug);
      const u = new URL(location.href);
      u.searchParams.set("theme", slug);
      history.replaceState(null, "", u);
    } catch {}
    setCurrent(slug);
  }

  if (!open) {
    return (
      <button className="picker-reopen" onClick={() => setOpen(true)}>
        Themes
      </button>
    );
  }

  return (
    <div className="picker" role="group" aria-label="Preview a theme">
      <span className="picker-title">Preview a theme</span>
      <div className="picker-row">
        {THEMES.map((t) => (
          <button
            key={t.slug}
            className={"picker-chip" + (t.slug === current ? " is-on" : "")}
            data-swatch={t.slug}
            onClick={() => pick(t.slug)}
            aria-pressed={t.slug === current}
          >
            <span className="picker-dot" />
            {t.name}
          </button>
        ))}
      </div>
      <button className="picker-close" onClick={() => setOpen(false)} aria-label="Hide theme picker">
        ×
      </button>
    </div>
  );
}
