import React from 'react';

const HeroSection = () => {
  const scrollToForecast = () => {
    document.getElementById('forecast-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative mt-12 px-4">
      <div className="max-w-3xl mx-auto text-left ml-8">
        <h1 className="text-6xl font-bold text-gray-900 leading-tight">
          Real-Time Flood Forecasts, <br /> Stay Prepared.
        </h1>
        <p className="text-xl text-blue-600 mt-3">
          AI-powered coastal flood forecasting for real-time risk awareness.
        </p>
        <p className="text-2xl text-gray-600 mt-5">
          Predict, prepare, and protect—our smart forecasting tool helps communities stay safe with real-time flood insights.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-start space-x-6">
          <button
            className="bg-blue-500 text-white px-8 py-3 rounded-2xl text-lg font-semibold shadow-md hover:bg-blue-600 transition"
            onClick={scrollToForecast}
          >
            Forecast
          </button>
          <button className="border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-2xl text-lg font-semibold hover:bg-blue-100 transition">
            Community
          </button>
        </div>
      </div>

      {/* SVG Line Grid Pattern */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          viewBox="0 0 100 100"
        >
          <defs>
            <pattern
              id="lineGrid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#lineGrid)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;