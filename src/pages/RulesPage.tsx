import "./HomeView.css";

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

function RulesGrid({
  rules,
  startIndex = 0,
}: {
  rules: typeof HOUSE_RULES;
  startIndex?: number;
}) {
  return (
    <div className="zo-pair zo-pair-text">
      {rules.map((rule, i) => (
        <article className="zo-tile" key={rule.title}>
          <p className="zo-page-kicker">
            {String(startIndex + i + 1).padStart(2, "0")}
          </p>
          <h2>{rule.title.toUpperCase()}</h2>
          <p>{rule.body}</p>
        </article>
      ))}
    </div>
  );
}

export default function RulesPage() {
  return (
    <div className="zo-home zo-page">
      <header className="zo-page-head">
        <p className="zo-page-kicker">House Rules</p>
        <h1>PLAY NICE. STAY SAFE. HAVE FUN.</h1>
        <p>
          We want Paw Pawrty to be a place where dogs can play freely and their
          humans can relax, connect, and enjoy the experience. A few simple
          rules help keep it that way.
        </p>
      </header>

      <RulesGrid rules={HOUSE_RULES} />

      <section className="zo-banner">
        <div className="zo-banner-copy">
          <h2>ADMISSION REQUIREMENTS</h2>
          <p>
            Guests agree to our waiver and House Rules before participating.
            Dogs must meet Paw Pawrty’s admission requirements first.
          </p>
        </div>
      </section>

      <RulesGrid rules={ADMISSION} startIndex={HOUSE_RULES.length} />

      <section className="zo-banner">
        <div className="zo-banner-copy">
          <h2>GUEST ACKNOWLEDGMENT</h2>
          <p>
            By entering Paw Pawrty, I acknowledge that I have read, understand,
            and agree to follow these House Rules &amp; admission requirements.
            Failure to comply may result in immediate removal and/or suspension
            of future privileges.
          </p>
        </div>
      </section>
    </div>
  );
}
