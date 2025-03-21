import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ForecastSection from './components/ForecastSection';
import CommunityEngagement from './components/CommunityEngagement'; // Import the new section
import LoginPage from './components/LoginPage';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <ForecastSection />
                <CommunityEngagement /> {/* Add the Community Engagement Section */}
              </>
            }
          />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;