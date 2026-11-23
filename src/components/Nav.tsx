"use client";

import { useEffect, useState } from "react";
import { couple } from "@/content";

const LINKS = [
  ["Details", "#details"],
  ["Dress Code", "#attire"],
  ["Travel", "#travel"],
  ["FAQ", "#faq"],
] as const;

export default function Nav() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const on = () => setSolid(window.scrollY > window.innerHeight * 0.6);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <nav className={"nav" + (solid ? " is-solid" : "")}>
      <a href="#top" className="nav-mark">
        {couple.first[0]}
        <span>&amp;</span>
        {couple.second[0]}
      </a>
      <div className="nav-links">
        {LINKS.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
        <a href="#rsvp" className="nav-rsvp">
          RSVP
        </a>
      </div>
    </nav>
  );
}
