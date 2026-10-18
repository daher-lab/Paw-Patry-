import { TEAM_APPLY_URL } from "../lib/jobs";

export default function TeamPage() {
  return (
    <>
      <header className="page-hero">
        <div className="section-inner">
          <span className="eyebrow">Careers</span>
          <h1>Careers at Paw Pawrty</h1>
          <p>
            We’re hiring. Fill out a short application if you want to work with
            dogs and people at Paw Pawrty.
          </p>
        </div>
      </header>
      <div className="page-body">
        <div className="section-inner">
          <div className="portal-box">
            <h2>Apply to work here</h2>
            <p>
              Tell us a bit about yourself. We’ll review applications and reach
              out if there’s a fit.
            </p>
            <div className="home-links" style={{ marginTop: "1.25rem" }}>
              <a className="btn btn-gold" href={TEAM_APPLY_URL}>
                Apply now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
