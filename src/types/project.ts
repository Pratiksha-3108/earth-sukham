export interface Project {
  id: string;
  name: string;
  location: string;
  city: string;
  typology: string;
  priceRange: string;
  status: 'New Launches' | 'Ready Possession' | 'Under Construction' | string;
  category?: string;
  image: string;
  featured?: boolean;
  newLaunch?: boolean;
  RERA?: string;
  rera?: string;
  developer?: string;
  description?: string;
  amenities?: string[];
}

export interface LocationItem {
  id: string;
  name: string;
  city: string;
  projectCount: number;
  image?: string;
}

export interface DeveloperPartner {
  id: string;
  name: string;
  logo: string;
  projectsCount: number;
}
