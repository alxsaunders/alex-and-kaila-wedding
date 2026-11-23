"use client";

import { useState } from "react";
import { couple, rsvp, rsvpForm } from "@/content";

type Status = "idle" | "sending" | "done" | "error";

export default function RsvpForm() {
  const [attending, setAttending] = useState<"yes" | "no" | "">("");
  const [status, setStatus] = useState<Status>("idle");
  const closed = Date.now() > new Date(rsvp.closesISO).getTime();
  const ready = Boolean(rsvpForm.action);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (f.get("website")) return; // robot trap
    const body = new URLSearchParams();
    const map = rsvpForm.fields;
    body.set(map.name, String(f.get("name") || "").trim());
    body.set(map.attending, attending === "yes" ? rsvpForm.yes : rsvpForm.no);
    body.set(map.party, String(f.get("party") || ""));
    body.set(map.guests, String(f.get("guests") || ""));
    body.set(map.contact, String(f.get("contact") || ""));
    body.set(map.dietary, String(f.get("dietary") || ""));
    body.set(map.message, String(f.get("message") || ""));
    setStatus("sending");
    try {
      // Google Forms does not answer cross-site requests, so we cannot read the reply.
      // A network failure still throws, which we show as an error.
      await fetch(rsvpForm.action, { method: "POST", mode: "no-cors", body });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (closed) {
    return (
      <div className="rsvp-done">
        <p className="script-sub">RSVPs are closed</p>
        <p>The reply date has passed. Please reach out to {couple.first} or {couple.second} directly.</p>
      </div>
    );
  }

  if (status === "done") {
    return (
      <div className="rsvp-done" role="status">
        <p className="script-sub">Thank you!</p>
        <p>
          {attending === "yes"
            ? "We have your reply and cannot wait to celebrate with you on September 19, 2027."
            : "We have your reply. We will miss you and thank you for letting us know."}
        </p>
        <p className="small soft">Need to change something? Just send the form again before the reply date.</p>
      </div>
    );
  }

  return (
    <form className="rsvp-form" onSubmit={submit}>
      <label className="field">
        <span>Full name</span>
        <input name="name" required autoComplete="name" placeholder="First and last name" />
      </label>

      <fieldset className="choice">
        <legend>Will you be joining us?</legend>
        <button
          type="button"
          className={attending === "yes" ? "is-on" : ""}
          onClick={() => setAttending("yes")}
          aria-pressed={attending === "yes"}
        >
          Joyfully accepts
        </button>
        <button
          type="button"
          className={attending === "no" ? "is-on" : ""}
          onClick={() => setAttending("no")}
          aria-pressed={attending === "no"}
        >
          Regretfully declines
        </button>
      </fieldset>

      {attending === "yes" && (
        <>
          <label className="field">
            <span>How many in your party, including you?</span>
            <select name="party" defaultValue="1" required>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </label>
          <label className="field">
            <span>Names of everyone else in your party</span>
            <input name="guests" placeholder="Leave blank if just you" />
          </label>
          <p className="small soft note">
            Plus-ones and children must be confirmed by {couple.first} or {couple.second}.
          </p>
          <label className="field">
            <span>Food allergies or dietary needs</span>
            <input name="dietary" placeholder="Optional" />
          </label>
        </>
      )}

      {attending && (
        <>
          <label className="field">
            <span>Email or phone, for updates</span>
            <input name="contact" placeholder="Optional" />
          </label>
          <label className="field">
            <span>A note for the couple</span>
            <textarea name="message" rows={3} placeholder="Optional" />
          </label>
        </>
      )}

      <input name="website" className="trap" tabIndex={-1} autoComplete="off" aria-hidden />

      <button type="submit" className="btn btn-gold btn-wide" disabled={!attending || status === "sending" || !ready}>
        {status === "sending" ? "Sending..." : "Send my RSVP"}
      </button>
      {!ready && <p className="small soft">The RSVP form is being connected. Please check back shortly.</p>}
      {status === "error" && (
        <p className="error">That did not go through. Please check your connection and try again.</p>
      )}
    </form>
  );
}
