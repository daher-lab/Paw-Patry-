import {
  hasSignupUrl,
  MEMBERSHIP_SIGNUP_URL,
} from "../lib/portal";

const PLANS = [
  {
    label: "Day Pass",
    price: "$20",
    access: "One visit — perfect for flexible fun.",
    perk: "",
    featured: false,
  },
  {
    label: "Monthly",
    price: "$50",
    suffix: "/mo",
    access: "Monday–Friday access.",
    perk: "",
    featured: false,
  },
  {
    label: "Premium",
    price: "$65",
    suffix: "/mo",
    access: "Monday–Sunday access.",
    perk: "Includes a free pup cup every visit.",
    featured: true,
  },
  {
    label: "Annual",
    price: "$500",
    suffix: "/yr",
    access: "Year-round play for regulars.",
    perk: "",
    featured: false,
  },
];

export default function MembershipsPage() {
  const signupReady = hasSignupUrl();

  return (
    <>
      <header className="page-hero">
        <div className="section-inner">
          <span className="eyebrow">Memberships</span>
          <h1>Play on your schedule.</h1>
          <p>
            Day passes for flexible fun. Memberships for the regulars. Peace of
            mind for every visit.
          </p>
        </div>
      </header>
      <div className="page-body">
        <div className="section-inner">
          <div className="plan-row">
            {PLANS.map((plan) => (
              <article
                className={`plan ${plan.featured ? "featured" : ""}`}
                key={plan.label}
              >
                <p className="label">{plan.label}</p>
                <p className="price">
                  {plan.price}
                  {plan.suffix ? <span>{plan.suffix}</span> : null}
                </p>
                <p className="access">{plan.access}</p>
                {plan.perk ? <p className="perk">{plan.perk}</p> : null}
                {signupReady ? (
                  <a className="btn btn-gold plan-cta" href={MEMBERSHIP_SIGNUP_URL}>
                    Set up {plan.label}
                  </a>
                ) : (
                  <a className="btn btn-gold plan-cta" href="/portal">
                    Set up {plan.label}
                  </a>
                )}
              </article>
            ))}
          </div>
          {!signupReady ? (
            <p className="plan-note">
              Online signup connects through the Dog Portal — links go live once
              membership software is connected.
            </p>
          ) : null}
        </div>
      </div>
    </>
  );
}
