export interface ServiceCard {
  title: string;
  blurb: string;
  img: string;
  href?: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  img: string;
}

export interface StatItem {
  value: string;
  label: string;
  suffix?: string;
}

export interface SafetyProgramItem {
  title: string;
  description: string;
  points: string[];
}

export interface ExpertiseArea {
  title: string;
  description: string;
  projects: string;
}

export interface CompanyInfo {
  tagline: string;
  description: string;
  goals: string;
  regions: string;
}
