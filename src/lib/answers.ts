export const FAQS = [
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
    a: "Premium is $65/month for one dog, Monday–Sunday, and includes a free pup cup every visit. Two dogs are $105/month. Two dogs max.",
  },
];

const REPLIES: { keys: string[]; answer: string }[] = [
  {
    keys: ["hour", "open", "close", "when"],
    answer:
      "Sunday–Thursday 12pm–7pm. Friday and Saturday 12pm–9pm.",
  },
  {
    keys: ["where", "address", "located", "location", "direction", "westland", "warren"],
    answer:
      "32838 Warren Rd, Westland, MI 48185. Directions are on the About page.",
  },
  {
    keys: ["vaccine", "rabies", "bordetella", "dhpp", "shot"],
    answer:
      "Dogs need current Rabies, DHPP, and Bordetella on file before they come in.",
  },
  {
    keys: ["spay", "neuter", "age", "month", "puppy", "how old"],
    answer: "Dogs must be at least six months old and spayed or neutered.",
  },
  {
    keys: ["drop", "daycare", "board", "leave my dog", "alone"],
    answer:
      "Paw Pawrty isn’t a drop-off. You stay and enjoy the visit with your dog.",
  },
  {
    keys: ["kid", "child", "children"],
    answer:
      "Kids 5 and older can come with a supervising adult. No running, screaming, chasing, or teasing dogs.",
  },
  {
    keys: ["premium", "pup cup"],
    answer:
      "Premium is $65 a month for one dog, Monday–Sunday, and includes a free pup cup every visit. Two dogs are $105 a month. Two dogs max.",
  },
  {
    keys: ["price", "cost", "membership", "day pass", "how much", "monthly", "annual"],
    answer:
      "Day pass $20 for one dog. Monthly $50 for one dog, Monday–Friday, or $90 for two dogs. Premium $65 for one dog, all week, with a pup cup, or $105 for two dogs. Two dogs max. Annual $500.",
  },
  {
    keys: ["leash"],
    answer:
      "Leash in and leash out. Off-leash only inside the designated play area.",
  },
  {
    keys: ["food", "drink", "feed"],
    answer:
      "Food and drinks stay in the designated areas. Don’t feed someone else’s dog without asking.",
  },
  {
    keys: ["sick", "flea", "tick", "wound", "hurt"],
    answer:
      "Dogs who are sick, have fleas or ticks, open wounds, or are recovering from surgery can’t come in.",
  },
  {
    keys: ["rule", "supervise", "aggressive"],
    answer:
      "Stay with your dog, step in if play gets rough, and be kind. The full list is on Park Rules.",
  },
  {
    keys: ["job", "hiring", "career", "work", "apply", "employ"],
    answer:
      "We’re hiring. The Careers page has the details and the application.",
  },
  {
    keys: ["portal", "check in", "check-in", "sign up", "join", "account"],
    answer:
      "Memberships, day passes, and check-in go through the Dog Portal. Hit Join Now at the top.",
  },
  {
    keys: ["what is", "about", "paw pawrty", "dog park"],
    answer:
      "Paw Pawrty is an indoor/outdoor dog park in Westland. You stay with your dog — it isn’t a drop-off.",
  },
];

const FALLBACK =
  "I don’t have that one. I can help with hours, prices, vaccines, rules, directions, or jobs — or open the FAQ at the bottom of the page.";

export function replyTo(text: string) {
  const q = text.toLowerCase().trim();
  if (!q) return FALLBACK;
  if (/^(hi|hey|hello|yo|help|sup)\b/.test(q)) {
    return "Hey. Ask me about hours, prices, vaccines, park rules, directions, or jobs.";
  }

  let best = 0;
  let answer = FALLBACK;
  for (const entry of REPLIES) {
    let score = 0;
    for (const key of entry.keys) {
      if (q.includes(key)) score += key.length;
    }
    if (score > best) {
      best = score;
      answer = entry.answer;
    }
  }
  return best >= 3 ? answer : FALLBACK;
}
