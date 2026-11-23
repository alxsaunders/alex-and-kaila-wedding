"use client";

import { useEffect } from "react";

// All scroll motion in one place, transform/opacity/clip-path only.
// - .reveal / .reveal-img / .draw / .stagger get .is-in once when they enter view
// - [data-speed] elements drift slightly (low-amplitude parallax)
// - a gold progress line, and the sticky RSVP button hides over the hero and RSVP form
export default function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.classList.add("js");

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    document.querySelectorAll(".reveal, .reveal-img, .draw, .stagger").forEach((el) => io.observe(el));

    // Hide the floating RSVP button while the hero or the RSVP form is on screen.
    const zones = new Set<Element>();
    const zoneIO = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) zones.add(e.target);
          else zones.delete(e.target);
        }
        root.classList.toggle("rsvp-visible", zones.size > 0);
      },
      { threshold: 0.2 },
    );
    document.querySelectorAll("#top, #rsvp").forEach((el) => zoneIO.observe(el));

    const bar = document.querySelector<HTMLElement>(".progress");
    const movers = reduce ? [] : Array.from(document.querySelectorAll<HTMLElement>("[data-speed]"));
    let ticking = false;
    const frame = () => {
      ticking = false;
      const vh = window.innerHeight;
      const max = root.scrollHeight - vh;
      if (bar) bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
      for (const el of movers) {
        const r = el.parentElement!.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) continue;
        const speed = Number(el.dataset.speed) || 0.1;
        const offset = (r.top + r.height / 2 - vh / 2) * -speed;
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      }
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(frame);
      }
    };
    frame();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      io.disconnect();
      zoneIO.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return <div className="progress" aria-hidden />;
}
