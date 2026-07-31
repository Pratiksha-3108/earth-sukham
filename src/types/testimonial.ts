export interface Testimonial {
  id: string;
  name?: string;
  role?: string;
  avatar?: string;
  content?: string;
  rating?: number;
  author?: string;
  review?: string;
  date?: string;
  designation?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
