const RULES = [
  {
    title: "Vaccination Requirements",
    body: "All dogs must have current Rabies, DHPP (Distemper/Parvo), and Bordetella vaccinations on file before entry.",
    icon: "shield",
  },
  {
    title: "Age & Spay/Neuter",
    body: "Dogs must be at least six (6) months old. Dogs over twelve (12) months of age must be spayed or neutered.",
    icon: "dog",
  },
  {
    title: "Health",
    body: "Dogs with contagious illnesses, fleas, ticks, open wounds, or recovering from surgery are not permitted.",
    icon: "heart",
  },
  {
    title: "Supervision",
    body: "Owners must remain inside the park and actively supervise their dog at all times. Paw Pawrty staff are not responsible for supervising dogs.",
    icon: "people",
  },
  {
    title: "Aggressive Behavior",
    body: "Aggressive, bullying, repeatedly mounting, resource guarding, excessive barking, or otherwise unsafe dogs may be removed immediately at staff discretion.",
    icon: "alert",
  },
  {
    title: "Leashes",
    body: "Dogs must remain leashed until inside the designated off-leash area and must be leashed before exiting.",
    icon: "leash",
  },
  {
    title: "Children",
    body: "Children five (5) years and older are welcome only with a supervising adult. Running, screaming, chasing, teasing, climbing on fences, or provoking dogs is prohibited.",
    icon: "child",
  },
  {
    title: "Food & Drinks",
    body: "Human food and beverages must stay in designated areas. Do not feed another person’s dog without permission.",
    icon: "food",
  },
  {
    title: "Respect Others",
    body: "Treat guests and staff respectfully. Harassment, abusive language, or unsafe conduct will not be tolerated.",
    icon: "hands",
  },
  {
    title: "Capacity",
    body: "Entry may be delayed due to capacity limits. Membership does not guarantee immediate admission during peak occupancy.",
    icon: "crowd",
  },
  {
    title: "Waste Cleanup",
    body: "Please clean up after your dog immediately and dispose of waste in the designated bins. Let’s keep our park clean!",
    icon: "waste",
  },
  {
    title: "Toys",
    body: "Bring toys at your own risk. Do not bring toys if your dog is possessive. Paw Pawrty is not responsible for lost or damaged items.",
    icon: "toy",
  },
  {
    title: "Photography",
    body: "Photos and videos may be taken for promotional purposes while on the premises.",
    icon: "camera",
  },
  {
    title: "Right to Refuse Service",
    body: "Paw Pawrty reserves the right to refuse entry, remove any guest or dog, suspend or revoke memberships, and close the park due to weather, maintenance, emergencies, or safety concerns without refund where permitted by law.",
    icon: "star",
  },
];

