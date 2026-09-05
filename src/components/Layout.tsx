import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/memberships", label: "Memberships" },
  { to: "/rules", label: "Park Rules" },
  { to: "/faq", label: "FAQ" },
  { to: "/portal", label: "Dog Portal" },
];

export default function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

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
    <div className="site">
      <header
        className={`nav ${scrolled || !isHome ? "scrolled" : ""} ${!isHome ? "solid" : ""}`}
      >
        <Link className="nav-brand" to="/">
          <span className="paw">
            PAW
          </span>
          <span className="rty">PAWRTY</span>
        </Link>

        <ul className="nav-links">
          {LINKS.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.end}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link className="nav-cta" to="/memberships">
          Join the Pawrty
        </Link>

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
        <Link
          className="accent"
          to="/memberships"
          onClick={() => setMenuOpen(false)}
        >
          Join the Pawrty
        </Link>
      </div>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <strong>Paw Pawrty</strong>
            <span>Indoor & Outdoor Dog Park</span>
            <p className="footer-tagline">Built for Dogs. Made for People.</p>
          </div>
          <div className="footer-meta">
            <span>32838 Warren Rd, Westland, Michigan</span>
            <nav className="footer-links" aria-label="Footer">
              <Link to="/memberships">Memberships</Link>
              <Link to="/rules">Rules</Link>
              <Link to="/faq">FAQ</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
