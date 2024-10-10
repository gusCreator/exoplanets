'use client';

import Input from '@/components/form/input/Input';
import SelectLanguage from '@/components/languages/SelectLanguage';
import InteractiveText from '@/components/ui/InteractiveText';
import { FaHouse } from 'react-icons/fa6';
import UserAuth from '@/components/user/UserAuth';
import AstroCard from '@/components/astros/AstroCard';
import { Exoplanet } from '@/types/Astro';
import AstrosSlider from '@/components/astros/AstrosSlider';

export default function Home() {
  const kepler22b: Exoplanet = {
    name: 'Kepler-22b',
    distanceFromEarth: 600, // Distance in light years
    mass: 2.4, // Mass relative to Earth
    massUnit: 'Earth', // Unit is Earth
    radius: 12700, // Radius in kilometers
    imageUrl: '/img/kepler.jpeg', // Image URL
    discoveredDate: new Date('2011-12-05'), // Discovery date
    // Exoplanet-specific properties
    size: 2.4, // Size relative to Earth
    orbitalType: 'elliptical', // Elliptical orbit
    hostStar: {
      name: 'Kepler-22',
      distanceFromEarth: 600, // Distance in light years
      mass: 0.97, // Mass relative to Sun
      massUnit: 'Sun', // Unit is Sun
      radius: 696342, // Radius in kilometers
      imageUrl: '/images/kepler.jpeg', // Image of the star
      temperature: 5518, // Temperature in Kelvin
      luminosity: 0.79, // Luminosity relative to Sun
      spectralType: 'G', // Spectral type G
    },
    nearestStars: [
      {
        name: 'Kepler-21',
        distanceFromEarth: 620, // Distance in light years
        mass: 1.1, // Mass relative to Sun
        massUnit: 'Sun', // Unit is Sun
        radius: 702000, // Radius in kilometers
        imageUrl: '/img/kepler.jpeg', // Image URL
        temperature: 5800, // Temperature in Kelvin
        luminosity: 1.05, // Luminosity relative to Sun
        spectralType: 'F', // Spectral type F
      },
    ],
  };
  const proximaCentauriB: Exoplanet = {
    name: 'Proxima Centauri b',
    distanceFromEarth: 4.24, // Distance in light years
    mass: 1.17, // Mass relative to Earth
    radius: 11000, // Radius in kilometers
    massUnit: 'Earth',
    imageUrl: '/img/proximaCentauri.jpeg', // Image URL
    discoveredDate: new Date('2016-08-24'), // Discovery date
    // Exoplanet-specific properties
    size: 1.17, // Size relative to Earth
    orbitalType: 'elliptical', // Elliptical orbit
    hostStar: {
      name: 'Proxima Centauri',
      distanceFromEarth: 4.24, // Distance in light years
      massUnit: 'Sun',
      mass: 0.12, // Mass relative to Sun
      radius: 100000, // Radius in kilometers
      imageUrl: 'https://example.com/images/proxima_centauri.jpg', // Image of the star
      temperature: 3042, // Temperature in Kelvin
      luminosity: 0.0017, // Luminosity relative to Sun
      spectralType: 'M', // Spectral type M
    },
    nearestStars: [
      {
        name: 'Alpha Centauri A',
        distanceFromEarth: 4.37, // Distance in light years
        mass: 1.1, // Mass relative to Sun
        radius: 1234000, // Radius in kilometers
        imageUrl: 'https://example.com/images/alpha_centauri_a.jpg', // Image URL
        massUnit: 'Sun',
        temperature: 5790, // Temperature in Kelvin
        luminosity: 1.52, // Luminosity relative to Sun
        spectralType: 'G', // Spectral type G
      },
      {
        name: 'Alpha Centauri B',
        distanceFromEarth: 4.37, // Distance in light years
        mass: 0.9, // Mass relative to Sun
        massUnit: 'Sun',
        radius: 870000, // Radius in kilometers
        imageUrl: 'https://example.com/images/alpha_centauri_b.jpg', // Image URL
        temperature: 5260, // Temperature in Kelvin
        luminosity: 0.5, // Luminosity relative to Sun
        spectralType: 'K', // Spectral type K
      },
    ],
  };
  const handleClick = () => {
    console.log('An Astro card');
  };
  return (
    <h1 className="gap-4 flex flex-col p-4">
      <InteractiveText leftGraphic={FaHouse} lgProps={{}} content="Hola" />
      <Input label="Hola" name="other" />
      <SelectLanguage showLabel />
      <UserAuth />
      <AstroCard
        astro={kepler22b}
        onClick={handleClick}
        fontTitle="font-audiowide"
      />
      <AstroCard
        astro={proximaCentauriB}
        onClick={handleClick}
        fontTitle="font-audiowide"
      />
      <AstrosSlider
        astros={[
          { onClick: handleClick, astro: kepler22b },
          { onClick: handleClick, astro: proximaCentauriB },
        ]}
      />
    </h1>
  );
}
