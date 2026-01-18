
export interface Amenity {
  title: string;
  image: string;
  description: string;
}

export interface InvestmentFeature {
  title: string;
  description: string;
  image: string;
}

export enum SectionType {
  OVERVIEW = 'OVERVIEW',
  AMENITIES = 'AMENITIES',
  INVESTMENT = 'INVESTMENT'
}
