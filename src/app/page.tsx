import Countdown from "@/components/Countdown";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import ThemePicker from "@/components/ThemePicker";
import { couple, dressCode, faq, rsvp, schedule, travel, venue, wedding, welcome } from "@/content";
import { BASE, SHOW_THEME_PICKER, THEMES } from "@/themes";

function Ornament() {
  return (
    <div className="ornament" aria-hidden>
      <span />
      <svg viewBox="0 0 24 24" width="14" height="14">
        <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" fill="currentColor" />
      </svg>
      <span />
    </div>
  );
}

function Heading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <header className="section-head">
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
      <Ornament />
    </header>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <Reveal />

      <section className="hero" id="top">
        {THEMES.map((t) => (
          <div
            key={t.slug}
            className="hero-bg"
            data-for={t.slug}
            style={{ backgroundImage: `url(${BASE}/themes/${t.slug}-hero.jpg)` }}
          />
        ))}
        <div className="hero-shade" />
        <div className="hero-inner">
          <p className="hero-kicker">We are getting married</p>
          <h1 className="hero-names">
            {couple.first}
            <span className="amp">&amp;</span>
            {couple.second}
          </h1>
          <p className="hero-date">{wedding.dateLong}</p>
          <p className="hero-place">{wedding.city}</p>
          <Countdown iso={wedding.startISO} />
          <a href="#rsvp" className="btn btn-hero">
            RSVP
          </a>
        </div>
        <a href="#welcome" className="hero-scroll" aria-label="Scroll down">
          <span />
        </a>
      </section>

      <main>
        <section className="section welcome reveal" id="welcome">
          <Ornament />
          <p className="welcome-text">{welcome}</p>
          <p className="signature">
            With love, {couple.first} &amp; {couple.second}
          </p>
        </section>

        <section className="section alt" id="details">
          <div className="reveal">
            <Heading kicker="The Celebration" title="Wedding Details" />
          </div>
          <div className="cards reveal">
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
              <a className="link" href={venue.mapUrl} target="_blank" rel="noreferrer">
                Open in Maps
              </a>
            </article>
          </div>

          <div className="timeline reveal">
            <h3 className="timeline-title">Order of the Evening</h3>
            <ol>
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

        <section className="section" id="attire">
          <div className="reveal">
            <Heading kicker="What to Wear" title="Dress Code" />
          </div>
          <div className="attire reveal">
            <div className="attire-img">
              {THEMES.map((t) => (
                <div
                  key={t.slug}
                  className="detail-bg"
                  data-for={t.slug}
                  style={{ backgroundImage: `url(${BASE}/themes/${t.slug}-detail.jpg)` }}
                />
              ))}
            </div>
            <div className="attire-copy">
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

        <section className="section alt" id="travel">
          <div className="reveal">
            <Heading kicker="Getting There" title="Travel & Stay" />
          </div>
          <div className="cards three reveal">
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
              <p className="card-label">Where to Stay</p>
              {travel.hotels ? (
                <ul className="plain">
                  {travel.hotels.map((h) => (
                    <li key={h.name}>
                      <strong>{h.name}</strong>
                      <span>{h.note}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Hotel suggestions and any room block details are coming soon. Check back here.</p>
              )}
            </article>
            <article className="card">
              <p className="card-label">Parking</p>
              <p>{travel.parking}</p>
            </article>
          </div>
        </section>

        <section className="section rsvp-section" id="rsvp">
          <div className="reveal">
            <Heading kicker="Kindly Reply" title="RSVP" />
          </div>
          <div className="rsvp-card reveal">
            <p className="rsvp-deadline">
              {rsvp.deadline ? (
                <>
                  Please reply by <strong>{rsvp.deadline}</strong>
                </>
              ) : (
                <>The reply-by date is coming soon</>
              )}
            </p>
            <p>
              RSVPs open once invitations go out. When they do, type your name here to find your
              invitation, then answer for everyone in your party, including any food allergies or
              dietary needs.
            </p>
            <form className="rsvp-form" aria-disabled>
              <label htmlFor="rsvp-name" className="sr-only">
                Your full name
              </label>
              <input id="rsvp-name" placeholder="Your full name" disabled />
              <button type="button" className="btn" disabled>
                Find my invitation
              </button>
            </form>
            <p className="muted small">
              Plus-ones and children must be confirmed by {couple.first} or {couple.second}.
            </p>
          </div>
        </section>

        <section className="section alt" id="faq">
          <div className="reveal">
            <Heading kicker="Good to Know" title="Questions & Answers" />
          </div>
          <div className="faq reveal">
            {faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section" id="registry">
          <div className="reveal">
            <Heading kicker="With Gratitude" title="Registry" />
          </div>
          <p className="center reveal">
            Your presence is the greatest gift. Registry details will be shared here soon.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p className="footer-names">
          {couple.first} &amp; {couple.second}
        </p>
        <p>{wedding.dateShort}</p>
        <p className="muted small">{wedding.city}</p>
      </footer>

      {SHOW_THEME_PICKER && <ThemePicker />}
    </>
  );
}
