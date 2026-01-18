
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
    description: "Located just 40 mins from the upcoming Navi Mumbai International Airport, making it a prime real estate hotspot.",
    image: "https://picsum.photos/seed/airport1/1200/600"
  },
  {
    title: "Rapid Value Appreciation",
    description: "India's No.1 land investment destination with consistent year-on-year growth in property valuation.",
    image: "https://picsum.photos/seed/val1/1200/600"
  },
  {
    title: "Infrastructure Growth",
    description: "Connected by major highways and the upcoming industrial corridors of Maharashtra.",
    image: "https://picsum.photos/seed/infra1/1200/600"
  }
];

export const NAVIGATION_TABS = [
  { label: 'OVERVIEW', id: 'overview' },
  { label: 'AMENITIES', id: 'amenities' },
  { label: 'INVESTMENT EDGE', id: 'investment' }
];
