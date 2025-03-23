import React, { useState } from "react";

const ForecastSection = () => {
  const [formData, setFormData] = useState({
    rainfall: "",
    tide_level: "",
    wind_speed: "",
    past_flood_alerts: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/v1/flood-risk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rainfall: parseFloat(formData.rainfall),
          tide_level: parseFloat(formData.tide_level),
          wind_speed: parseFloat(formData.wind_speed),
          past_flood_alerts: parseInt(formData.past_flood_alerts, 10),
        }),
      });

      const data = await response.json();
      setResult(data); // { risk_level: "High", risk_score: 85.0 }
    } catch (error) {
      console.error("Error fetching flood risk:", error);
    }
  };

  return (
    <section id="forecast-section" className="p-8 mt-12">
      {/* Heading */}
      <div className="bg-white bg-opacity-30 backdrop-blur-md py-4 px-6 rounded-3xl border border-gray-300 mb-8 inline-block">
        <h2 className="text-2xl font-semibold text-gray-900">Flood Risk Calculator</h2>
      </div>

      {/* Form Section */}
      <div className="bg-white bg-opacity-30 backdrop-blur-md p-6 rounded-3xl border border-gray-300">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-900 font-semibold mb-2">Rainfall (mm):</label>
            <input
              type="number"
              name="rainfall"
              value={formData.rainfall}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-900 font-semibold mb-2">Tide Level (m):</label>
            <input
              type="number"
              name="tide_level"
              value={formData.tide_level}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-900 font-semibold mb-2">Wind Speed (km/h):</label>
            <input
              type="number"
              name="wind_speed"
              value={formData.wind_speed}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-900 font-semibold mb-2">Past Flood Alerts:</label>
            <input
              type="number"
              name="past_flood_alerts"
              value={formData.past_flood_alerts}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-600 transition"
          >
            Calculate Flood Risk
          </button>
        </form>
      </div>

      {/* Result Section */}
      {result && (
        <div className="mt-8 bg-blue-100 p-6 rounded-3xl border border-blue-300">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Flood Risk Result</h3>
          <p className="text-lg text-gray-800">
            <strong>Risk Level:</strong> {result.risk_level}
          </p>
          <p className="text-lg text-gray-800">
            <strong>Risk Score:</strong> {result.risk_score}
          </p>
        </div>
      )}
    </section>
  );
};

export default ForecastSection;