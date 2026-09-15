const FAQS = [
  {
    q: "Where are you located?",
    a: "32838 Warren Rd, Westland, Michigan.",
  },
  {
    q: "What vaccines are required?",
    a: "Current Rabies, DHPP, and Bordetella vaccinations must be on file.",
  },
  {
    q: "What are the age and spay/neuter requirements?",
    a: "Dogs must be at least six months of age and spayed or neutered.",
  },
  {
    q: "Can I drop my dog off?",
    a: "No — Paw Pawrty isn’t a drop-off. You stay and enjoy the experience together.",
  },
  {
    q: "Are children allowed?",
    a: "Children ages 5 and older are welcome with a supervising adult. No running, screaming, chasing, teasing, or provoking dogs.",
  },
  {
    q: "What’s included with Premium?",
    a: "Premium is $65/month for Monday–Sunday access and includes a free pup cup every visit.",
  },
];

export default function FaqPage() {
  return (
    <>
      <header className="page-hero">
        <div className="section-inner">
          <span className="eyebrow">FAQ</span>
          <h1>Quick answers</h1>
          <p>Common questions before your first visit.</p>
        </div>
      </header>
      <div className="page-body">
        <div className="section-inner">
          <div className="faq-list">
            {FAQS.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
