import { DOG_PORTAL_URL, hasPortalUrl } from "../lib/portal";

export default function PortalPage() {
  const ready = hasPortalUrl();

  return (
    <>
      <header className="page-hero">
        <div className="section-inner">
          <span className="eyebrow">Members</span>
          <h1>Dog Portal</h1>
          <p>Check in, manage your pups, and keep vaccine records current.</p>
        </div>
      </header>
      <div className="page-body">
        <div className="section-inner">
          <div className="portal-box">
            <h2>Access Dog Portal</h2>
            <p>
              Sign in to check in for your visit, update your dog’s info, keep
              vaccine records current, and set up your membership.
            </p>
            <div className="home-links" style={{ marginTop: "1.25rem" }}>
              {ready ? (
                <a
                  className="btn btn-gold"
                  href={DOG_PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Access Dog Portal
                </a>
              ) : (
                <button className="btn btn-gold" type="button" disabled>
                  Access Dog Portal
                </button>
              )}
            </div>
            {!ready ? (
              <p className="portal-note">
                Portal access goes live once membership software is connected.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
