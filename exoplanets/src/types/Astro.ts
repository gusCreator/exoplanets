export interface Astro {
  name: string;
  distanceFromEarth: number; // Distance in light years
  mass: number;
  massUnit: 'Sun' | 'Earth' // Mass relative to a reference unit
  radius: number; // Radius in kilometers
  imageUrl: string;
  discoveredDate?: Date;
}

export interface Exoplanet extends Astro {
  size: number; // Size relative to Earth
  orbitalType: 'circular' | 'elliptical';
  hostStar: Star;
  nearestStars: Star[];
}

export interface Star extends Astro {
  temperature: number; // Surface temperature in kelvin
  luminosity: number; // Luminosity relative to Sun
  spectralType: 'O' | 'B' | 'A' | 'F' | 'G' | 'K' | 'M'; // Spectral classifications
}
