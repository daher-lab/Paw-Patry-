import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { PORTAL_URL } from "../lib/portal";
import { publicUrl } from "../lib/publicUrl";
import BrandMark from "./BrandMark";

const LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/memberships", label: "Memberships" },
  { to: "/rules", label: "Park Rules" },
  { to: "/portal", label: "Dog Portal" },
  { to: "/careers", label: "Careers" },
];

export default function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="site site-home">
      <header className={`nav nav-zo ${scrolled ? "scrolled" : ""}`}>
        <Link className="nav-brand" to="/" aria-label="Paw Pawrty">
          <BrandMark />
        </Link>

        <ul className="nav-links">
          {LINKS.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.end}>
                {l.to === "/careers" ? "Careers" : l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <a className="nav-cta" href={PORTAL_URL}>
          JOIN NOW
        </a>

        <button
          className="nav-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className={`nav-mobile ${menuOpen ? "open" : ""}`}>
        {LINKS.map((l) => (
          <Link key={l.to} to={l.to} onClick={() => setMenuOpen(false)}>
            {l.label}
          </Link>
        ))}
        <a
          className="accent"
          href={PORTAL_URL}
          onClick={() => setMenuOpen(false)}
        >
          Join now
        </a>
      </div>

      <main>
        <Outlet />
      </main>

      <footer className="footer footer-zo">
        <div className="footer-zo-top">
          <div className="footer-zo-brand">
            <Link className="footer-logo-badge" to="/" aria-label="Paw Pawrty">
              <BrandMark />
            </Link>
          </div>

          <nav className="footer-col" aria-label="Information">
            <p className="footer-col-title">Information</p>
            <Link to="/memberships">Memberships</Link>
            <Link to="/about">About</Link>
            <Link to="/rules">Park Rules</Link>
            <Link to="/careers">We&apos;re Hiring</Link>
            <Link to="/portal">Dog Portal</Link>
          </nav>

          <div className="footer-col">
            <p className="footer-col-title">Location</p>
            <p className="footer-address">
              32838 Warren Rd
              <br />
              Westland, MI 48185
            </p>
            <Link to="/about">Get directions</Link>
          </div>

          <div className="footer-col">
            <p className="footer-col-title">Hours</p>
            <p className="footer-hours">
              Sun–Thu 12pm–7pm
              <br />
              Fri–Sat 12pm–9pm
            </p>
            <Link className="footer-faq" to="/faq">
              Questions? FAQ
            </Link>
          </div>
        </div>

        <div className="footer-zo-follow">
          <p className="footer-col-title">Follow Us</p>
          <div className="footer-socials">
            <a
              href="https://www.instagram.com/pawpawrtyllc/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@pawpawrtyllc"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M14.2 3h2.4c.3 2.2 1.7 3.8 3.9 4.1v2.4c-1.4 0-2.7-.5-3.9-1.3v6.6c0 3.5-2.7 6.2-6.3 6.2S4 18.3 4 14.8 6.7 8.6 10.3 8.6c.3 0 .7 0 1 .1v2.5c-.3-.1-.7-.2-1-.2-2 0-3.6 1.7-3.6 3.8s1.6 3.8 3.6 3.8 3.5-1.6 3.5-3.7V3z"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-zo-bar">
          <p className="footer-copy">
            © 2026 Paw Pawrty. All rights reserved.
          </p>
          <nav className="footer-zo-legal" aria-label="Legal">
            <Link to="/legal/privacy">Privacy Policy</Link>
            <span aria-hidden="true">|</span>
            <Link to="/legal/terms">Terms &amp; Conditions</Link>
            <span aria-hidden="true">|</span>
            <Link to="/legal/cancellation">Cancellation Policy</Link>
            <span aria-hidden="true">|</span>
            <Link to="/legal/copyright">Copyright</Link>
          </nav>
        </div>

        <div className="footer-wordmark" aria-hidden="true">
          <div className="footer-wordmark-deco">
            <img
              className="footer-deco-dog"
              src={publicUrl("/images/footer-dog.png?v=2")}
              alt=""
            />
            <img
              className="footer-deco-paw"
              src={publicUrl("/images/logo-paw.png")}
              alt=""
            />
          </div>
          <p className="footer-wordmark-many">MANY</p>
          <p className="footer-wordmark-paws">PAWSIBILITIES!</p>
        </div>
      </footer>
    </div>
  );
}
