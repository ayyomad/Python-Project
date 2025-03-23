import React from "react";

const ForecastSection = () => {
  return (
    <section id="forecast-section" className="p-8 mt-12">
      <div className="bg-white bg-opacity-30 backdrop-blur-md py-4 px-6 rounded-3xl border border-gray-300 mb-8 inline-block">
        <h2 className="text-2xl font-semibold text-gray-900">Weather Forecast</h2>
      </div>

      <div className="bg-white bg-opacity-30 backdrop-blur-md p-6 rounded-3xl border border-gray-300">
        <p className="text-lg text-gray-800">
          Stay updated with the latest weather forecasts and tide levels to prepare for potential flooding.
        </p>
        <ul className="mt-4 space-y-2">
          <li className="text-gray-700">
            <strong>Rainfall:</strong> 120 mm expected tomorrow.
          </li>
          <li className="text-gray-700">
            <strong>Tide Level:</strong> High tide at 3.5 meters.
          </li>
          <li className="text-gray-700">
            <strong>Wind Speed:</strong> 25 km/h winds expected.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ForecastSection;