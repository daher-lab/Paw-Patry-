import { useState } from "react";
import type { FormEvent } from "react";
import {
  FEEDBACK_KEY,
  loadFeedback,
  saveFeedback,
  type Feedback,
} from "../lib/feedback";
import "./HomePage.css";

const DOG_IMG = "/images/hero-dog-wide.jpg";
const COFFEE_IMG = "/images/coffee-paw.jpg";
const OUTDOOR_IMG = "/images/dogs-outdoor-play.jpg";

export default function HomePage() {
  const [name, setName] = useState("");
  const [liked, setLiked] = useState("");
  const [improve, setImprove] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!liked.trim() && !improve.trim()) return;

    const next: Feedback = {
      id: crypto.randomUUID(),
      name: name.trim() || "Guest",
      liked: liked.trim(),
      improve: improve.trim(),
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    };

    const updated = [next, ...loadFeedback()];
    saveFeedback(updated);
    // keep key in sync if older code paths exist
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(updated));

    setName("");
    setLiked("");
    setImprove("");
    setSent(true);
    window.setTimeout(() => setSent(false), 2500);
  }

  return (
    <div className="home">
      <section className="hp-hero" aria-label="Welcome">
        <div className="hp-hero-copy">
          <p className="hp-kicker">Indoor / Outdoor Dog Park · Westland, MI</p>
          <h1 className="hp-brand">
            Paw <span>Pawrty</span>
          </h1>
          <p className="hp-tagline">
            Something <em>BIG</em> is here.
          </p>
          <p className="hp-sub">Where Dogs Play &amp; People Connect.</p>
        </div>

        <div className="hp-photos" aria-label="Paw Pawrty photos">
          <figure className="hp-photo hp-photo-dog">
            <img
              src={DOG_IMG}
              alt="White Samoyed dog, the face of Paw Pawrty"
              width={1600}
              height={900}
            />
          </figure>
          <figure className="hp-photo hp-photo-coffee">
            <img
              src={COFFEE_IMG}
              alt="Craft coffee with paw-print latte art"
              width={1024}
              height={1024}
            />
          </figure>
        </div>
      </section>

      <section className="hp-about" id="about">
        <div className="hp-about-inner">
          <div className="hp-about-head">
            <p className="hp-kicker ink">About Us</p>
            <h2>A place for both ends of the leash.</h2>
          </div>
          <div className="hp-about-body">
            <p>
              Paw Pawrty was created around a simple idea: going somewhere with
              your dog shouldn’t mean having nothing for you to do.
            </p>
            <p>
              We offer a comfortable indoor/outdoor space in Westland, MI where
              dogs can play and socialize while their humans sit back, grab a
              drink, and connect. It’s not a drop-off site—you stay and enjoy
              the experience together.
            </p>
          </div>
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
            <p>
              Share what you love and where we can improve — your feedback helps
              shape Paw Pawrty.
            </p>
          </div>

          <form className="hp-feedback-form" onSubmit={handleSubmit}>
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
              <span>What do you like?</span>
              <textarea
                value={liked}
                onChange={(e) => setLiked(e.target.value)}
                placeholder="Play areas, coffee, vibe…"
                rows={3}
                required
              />
            </label>
            <label>
              <span>Where can we improve?</span>
              <textarea
                value={improve}
                onChange={(e) => setImprove(e.target.value)}
                placeholder="Hours, treats, seating…"
                rows={3}
                required
              />
            </label>
            <button className="btn btn-gold" type="submit">
              {sent ? "Thanks — sent privately!" : "Submit Feedback"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
