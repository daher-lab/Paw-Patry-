import { hasSignupUrl, MEMBERSHIP_SIGNUP_URL } from "../lib/portal";
import "./HomeView.css";

const PLANS = [
  {
    label: "Day Pass",
    price: "$20",
    access: "One visit — perfect for flexible fun.",
    perk: "",
    second: "",
    featured: false,
  },
  {
    label: "Monthly",
    price: "$50",
    suffix: "/mo",
    access: "Monday–Friday access.",
    perk: "",
    second: "$90",
    featured: false,
  },
  {
    label: "Premium",
    price: "$65",
    suffix: "/mo",
    access: "Monday–Sunday access.",
    perk: "Free pup cup every visit.",
    second: "$105",
    featured: true,
  },
  {
    label: "Annual",
    price: "$500",
    suffix: "/yr",
    access: "Year-round play for regulars.",
    perk: "",
    second: "",
    featured: false,
  },
];

export default function MembershipsPage() {
  const signupReady = hasSignupUrl();
  const href = signupReady ? MEMBERSHIP_SIGNUP_URL : "/portal";

  return (
    <div className="zo-home zo-page">
      <header className="zo-page-head">
        <p className="zo-page-kicker">Memberships</p>
        <h1>PLAY ON YOUR SCHEDULE</h1>
        <p>
          Day passes for flexible fun. Memberships for the regulars. Peace of
          mind for every visit.
        </p>
      </header>

      <div className="zo-plans">
        {PLANS.map((plan) => (
          <article
            className={`zo-plan ${plan.featured ? "zo-plan-featured" : ""}`}
            key={plan.label}
          >
            <p className="zo-plan-label">{plan.label}</p>
            {plan.second ? null : (
              <p className="zo-plan-price">
                {plan.price}
                {plan.suffix ? <span>{plan.suffix}</span> : null}
              </p>
            )}
            <p>{plan.access}</p>
            {plan.perk ? <p className="zo-plan-perk">{plan.perk}</p> : null}
            {plan.second ? (
              <div className="zo-plan-actions">
                <a
                  className={plan.featured ? "zo-btn zo-btn-light" : "zo-btn"}
                  href={href}
                >
                  <span>One dog</span>
                  <strong>
                    {plan.price}
                    {plan.suffix}
                  </strong>
                </a>
                <a
                  className={plan.featured ? "zo-btn zo-btn-ghost" : "zo-btn zo-btn-line"}
                  href={href}
                >
                  <span>Two dogs</span>
                  <strong>
                    {plan.second}
                    {plan.suffix}
                  </strong>
                </a>
              </div>
            ) : (
              <a
                className={plan.featured ? "zo-btn zo-btn-light" : "zo-btn"}
                href={href}
              >
                SET UP {plan.label.toUpperCase()}
              </a>
            )}
          </article>
        ))}
      </div>
      <p className="zo-plan-cap">Two dogs max.</p>
      {!signupReady ? (
        <p className="zo-page-note">
          Online signup connects through the Dog Portal — links go live once
          membership software is connected.
        </p>
      ) : null}
    </div>
  );
}
