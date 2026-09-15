const HOUSE_RULES = [
  {
    title: "Supervise Your Dog",
    body: "Stay with your dog and actively supervise them while they play.",
    icon: "people",
  },
  {
    title: "Respect Everyone",
    body: "Aggressive behavior from dogs or disrespectful behavior from guests will not be tolerated. If play gets too rough, please step in.",
    icon: "hands",
  },
  {
    title: "Leash In. Leash Out.",
    body: "Keep your dog leashed until you are safely inside the designated off-leash area. Leash up again before exiting.",
    icon: "leash",
  },
  {
    title: "Children Stay With an Adult",
    body: "Children ages 5 and older are welcome with a supervising adult. For everyone’s safety, no running, screaming, chasing, teasing, or provoking dogs.",
    icon: "child",
  },
  {
    title: "Food & Drinks",
    body: "Enjoy food and beverages in designated areas, and please don’t feed another guest’s dog without permission.",
    icon: "food",
  },
  {
    title: "Be Kind & Have Fun",
    body: "Respect our guests, our team, and every pup. Paw Pawrty reserves the right to remove any person or dog whose behavior creates a safety concern.",
    icon: "heart",
  },
];

const ADMISSION = [
  {
    title: "Vaccination Requirements",
    body: "All dogs must have current Rabies, DHPP (Distemper/Parvo), and Bordetella vaccinations on file before entry.",
    icon: "shield",
  },
  {
    title: "Age & Spay/Neuter",
    body: "Dogs must be at least six (6) months of age and spayed or neutered.",
    icon: "dog",
  },
  {
    title: "Health",
    body: "Dogs with contagious illnesses, fleas, ticks, open wounds, or recovering from surgery are not permitted.",
    icon: "alert",
  },
  {
    title: "Capacity",
    body: "Entry may be delayed due to capacity limits. Membership does not guarantee immediate admission during peak occupancy.",
    icon: "crowd",
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
    default:
      return (
        <svg {...common}>
          <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" />
        </svg>
      );
  }
}

function RulesGrid({
  rules,
  startIndex = 0,
}: {
  rules: typeof HOUSE_RULES;
  startIndex?: number;
}) {
  return (
    <div className="rules-stage">
      {rules.map((rule, i) => (
        <article
          className="rule-card"
          key={rule.title}
          style={{ animationDelay: `${0.04 * i}s` }}
        >
          <div className="rule-card-top">
            <div className="rule-icon">
              <RuleIcon name={rule.icon} />
            </div>
            <span className="rule-index">
              {String(startIndex + i + 1).padStart(2, "0")}
            </span>
          </div>
          <h3>{rule.title}</h3>
          <p>{rule.body}</p>
        </article>
      ))}
    </div>
  );
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
            <p className="rules-kicker">House Rules</p>
            <span className="paw-deco" aria-hidden>
              ✦
            </span>
          </div>
          <h1>Play Nice. Stay Safe. Have Fun.</h1>
          <p className="rules-lead">
            We want Paw Pawrty to be a place where dogs can play freely and their
            humans can relax, connect, and enjoy the experience. A few simple
            rules help keep it that way.
          </p>
          <div className="rules-hero-line" aria-hidden />
        </div>
      </header>

      <div className="rules-body">
        <RulesGrid rules={HOUSE_RULES} />

        <div className="rules-section-label">
          <p className="rules-kicker dark">Before you enter</p>
          <h2>Admission requirements</h2>
          <p>
            Guests agree to our waiver and House Rules before participating.
            Dogs must meet Paw Pawrty’s admission requirements first.
          </p>
        </div>

        <RulesGrid rules={ADMISSION} startIndex={HOUSE_RULES.length} />

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
            <p className="rules-thanks">Already checked in?</p>
            <p>It’s time to play.</p>
          </div>
          <div className="rules-closing-ack">
            <p className="rules-ack-label">Guest acknowledgment</p>
            <p>
              By entering Paw Pawrty, I acknowledge that I have read, understand,
              and agree to follow these House Rules & admission requirements.
              Failure to comply may result in immediate removal and/or
              suspension of future privileges.
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
