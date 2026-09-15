import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import {
  isOwnerAuthed,
  loadFeedback,
  OWNER_PASSWORD,
  setOwnerAuthed,
  type Feedback,
} from "../lib/feedback";
import "./OwnerFeedback.css";

export default function OwnerFeedback() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [entries, setEntries] = useState<Feedback[]>([]);

  useEffect(() => {
    if (isOwnerAuthed()) {
      setAuthed(true);
      setEntries(loadFeedback());
    }
  }, []);

  function handleLogin(e: FormEvent) {
    e.preventDefault();
    if (password === OWNER_PASSWORD) {
      setOwnerAuthed(true);
      setAuthed(true);
      setError("");
      setEntries(loadFeedback());
      setPassword("");
      return;
    }
    setError("Wrong password.");
  }

  function handleLogout() {
    setOwnerAuthed(false);
    setAuthed(false);
  }

  function refresh() {
    setEntries(loadFeedback());
  }

  if (!authed) {
    return (
      <div className="owner">
        <div className="owner-gate">
          <p className="owner-kicker">Owner only</p>
          <h1>Feedback inbox</h1>
          <p className="owner-note">
            Enter the owner password to view client feedback.
          </p>
          <form onSubmit={handleLogin}>
            <label>
              <span>Password</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
            </label>
            {error ? <p className="owner-error">{error}</p> : null}
            <button className="btn btn-gold" type="submit">
              Unlock
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="owner">
      <div className="owner-panel">
        <div className="owner-top">
          <div>
            <p className="owner-kicker">Owner only</p>
            <h1>Client feedback</h1>
            <p className="owner-note">
              Live feedback also emails <strong>pawpawrty@gmail.com</strong>.
              This table shows copies saved on this device.
            </p>
          </div>
          <div className="owner-actions">
            <button className="btn btn-ghost" type="button" onClick={refresh}>
              Refresh
            </button>
            <button className="btn btn-ghost" type="button" onClick={handleLogout}>
              Lock
            </button>
          </div>
        </div>

        <div className="owner-table-wrap">
          <table className="owner-table">
            <thead>
              <tr>
                <th scope="col">Client</th>
                <th scope="col">Comments</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {entries.length === 0 ? (
                <tr>
                  <td colSpan={3} className="owner-empty">
                    No feedback yet.
                  </td>
                </tr>
              ) : (
                entries.map((row) => (
                  <tr key={row.id}>
                    <td>{row.name}</td>
                    <td>
                      {row.comments ||
                        [row.liked, row.improve].filter(Boolean).join(" · ") ||
                        "—"}
                    </td>
                    <td>{row.date}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
