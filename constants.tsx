
import React from 'react';
import { Plane, Building, MapPin, TrendingUp, Shield, Trees } from 'lucide-react';
import { Amenity, InvestmentFeature } from './types';

export const AMENITIES: Amenity[] = [
  {
    title: "Eco-Friendly Living",
    description: "Lush green landscapes with 11+ acres of open spaces for a sustainable lifestyle.",
    image: "https://picsum.photos/seed/garden1/800/600"
  },
  {
    title: "Infinity Pool",
    description: "A world-class swimming facility overlooking the majestic Khopoli skyline.",
    image: "https://picsum.photos/seed/pool1/800/600"
  },
  {
    title: "Modern Clubhouse",
    description: "A 30,000 sq.ft hill-top resort style clubhouse with premium indoor facilities.",
    image: "https://picsum.photos/seed/club1/800/600"
  }
];

export const INVESTMENT_FEATURES: InvestmentFeature[] = [
  {
    title: "Strategic Location",
    description: "Experience real estate like never before with Shadow Infratech Pvt Ltd. Our commitment to innovation sets us apart as we incorporate cutting-edge technologies",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop"
  },
  {
    title: "Rapid Value Appreciation",
    description: "India's No.1 land investment destination with consistent year-on-year growth in property valuation.",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&h=600&fit=crop"
  },
  {
    title: "Infrastructure Growth",
    description: "Connected by major highways and the upcoming industrial corridors of Maharashtra.",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200&h=600&fit=crop"
  }
];

export const NAVIGATION_TABS = [
  { label: 'OVERVIEW', id: 'overview' },
  { label: 'AMENITIES', id: 'amenities' },
  { label: 'INVESTMENT EDGE', id: 'investment' }
];