function RuleIcon({ name }: { name: string }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "dog":
      return (
        <svg {...common}>
          <path d="M6 14c0-3 2-5 6-5s6 2 6 5v4H6v-4z" />
          <path d="M8 9V7m8 2V7" />
          <circle cx="10" cy="13" r="0.6" fill="currentColor" />
          <circle cx="14" cy="13" r="0.6" fill="currentColor" />
        </svg>
      );
    case "heart":
      return (
        <svg {...common}>
          <path d="M12 20s-7-4.4-7-10a4 4 0 017-2.5A4 4 0 0119 10c0 5.6-7 10-7 10z" />
          <path d="M12 9v5M9.5 11.5h5" />
        </svg>
      );
    case "people":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="2.5" />
          <path d="M4 18c0-2.5 2-4.5 5-4.5s5 2 5 4.5" />
          <circle cx="17" cy="9" r="2" />
          <path d="M14 18c.4-1.8 1.8-3 3.5-3.2" />
        </svg>
      );
    case "alert":
      return (
        <svg {...common}>
          <path d="M12 4l9 16H3L12 4z" />
          <path d="M12 10v4M12 16.5h.01" />
        </svg>
      );
    case "leash":
      return (
        <svg {...common}>
          <circle cx="7" cy="12" r="3" />
          <path d="M10 12c4 0 5-4 9-4" />
          <circle cx="19" cy="8" r="1.5" />
        </svg>
      );
    case "child":
      return (
        <svg {...common}>
          <circle cx="8" cy="7" r="2.2" />
          <circle cx="15" cy="9" r="1.8" />
          <path d="M4 18c0-2.2 1.8-4 4-4s4 1.8 4 4M12.5 18c.2-1.5 1.4-2.8 3-3" />
        </svg>
      );
    case "food":
      return (
        <svg {...common}>
          <path d="M8 3v7M6 3v7M10 3v7M8 10v11" />
          <path d="M15 4v7a3 3 0 003 3v7" />
        </svg>
      );
    case "hands":
      return (
        <svg {...common}>
          <path d="M8 13l2-2 2 2 2-2 2 2v5H8v-5z" />
          <path d="M9 8l1.5 1.5L12 8l1.5 1.5L15 8" />
        </svg>
      );
    case "crowd":
      return (
        <svg {...common}>
          <circle cx="12" cy="7" r="2.2" />
          <circle cx="6.5" cy="9" r="1.8" />
          <circle cx="17.5" cy="9" r="1.8" />
          <path d="M7 18c0-2.2 2-4 5-4s5 1.8 5 4M4.5 18c.2-1.5 1.2-2.6 2.5-3M19.5 18c-.2-1.5-1.2-2.6-2.5-3" />
        </svg>
      );
    case "waste":
      return (
        <svg {...common}>
          <path d="M8 8h8l-1 12H9L8 8z" />
          <path d="M7 8h10M10 8V6h4v2" />
        </svg>
      );
    case "toy":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="6" />
          <path d="M12 6v12M6 12h12" />
        </svg>
      );
    case "camera":
      return (
        <svg {...common}>
          <path d="M4 8h3l1.5-2h7L17 8h3v11H4V8z" />
          <circle cx="12" cy="13" r="3" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" />
          <path d="M12 9l1.2 2.4 2.6.4-1.9 1.9.5 2.6L12 15.2 9.6 16.3l.5-2.6-1.9-1.9 2.6-.4L12 9z" />
        </svg>
      );
  }
}

export default function RulesPage() {
  return (
    <div className="rules-page">
      <header className="rules-hero">
        <div className="rules-hero-inner">
          <div className="rules-hero-mark">
            <span className="paw-deco" aria-hidden>
              ✦
            </span>
            <p className="rules-kicker">Park Rules & Code of Conduct</p>
            <span className="paw-deco" aria-hidden>
              ✦
            </span>
          </div>
          <h1>Play Nice. Stay Safe. Have Fun.</h1>
          <p className="rules-lead">
            These rules are designed to keep every guest—human and canine—safe
            and happy while visiting Paw Pawrty.
          </p>
          <div className="rules-hero-line" aria-hidden />
        </div>
      </header>

      <div className="rules-body">
        <div className="rules-stage">
          {RULES.map((rule, i) => (
            <article
              className="rule-card"
              key={rule.title}
              style={{ animationDelay: `${0.04 * i}s` }}
            >
              <div className="rule-card-top">
                <div className="rule-icon">
                  <RuleIcon name={rule.icon} />
                </div>
                <span className="rule-index">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3>{rule.title}</h3>
              <p>{rule.body}</p>
            </article>
          ))}
        </div>

        <div className="rules-closing">
          <div className="rules-closing-thanks">
            <div className="rules-paw-big" aria-hidden>
              <svg viewBox="0 0 24 24" width="42" height="42" fill="currentColor">
                <ellipse cx="12" cy="15.5" rx="4.5" ry="3.8" />
                <circle cx="5.5" cy="9" r="2.3" />
                <circle cx="18.5" cy="9" r="2.3" />
                <circle cx="8.5" cy="5.2" r="2" />
                <circle cx="15.5" cy="5.2" r="2" />
              </svg>
            </div>
            <p className="rules-thanks">Thank you!</p>
            <p>
              For helping us create a safe, fun, and positive experience for
              everyone.
            </p>
          </div>
          <div className="rules-closing-ack">
            <p className="rules-ack-label">Guest acknowledgment</p>
            <p>
              By entering Paw Pawrty, I acknowledge that I have read, understand,
              and agree to follow these Park Rules & Code of Conduct. Failure to
              comply may result in immediate removal and/or suspension of future
              privileges.
            </p>
          </div>
        </div>

        <div className="rules-pillars">
          <span>Be kind.</span>
          <span>Be responsible.</span>
          <span>Have paw-some fun!</span>
          <em>We’re glad you’re here.</em>
        </div>
      </div>
    </div>
  );
}
