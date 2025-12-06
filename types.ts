export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  amenities: string[];
  capacity: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}
