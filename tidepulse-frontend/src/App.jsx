import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Import Home page
import LoginPage from './components/LoginPage';
import CommunityPage from './components/CommunityPage'; // Import Community page
import SafetyResourcesPage from './components/SafetyResourcesPage'; // Import Safety & Resources page

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />

          {/* Login Route */}
          <Route path="/login" element={<LoginPage />} />

          {/* Community Route */}
          <Route path="/community" element={<CommunityPage />} />

          {/* Safety & Resources Route */}
          <Route path="/safety-resources" element={<SafetyResourcesPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;