"use client";

import { useEffect, useState } from "react";

function parts(target: number) {
  const ms = Math.max(0, target - Date.now());
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor(ms / 3600000) % 24,
    minutes: Math.floor(ms / 60000) % 60,
  };
}

export default function Countdown({ iso }: { iso: string }) {
  const target = new Date(iso).getTime();
  const [p, setP] = useState<ReturnType<typeof parts> | null>(null);

  useEffect(() => {
    setP(parts(target));
    const id = setInterval(() => setP(parts(target)), 30000);
    return () => clearInterval(id);
  }, [target]);

  const cells: [string, number | undefined][] = [
    ["Days", p?.days],
    ["Hours", p?.hours],
    ["Minutes", p?.minutes],
  ];

  return (
    <div className="countdown" aria-label="Countdown to the wedding">
      {cells.map(([label, v]) => (
        <div key={label} className="countdown-cell">
          <span className="countdown-num">{v === undefined ? "--" : v}</span>
          <span className="countdown-label">{label}</span>
        </div>
      ))}
    </div>
  );
}
