import { Link } from "react-router-dom";
import BrandMark from "../components/BrandMark";
import { useState } from "react";
import type { FormEvent } from "react";
import {
  FEEDBACK_KEY,
  loadFeedback,
  saveFeedback,
  type Feedback,
} from "../lib/feedback";
import "./HomeView.css";

const DOG_IMG = "/images/hero-dog-epoxy-grey.jpg";
const OUTDOOR_IMG = "/images/dogs-outdoor-play.jpg";
const FEEDBACK_EMAIL = "pawpawrty@gmail.com";

export default function HomeView() {
  const [name, setName] = useState("");
  const [comments, setComments] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!comments.trim()) return;

    setSending(true);
    setError("");

    const next: Feedback = {
      id: crypto.randomUUID(),
      name: name.trim() || "Guest",
      comments: comments.trim(),
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    };

    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${FEEDBACK_EMAIL}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: next.name,
            comments: next.comments,
            _subject: "New Paw Pawrty feedback",
            _template: "table",
            _captcha: "false",
          }),
        },
      );

      if (!res.ok) throw new Error("Could not send feedback");

      const updated = [next, ...loadFeedback()];
      saveFeedback(updated);
      localStorage.setItem(FEEDBACK_KEY, JSON.stringify(updated));

      setName("");
      setComments("");
      setSent(true);
      window.setTimeout(() => setSent(false), 3000);
    } catch {
      setError("Couldn’t send right now. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="home">
      <section className="hp-hero" aria-label="Welcome">
        <div className="hp-hero-copy">
          <p className="hp-kicker">Indoor / Outdoor Dog Park · Westland, MI</p>
          <h1 className="hp-brand">
            <BrandMark />
          </h1>
          <p className="hp-tagline">
            World of <em>Pawsibilities</em>.
          </p>
          <p className="hp-sub">Where Dogs Play &amp; People Connect.</p>
        </div>

        <div className="hp-photos" aria-label="Paw Pawrty photos">
          <figure className="hp-photo hp-photo-dog">
            <img
              src={DOG_IMG}
              alt="White Samoyed dog on speckled epoxy flooring"
              width={1600}
              height={900}
            />
          </figure>
        </div>
      </section>

      <section className="hp-about" id="about">
        <div className="hp-about-wrap hp-about-short">
          <p className="hp-kicker ink">About Paw Pawrty</p>
          <h2>Where Dogs Play &amp; People Connect</h2>
          <p>
            Paw Pawrty was created around a simple idea: going somewhere with
            your dog shouldn’t mean having nothing for you to do. It’s a
            comfortable indoor/outdoor space in Westland, MI — not a drop-off
            site. You stay and enjoy it together.
          </p>
          <Link className="btn btn-dark" to="/about">
            Read our story
          </Link>
        </div>
      </section>

      <section className="hp-hours" id="hours">
        <div className="hp-hours-inner">
          <p className="hp-kicker">Hours</p>
          <h2>Come play.</h2>
          <ul>
            <li>
              <span>Sunday – Thursday</span>
              <strong>12pm – 7pm</strong>
            </li>
            <li>
              <span>Friday &amp; Saturday</span>
              <strong>12pm – 9pm</strong>
            </li>
          </ul>
          <p className="hp-hours-address">32838 Warren Rd, Westland, Michigan</p>
        </div>
      </section>

      <section className="hp-outdoor" aria-label="Outdoor play">
        <figure className="hp-outdoor-shot">
          <img
            src={OUTDOOR_IMG}
            alt="Dogs playing outside at the park"
            width={1600}
            height={900}
            loading="lazy"
          />
        </figure>
        <div className="hp-outdoor-caption">
          <p className="hp-kicker">Outdoor play</p>
          <h2>Room to run. Energy to burn.</h2>
        </div>
      </section>

      <section className="hp-feedback" id="feedback">
        <div className="hp-feedback-inner">
          <div className="hp-feedback-head">
            <p className="hp-kicker">Your Voice</p>
            <h2>Tell us what you think.</h2>
            <p>Share anything — what you loved, what we can improve, or both.</p>
          </div>

          <form className="hp-feedback-form hp-feedback-simple" onSubmit={handleSubmit}>
            <label>
              <span>Name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                autoComplete="name"
              />
            </label>
            <label>
              <span>Comments</span>
              <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                placeholder="Tell us anything…"
                rows={5}
                required
              />
            </label>
            <button className="btn btn-gold" type="submit" disabled={sending}>
              {sent
                ? "Sent to Paw Pawrty!"
                : sending
                  ? "Sending…"
                  : "Submit Feedback"}
            </button>
            {error ? <p className="hp-feedback-error">{error}</p> : null}
          </form>
        </div>
      </section>
    </div>
  );
}
