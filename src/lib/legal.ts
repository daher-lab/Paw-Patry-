export type LegalSection = {
  heading: string;
  body: string;
  list?: string[];
  after?: string;
};

export type LegalDoc = {
  slug: "privacy" | "terms" | "cancellation" | "copyright";
  title: string;
  updated: string;
  lede?: string;
  sections: LegalSection[];
};

export const LEGAL_DOCS: LegalDoc[] = [
  {
    slug: "privacy",
    title: "Privacy Policy",
    updated: "November 5, 2026",
    lede: "Effective November 2026.",
    sections: [
      {
        heading: "Who we are",
        body: 'Paw Pawrty LLC ("Paw Pawrty," "we") operates an indoor/outdoor dog park at 32838 Warren Rd, Westland, Michigan. This policy explains what information we collect through pawpawrty.com, our pet parent portal, job applications, and visits to the park, and how we use it.',
      },
      {
        heading: "Information we collect",
        body: "",
        list: [
          "Information you give us: name, email, phone, address, emergency contact, and your dog's details (name, breed, age, vaccination and spay/neuter records) when you sign up, buy a pass, or sign our waiver.",
          "Job applicants: contact details, work history, availability, and answers on our application form. We do not ask for Social Security numbers or financial information on the application.",
          "Payments: processed by our online booking and membership provider. We do not store full card numbers.",
          "At the park: security camera footage, and photos or video taken by staff.",
          "Website: basic technical data recorded automatically when you visit, such as IP address, browser type, and pages visited.",
        ],
      },
      {
        heading: "How we use it",
        body: "To run the park and your membership, check dogs in, verify vaccinations, keep guests and pets safe, respond to you, review job applications, send account and service messages, and improve our services. We do not sell or rent your personal information.",
      },
      {
        heading: "Security cameras, photos, and video",
        body: "Cameras operate on the premises for safety and incident review. That footage is not used for marketing.",
        after:
          "Separately, we sometimes take photos or video for social media and promotion. You can opt out at check-in, in your waiver, or anytime by contacting us, and we will remove content featuring you or your dog where we reasonably can. We will not feature children in marketing without a parent's or guardian's permission.",
      },
      {
        heading: "Who we share with",
        body: "",
        list: [
          "Our online booking and membership provider and its payment processors, to manage memberships, check-ins, and payments.",
          "Google, which hosts our job application form.",
          "Authorities, when the law requires it or to protect someone's safety (for example, after a dog bite incident).",
        ],
      },
      {
        heading: "Cookies and analytics",
        body: "Our website may use cookies and similar tools to understand how visitors use the site and to show our ads to people who may be interested in Paw Pawrty. These may include Google Analytics, and the Meta (Facebook and Instagram) Pixel. These tools collect information like your device type, browser, general location, and pages visited, and they may help Meta show you our ads on Facebook and Instagram. They do not tell us your name. You can block or delete cookies in your browser settings, and you can adjust your ad preferences in your Facebook and Instagram settings.",
      },
      {
        heading: "Text messages and email",
        body: "If you give us your phone number or email, we may contact you about your account, bookings, and park updates. Reply STOP to any text, or use the unsubscribe link in any email, to opt out of marketing messages.",
      },
      {
        heading: "How long we keep it",
        body: "We keep membership records, signed waivers, and incident reports for as long as needed for legal, insurance, and business purposes. Job applications are kept for up to one year. Security footage is kept for a limited time and then automatically overwritten, unless it is needed for an incident.",
      },
      {
        heading: "Keeping it safe",
        body: "We limit access to staff who need it and rely on established providers with their own security protections. No system is perfectly secure, but we take reasonable steps to protect your information.",
      },
      {
        heading: "Children",
        body: "Children 5 and older are welcome at the park with a supervising adult, but our memberships, portal, and website are for adults. We do not knowingly collect personal information from children under 13. If you believe we have, contact us and we will delete it.",
      },
      {
        heading: "Your choices",
        body: "You can ask us to see, correct, or delete the information we hold about you, or to stop using your photos. We may need to keep some records, such as signed waivers and incident reports, where the law or our insurance requires it.",
      },
      {
        heading: "Changes",
        body: "We may update this policy. The date at the top shows when it last changed.",
      },
      {
        heading: "Contact us",
        body: "Email: pawpawrty@gmail.com\nMail: Paw Pawrty LLC, 32838 Warren Rd, Westland, MI\nInstagram: @pawpawrtyllc",
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms & Conditions",
    updated: "November 5, 2026",
    lede: "Effective November 2026.",
    sections: [
      {
        heading: "1. About these terms",
        body: 'These terms apply to everyone who uses pawpawrty.com, buys a pass or membership, or visits Paw Pawrty LLC ("Paw Pawrty," "we") at 32838 Warren Rd, Westland, Michigan. By booking, buying, or entering the park, you agree to these terms, our Park Rules, our Cancellation & Refund Policy, and our Privacy Policy.',
      },
      {
        heading: "2. Entry requirements",
        body: "To enter, every dog must be at least 6 months old, be spayed or neutered, and have current Rabies, DHPP, and Bordetella vaccinations on file. Every guest must accept our liability waiver before their first visit. We may ask for proof of vaccination at any time.",
      },
      {
        heading: "3. Your responsibility for your dog",
        body: "Paw Pawrty is not a drop-off service. You must stay and supervise your dog at all times. You are responsible for your dog's behavior and for any injury or damage your dog causes to people, other dogs, or property. Remove your dog right away if it shows aggression or signs of illness.",
      },
      {
        heading: "4. Children",
        body: "Children 5 and older are welcome with a supervising adult, who is responsible for them at all times. Children may not run, scream, chase, tease, or provoke dogs.",
      },
      {
        heading: "5. Assumption of risk",
        body: "Dogs playing together can be unpredictable. Visiting the park carries risks, including bites, scratches, illness, falls, and injury to people or dogs. By entering, you accept these risks to the fullest extent allowed by law.",
      },
      {
        heading: "6. Passes, memberships, and payment",
        body: "",
        list: [
          "Day Pass: $20, valid for one visit, one dog.",
          "Monthly: $50/month for one dog, Monday–Friday access. Two dogs are $90/month.",
          "Premium: $65/month for one dog, Monday–Sunday access, includes a free pup cup each visit. Two dogs are $105/month.",
          "Annual: $500/year.",
        ],
        after:
          "Monthly and Premium memberships renew automatically each month until cancelled. Prices may change. We will notify members at least 30 days before a price change takes effect. A maximum of two dogs is allowed. No membership covers more than two dogs. Memberships are not transferable.",
      },
      {
        heading: "7. Cancellations and refunds",
        body: "All sales are final. There are no returns or refunds. Our Cancellation & Refund Policy is part of these terms.",
      },
      {
        heading: "8. Removal from the park",
        body: "We may refuse entry, or remove any guest or dog, at any time for safety reasons or for breaking these terms or the Park Rules. Serious or repeated violations may lead to membership cancellation.",
      },
      {
        heading: "9. Personal property",
        body: "We are not responsible for lost, stolen, or damaged personal items.",
      },
      {
        heading: "10. Photos and video",
        body: "We may take photos or video at the park, as described in our Privacy Policy. You can opt out anytime by telling staff or emailing pawpawrty@gmail.com.",
      },
      {
        heading: "11. Website",
        body: "Website content is for general information and may change without notice. Online booking and payments are handled by our online booking and membership provider and are subject to its terms.",
      },
      {
        heading: "12. Limitation of liability",
        body: "To the fullest extent permitted by law, Paw Pawrty is not liable for indirect or consequential damages arising from your use of the park or website. Nothing in these terms limits liability that cannot be limited under Michigan law.",
      },
      {
        heading: "13. Governing law",
        body: "These terms are governed by the laws of the State of Michigan. Any dispute will be handled in the courts of Wayne County, Michigan.",
      },
      {
        heading: "14. Changes",
        body: "We may update these terms. The date at the top shows when they last changed. Continuing to use our services after a change means you accept the updated terms.",
      },
      {
        heading: "15. Contact",
        body: "Email: pawpawrty@gmail.com\nMail: Paw Pawrty LLC, 32838 Warren Rd, Westland, MI\nInstagram: @pawpawrtyllc",
      },
    ],
  },
  {
    slug: "cancellation",
    title: "Cancellation & Refund Policy",
    updated: "November 2026",
    lede: "Effective November 2026.",
    sections: [
      {
        heading: "Sales are final",
        body: "All sales are final. Day passes, memberships, and any other purchase from Paw Pawrty cannot be returned.",
      },
      {
        heading: "No refunds",
        body: "We do not give refunds, credits, or exchanges. This includes unused visits and time left on a membership.",
      },
      {
        heading: "Part of our terms",
        body: "This policy is part of our Terms & Conditions. By booking, buying, or entering the park, you agree to it.",
      },
      {
        heading: "Contact",
        body: "Email: pawpawrty@gmail.com\nMail: Paw Pawrty LLC, 32838 Warren Rd, Westland, MI\nInstagram: @pawpawrtyllc",
      },
    ],
  },
  {
    slug: "copyright",
    title: "Copyright",
    updated: "November 5, 2026",
    sections: [
      {
        heading: "Notice",
        body: "© 2026 Paw Pawrty. All rights reserved. The Paw Pawrty name, paw mark, World of Pawsibilities, site design, and photos we publish are owned by Paw Pawrty unless noted otherwise.",
      },
      {
        heading: "Use",
        body: "You may not copy, scrape, or reuse our logo, layout, or content for another business without written permission. Guest photos remain subject to our privacy practices and park rules.",
      },
    ],
  },
];

export function getLegal(slug: string) {
  return LEGAL_DOCS.find((d) => d.slug === slug);
}
