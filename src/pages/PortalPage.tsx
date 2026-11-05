import { DOG_PORTAL_URL, hasPortalUrl } from "../lib/portal";
import "./HomeView.css";

export default function PortalPage() {
  const ready = hasPortalUrl();

  return (
    <div className="zo-home zo-page">
      <header className="zo-page-head">
        <p className="zo-page-kicker">Members</p>
        <h1>DOG PORTAL</h1>
        <p>Check in, manage your pups, and keep vaccine records current.</p>
      </header>

      <section className="zo-banner">
        <div className="zo-banner-copy">
          <h2>ACCESS DOG PORTAL</h2>
          <p>
            Sign in to check in for your visit, update your dog’s info, keep
            vaccine records current, and set up your membership.
          </p>
        </div>
        {ready ? (
          <a className="zo-btn" href={DOG_PORTAL_URL}>
            OPEN PORTAL
          </a>
        ) : (
          <button className="zo-btn" type="button" disabled>
            OPEN PORTAL
          </button>
        )}
      </section>
      {!ready ? (
        <p className="zo-page-note">
          Portal access goes live once membership software is connected.
        </p>
      ) : null}
    </div>
  );
}
