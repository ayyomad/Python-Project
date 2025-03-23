import React from 'react';
import SearchBar from '../components/SearchBar';
import HeroSection from '../components/HeroSection';
import BackgroundGraphic from '../components/BackgroundGraphic';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-50 to-white">
      <div className="pt-20"> {/* Add padding to move the SearchBar down */}
        <SearchBar />
      </div>
      <HeroSection />
      <BackgroundGraphic />
    </div>
  );
};

export default Home;