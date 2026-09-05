import { Link } from "react-router-dom";

export default function JoinPage() {
  return (
    <>
      <header className="page-hero">
        <div className="section-inner">
          <span className="eyebrow">Get started</span>
          <h1>Join our park</h1>
          <p>
            A few simple steps before playtime. Vaccine-verified, waiver signed,
            then it’s time to belong.
          </p>
        </div>
      </header>
      <div className="page-body">
        <div className="section-inner">
          <p>
            <strong style={{ color: "#0a0a0a" }}>1. Meet admission requirements</strong>
            <br />
            Dogs must meet age, vaccination (Rabies, DHPP, Bordetella), and
            spay/neuter requirements before entering.
          </p>
          <p>
            <strong style={{ color: "#0a0a0a" }}>2. Agree to the waiver & house rules</strong>
            <br />
            Guests agree to our waiver and House Rules before participating.
          </p>
          <p>
            <strong style={{ color: "#0a0a0a" }}>3. Pick how you play</strong>
            <br />
            Day pass, monthly, premium, or annual — choose what fits your
            schedule.
          </p>
          <p>
            <strong style={{ color: "#0a0a0a" }}>4. Come play together</strong>
            <br />
            This isn’t a drop-off. You stay, supervise, and enjoy the experience
            with your dog.
          </p>
          <div className="home-links" style={{ justifyContent: "flex-start", marginTop: "1.5rem" }}>
            <Link className="btn btn-gold" to="/memberships">
              View memberships
            </Link>
            <Link className="btn btn-outline-dark" to="/rules">
              Read park rules
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
