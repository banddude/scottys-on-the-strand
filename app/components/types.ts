// Type definitions for Scotty's on the Strand

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  dietary?: DietaryTag[];
  popular?: boolean;
  spiceLevel?: 1 | 2 | 3;
}

export type DietaryTag = 'vegetarian' | 'vegan' | 'gluten-free' | 'dairy-free';

export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
  items: MenuItem[];
}

export interface NavigationLink {
  label: string;
  href: string;
  active?: boolean;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  hours: string;
}

export interface HeaderProps {
  className?: string;
}

export interface NavigationProps {
  className?: string;
  currentPath?: string;
}

export interface FooterProps {
  className?: string;
}
