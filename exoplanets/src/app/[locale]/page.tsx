'use client';

import Input from '@/components/form/input/Input';
import SelectLanguage from '@/components/languages/SelectLanguage';
import InteractiveText from '@/components/ui/InteractiveText';
import { FaHouse } from 'react-icons/fa6';
import UserAuth from '@/components/user/UserAuth';
import AstroCard from '@/components/astros/AstroCard';
import { Exoplanet } from '@/types/Astro';

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
  const handleClick = () => {
    console.log('An Astro card');
  };
  return (
    <h1>
      <InteractiveText leftGraphic={FaHouse} lgProps={{}} content="Hola" />
      <Input label="Hola" name="other" />
      <SelectLanguage showLabel />
      <UserAuth />
      <AstroCard
        astro={kepler22b}
        onClick={handleClick}
        fontTitle="font-audiowide"
      />
    </h1>
  );
}
