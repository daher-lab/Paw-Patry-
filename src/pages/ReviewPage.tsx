import { useState } from "react";
import type { FormEvent } from "react";
import { loadFeedback, saveFeedback, type Feedback } from "../lib/feedback";
import "./HomeView.css";

const FEEDBACK_EMAIL = "pawpawrty@gmail.com";

export default function ReviewPage() {
  const [name, setName] = useState("");
  const [comments, setComments] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
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
      const res = await fetch(`https://formsubmit.co/ajax/${FEEDBACK_EMAIL}`, {
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
      });

      if (!res.ok) throw new Error("Could not send feedback");

      saveFeedback([next, ...loadFeedback()]);
      setName("");
      setComments("");
      setSent(true);
    } catch {
      setError("Couldn’t send right now. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="zo-home zo-page">
      <header className="zo-page-head">
        <h1 className="zo-feedback-title">
          Tell us what you think.
          <br />
          Give us some feedback.
        </h1>
        <p>What you loved, what we can improve, or both. It goes straight to Paw Pawrty.</p>
      </header>

      <form className="zo-review" onSubmit={handleSubmit}>
        {sent ? (
          <p className="zo-review-sent">Sent. It went to Paw Pawrty.</p>
        ) : null}
        <label>
          <span>Name</span>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your name"
            autoComplete="name"
          />
        </label>
        <label>
          <span>Feedback</span>
          <textarea
            value={comments}
            onChange={(event) => setComments(event.target.value)}
            placeholder="Tell us what you think…"
            rows={6}
            required
          />
        </label>
        <button className="zo-btn" type="submit" disabled={sending}>
          {sending ? "Sending…" : "Submit"}
        </button>
        {error ? <p className="zo-review-error">{error}</p> : null}
      </form>
    </div>
  );
}
