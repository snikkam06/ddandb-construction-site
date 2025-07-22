export interface TestimonialItem {
  quote: string;
  author: string;
  role?: string;
  company: string;
  img?: string;
}

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "The Marsh McLennan Agency team has had the privilege of providing a Surety Bond program for DD&B for over 40 years, reflecting two generations of ownership continuity. DD&B's proven track record in successfully completing a diverse range of projects nationwide, even during fluctuating economic conditions, underscores their capabilities and commitment to maintaining a strong financial position. Throughout our relationship with DD&B, we can confidently state that we have never had to decline a bond request from DD&B throughout our longstanding partnership.",
    author: "Adam Grap",
    role: "Surety Specialist",
    company: "Marsh McLennan Agency",
    img: "/images/logos/coloredLogo.png",
  },
  {
    quote:
      "I have had the privilege of working with DD&B for over 20 years, and they have consistently demonstrated exceptional professionalism and expertise. They possess a comprehensive understanding of all major hotel brands and their construction requirements, allowing them to navigate projects with precision and efficiency. DD&B is proactive in solving challenges, highly responsive, and truly committed to teamwork. Their focus on quality and care for their work product sets them apart, and I confidently recommend them whenever I have the opportunity.",
    author: "Jerry Phillips, AIA",
    role: "President",
    company: "Phillips Partnership",
    img: "/images/logos/coloredLogo.png",
  },
  {
    quote:
      "Herring Bank has financed several construction projects over the past few years in which DD&B Construction was the general contractor. It’s always a pleasure working with owner Sushil Mehta and the team at DD&B. They have always been professional, well-organized and easy to work with. It has been our experience that DD&B consistently delivers a quality product that is both on-time and within budget. I would highly recommend DD&B Construction.",
    author: "Andy Nenstiel",
    role: "President",
    company: "Herring Bank",
    img: "/images/logos/coloredLogo.png",
  },
]; 