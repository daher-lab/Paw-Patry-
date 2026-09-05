import { Link } from "react-router-dom";

export default function PortalPage() {
  return (
    <>
      <header className="page-hero">
        <div className="section-inner">
          <span className="eyebrow">Members</span>
          <h1>Dog Portal</h1>
          <p>Manage your pups, visits, and membership — coming soon.</p>
        </div>
      </header>
      <div className="page-body">
        <div className="section-inner">
          <div className="portal-box">
            <h2>Opening soon</h2>
            <p>
              The Dog Portal will be where members check in, keep vaccine records
              current, and manage memberships. For now, join the park and we’ll
              take care of you in person.
            </p>
            <div className="home-links" style={{ marginTop: "1.25rem" }}>
              <Link className="btn btn-gold" to="/memberships">
                See memberships
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
