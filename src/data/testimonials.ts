export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "He took our marketplace from a fragile MVP to a platform processing nine figures in GMV. Rare combination of systems depth and product sense.",
    name: "Sofia Marchetti",
    title: "CEO, Aurelia Commerce",
  },
  {
    quote:
      "The real-time bidding engine he architected is still the backbone of our business. Bulletproof under load.",
    name: "Daniel Okafor",
    title: "CTO, BidHub",
  },
  {
    quote:
      "Few engineers truly understand marketplace dynamics. He does — payments, trust, search, logistics. He delivered all of it.",
    name: "Yara Haddad",
    title: "VP Engineering, Nearby",
  },
];
