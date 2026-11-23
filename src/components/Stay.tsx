"use client";

import { useState } from "react";
import { stay } from "@/content";

type Tier = keyof typeof stay.hotels;

export default function Stay() {
  const tiers = Object.keys(stay.hotels) as Tier[];
  const [tier, setTier] = useState<Tier>(tiers[0]);
  const [party, setParty] = useState<"small" | "large">("small");
  const group = stay.rentals[party];

  return (
    <div className="stay">
      <div className="stay-block">
        <p className="script-sub">Where to Stay</p>
        <div className="areas">
          {stay.areas.map((a) => (
            <div key={a.name} className="area">
              <strong>{a.name}</strong>
              <span>{a.why}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="stay-block">
        <p className="script-sub">Hotels</p>
        <div className="tabs" role="tablist" aria-label="Hotel price range">
          {tiers.map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={t === tier}
              className={t === tier ? "is-on" : ""}
              onClick={() => setTier(t)}
            >
              {stay.hotels[t].label}
              <span>{stay.hotels[t].range}</span>
            </button>
          ))}
        </div>
        <div className="hotel-list">
          {stay.hotels[tier].items.map((h) => (
            <article key={h.name} className="hotel">
              <div>
                <h4>{h.name}</h4>
                <p className="muted">{h.distance}</p>
                {h.note && <p className="hotel-note">{h.note}</p>}
              </div>
              <div className="hotel-side">
                <span className="price">{h.price}</span>
                <span className="per">per night, est.</span>
                {h.url && (
                  <a className="link" href={h.url} target="_blank" rel="noreferrer">
                    View hotel
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="stay-block">
        <p className="script-sub">Vacation Rentals</p>
        <div className="tabs two" role="tablist" aria-label="Party size">
          <button role="tab" aria-selected={party === "small"} className={party === "small" ? "is-on" : ""} onClick={() => setParty("small")}>
            Small party
            <span>{stay.rentals.small.who}</span>
          </button>
          <button role="tab" aria-selected={party === "large"} className={party === "large" ? "is-on" : ""} onClick={() => setParty("large")}>
            Large party
            <span>{stay.rentals.large.who}</span>
          </button>
        </div>
        <div className="rental">
          <p>{group.blurb}</p>
          <div className="rental-tiers">
            {group.tiers.map((t) => (
              <a key={t.label} className="rental-tier" href={t.url} target="_blank" rel="noreferrer">
                <span className="card-label">{t.label}</span>
                <span className="price">{t.price}</span>
                <span className="per">per night, est.</span>
                <span className="go">See live listings</span>
              </a>
            ))}
          </div>
          {group.extra && (
            <a className="link" href={group.extra.url} target="_blank" rel="noreferrer">
              {group.extra.label}
            </a>
          )}
        </div>
        <p className="small muted fineprint">{stay.fineprint}</p>
      </div>
    </div>
  );
}
