import React from 'react';
import BackgroundGraphic from './BackgroundGraphic'; // Import the BackgroundGraphic component

const HeroSection = () => {
  const scrollToForecast = () => {
    document.getElementById('forecast-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative mt-12 px-4">
      {/* Add the BackgroundGraphic */}
      <BackgroundGraphic />

      <div className="max-w-3xl mx-auto text-left ml-8 relative z-10 font-urbanist">
        {/* Heading */}
        <h1 className="text-6xl font-bold text-gray-900 leading-tight">
          Real-Time Flood Forecasts, <br /> Stay Prepared.
        </h1>

        {/* Subheading */}
        <p className="text-2xl text-blue-600 mt-3 font-semibold">
          AI-powered coastal flood forecasting for real-time risk awareness.
        </p>

        {/* Description */}
        <p className="text-lg text-gray-600 mt-5 font-normal">
          Predict, prepare, and protect—our smart forecasting tool helps communities stay safe with real-time flood insights.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-start space-x-6">
          <button
            className="bg-blue-500 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
            onClick={scrollToForecast}
          >
            Forecast
          </button>
          <button className="border-2 border-blue-500 text-blue-500 px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-100 transition-transform transform hover:scale-105">
            Community
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;