export interface TestimonialItem {
  initials: string;
  name: string;
  position: string;
  feedback: string;
  rating: number; // e.g., 1-5
}

export const testimonials: TestimonialItem[] = [
  {
    initials: "SM",
    name: "Sarah Miller",
    position: "IT Director, Innovatech",
    feedback:
      "SoftSell's platform was a game-changer for us. We offloaded unused licenses quickly and the process was incredibly straightforward. The valuation was fair and transparent.",
    rating: 5,
  },
  {
    initials: "JD",
    name: "John Davis",
    position: "CFO, Global Solutions Ltd.",
    feedback:
      "Efficient, professional, and delivered exactly what they promised. We recovered significant value from software assets we thought were worthless. Highly recommended!",
    rating: 5,
  },
  {
    initials: "AL",
    name: "Alex Lee",
    position: "Procurement Lead, TechCore",
    feedback:
      "The team at SoftSell was very responsive and guided us through every step. Selling our licenses was much easier than we anticipated. Great service!",
    rating: 4,
  },
  {
    initials: "EP",
    name: "Emily Parker",
    position: "Software Asset Manager, DataFlow Inc.",
    feedback:
      "A seamless experience from start to finish. The platform is user-friendly, and the payment was prompt. Will definitely use SoftSell again.",
    rating: 5,
  },
  {
    initials: "MB",
    name: "Marcus Brown",
    position: "Startup Founder, NextGen Apps",
    feedback:
      "As a startup, every penny counts. SoftSell helped us monetize licenses we no longer needed, providing a welcome cash injection. The process was quick and hassle-free.",
    rating: 4,
  },
];
