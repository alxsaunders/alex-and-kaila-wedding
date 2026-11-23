import Countdown from "@/components/Countdown";
import Motion from "@/components/Motion";
import Nav from "@/components/Nav";
import RsvpForm from "@/components/RsvpForm";
import Stay from "@/components/Stay";
import { couple, dressCode, faq, rsvp, schedule, travel, venue, wedding, welcome } from "@/content";
import { BASE, img } from "@/themes";

const vimg = (n: string) => `${BASE}/venue/${n}.jpg`;

function Flourish() {
  return (
    <svg className="flourish draw" viewBox="0 0 220 24" aria-hidden>
      <path d="M0 12 H86" pathLength={1} />
      <path d="M220 12 H134" pathLength={1} />
      <path d="M110 3 L116 12 L110 21 L104 12 Z" className="fill" />
      <circle cx="94" cy="12" r="1.8" className="fill" />
      <circle cx="126" cy="12" r="1.8" className="fill" />
    </svg>
  );
}

function Heading({ kicker, title, light }: { kicker: string; title: string; light?: boolean }) {
  return (
    <header className={"section-head stagger" + (light ? " light" : "")}>
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
      <Flourish />
    </header>
  );
}

export default function Home() {
  return (
    <>
      <Motion />
      <Nav />

      <section className="hero" id="top">
        <picture className="hero-media" data-speed="-0.12">
          <source media="(max-width: 700px)" srcSet={img("hero-sm")} />
          <img src={img("hero")} alt="" fetchPriority="high" />
        </picture>
        <div className="hero-shade" />
        <div className="hero-frame" aria-hidden />
        <div className="hero-inner">
          <p className="hero-kicker h-in" style={{ ["--d" as string]: "0.1s" }}>
            Together with their families
          </p>
          <h1 className="hero-names h-in" style={{ ["--d" as string]: "0.3s" }}>
            <span>{couple.first}</span>
            <span className="amp">&amp;</span>
            <span>{couple.second}</span>
          </h1>
          <p className="hero-sub h-in" style={{ ["--d" as string]: "0.55s" }}>
            invite you to celebrate their wedding
          </p>
          <div className="h-in" style={{ ["--d" as string]: "0.7s" }}>
            <Flourish />
          </div>
          <p className="hero-date h-in" style={{ ["--d" as string]: "0.8s" }}>
            {wedding.dateLong}
          </p>
          <p className="hero-place h-in" style={{ ["--d" as string]: "0.9s" }}>
            {wedding.city}
          </p>
          <div className="h-in" style={{ ["--d" as string]: "1.05s" }}>
            <a href="#rsvp" className="btn btn-gold btn-hero">
              RSVP Now
            </a>
            <p className="hero-deadline">Kindly reply by {rsvp.deadlineShort}</p>
          </div>
          <div className="h-in" style={{ ["--d" as string]: "1.2s" }}>
            <Countdown iso={wedding.startISO} />
          </div>
        </div>
        <a href="#rsvp" className="hero-scroll" aria-label="Scroll to RSVP">
          <span />
        </a>
      </section>

      <main>
        <section className="section wine rsvp-first" id="rsvp">
          <Heading kicker={"Kindly reply by " + rsvp.deadline} title="RSVP" light />
          <div className="rsvp-card reveal">
            <RsvpForm />
          </div>
        </section>

        <section className="section us" id="welcome">
          <div className="us-grid">
            <figure className="us-photo reveal-img">
              <img
                src={img("us-900")}
                srcSet={`${img("us-900")} 900w, ${img("us")} 1350w`}
                sizes="(max-width: 860px) 88vw, 380px"
                width={1350}
                height={2400}
                alt={`${couple.first} and ${couple.second}`}
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="us-copy stagger">
              <p className="kicker">Welcome</p>
              <p className="script-title">
                {couple.first} &amp; {couple.second}
              </p>
              <Flourish />
              <p className="welcome-text">{welcome}</p>
              <p className="signature">With love</p>
            </div>
          </div>
        </section>

        <section className="section champagne" id="details">
          <Heading kicker="The Celebration" title="Wedding Details" />
          <div className="cards stagger">
            <article className="card">
              <p className="card-label">When</p>
              <h3>{wedding.dateLong}</h3>
              <p>
                Please arrive by <strong>{wedding.arrive}</strong>.
                <br />
                The celebration begins at <strong>{wedding.start} sharp</strong>.
              </p>
            </article>
            <article className="card">
              <p className="card-label">Where</p>
              <h3>{venue.name}</h3>
              <p>
                {venue.street}
                <br />
                {venue.cityLine}
              </p>
              <p className="muted">{venue.setting}</p>
              <a className="link" href="#venue">
                See the venue &amp; map
              </a>
            </article>
          </div>

          <div className="timeline">
            <p className="script-sub reveal">Order of the Evening</p>
            <ol className="stagger">
              {schedule.map((s) => (
                <li key={s.name}>
                  <span className="t-time">{s.time ?? "Time to come"}</span>
                  <span className="t-dot" />
                  <span className="t-body">
                    <strong>{s.name}</strong>
                    <span>{s.note}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section venue" id="venue">
          <Heading kicker="The Venue" title="Crystal Ballroom" />
          <p className="center venue-intro reveal">
            {venue.locatedIn}. {venue.spaces}
          </p>
          <div className="venue-grid">
            <figure className="v-main reveal-img">
              <img src={vimg("ballroom")} alt="The Crystal Ballroom set for a reception" loading="lazy" decoding="async" />
            </figure>
            <figure className="reveal-img" style={{ ["--d" as string]: "0.1s" }}>
              <img src={vimg("exterior")} alt="Crystal Ballroom at Beach Place" loading="lazy" decoding="async" />
            </figure>
            <figure className="reveal-img" style={{ ["--d" as string]: "0.2s" }}>
              <img src={vimg("tablescape")} alt="A candlelit tablescape in the ballroom" loading="lazy" decoding="async" />
            </figure>
            <figure className="reveal-img" style={{ ["--d" as string]: "0.1s" }}>
              <img src={vimg("long-table")} alt="A long banquet table in the ballroom" loading="lazy" decoding="async" />
            </figure>
            <figure className="reveal-img" style={{ ["--d" as string]: "0.2s" }}>
              <img src={vimg("tables")} alt="Tables under soft uplighting" loading="lazy" decoding="async" />
            </figure>
          </div>
          <p className="credit">{venue.photoCredit}</p>

          <div className="map-wrap reveal">
            <iframe
              title="Map to Crystal Ballroom BeachPlace"
              src={venue.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="map-card">
              <p className="card-label">Find Us</p>
              <h3>{venue.name}</h3>
              <p>
                {venue.street}
                <br />
                {venue.cityLine}
              </p>
              <a className="btn btn-gold" href={venue.directionsUrl} target="_blank" rel="noreferrer">
                Get Directions
              </a>
            </div>
          </div>
        </section>

        <section className="band reveal-img" aria-hidden>
          <picture className="band-media" data-speed="0.14">
            <img src={vimg("beach")} alt="" loading="lazy" decoding="async" />
          </picture>
          <div className="band-shade" />
          <p className="band-text reveal">
            Steps from
            <br />
            Fort Lauderdale Beach
          </p>
        </section>

        <section className="section" id="attire">
          <Heading kicker="What to Wear" title="Dress Code" />
          <div className="attire">
            <figure className="attire-img reveal-img">
              <img src={img("bouquet")} alt="" loading="lazy" decoding="async" width={1024} height={1536} />
            </figure>
            <div className="attire-copy stagger">
              <h3>{dressCode.title}</h3>
              <p>{dressCode.body}</p>
              <p className="muted">{dressCode.avoidText}</p>
              <p className="card-label">Please avoid</p>
              <ul className="swatches">
                {dressCode.avoid.map((c) => (
                  <li key={c.name}>
                    <span className="swatch" style={{ background: c.hex }} />
                    {c.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="duo" aria-hidden>
          <figure className="reveal-img">
            <img src={img("table")} alt="" loading="lazy" decoding="async" />
          </figure>
          <figure className="reveal-img" style={{ ["--d" as string]: "0.15s" }}>
            <img src={img("cake")} alt="" loading="lazy" decoding="async" />
          </figure>
        </section>

        <section className="section champagne" id="travel">
          <Heading kicker="Getting There" title="Travel & Stay" />
          <div className="cards stagger">
            <article className="card">
              <p className="card-label">Flying In</p>
              <ul className="plain">
                {travel.airports.map((a) => (
                  <li key={a.name}>
                    <strong>{a.name}</strong>
                    <span>{a.note}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="card">
              <p className="card-label">Parking</p>
              <p>{travel.parking}</p>
            </article>
          </div>
          <Stay />
        </section>

        <section className="section" id="faq">
          <Heading kicker="Good to Know" title="Questions & Answers" />
          <div className="faq stagger">
            {faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section champagne" id="registry">
          <Heading kicker="With Gratitude" title="Registry" />
          <p className="center reveal">
            Your presence is the greatest gift. Registry details will be shared here soon.
          </p>
          <p className="center reveal" style={{ marginTop: "2rem" }}>
            <a href="#rsvp" className="btn btn-gold">
              RSVP by {rsvp.deadlineShort}
            </a>
          </p>
        </section>
      </main>

      <footer className="footer">
        <p className="footer-names">
          {couple.first} &amp; {couple.second}
        </p>
        <Flourish />
        <p className="footer-date">{wedding.dateShort}</p>
        <p className="small soft">{wedding.city}</p>
      </footer>

      <a href="#rsvp" className="sticky-rsvp">
        RSVP by {rsvp.deadlineShort}
      </a>
    </>
  );
}
