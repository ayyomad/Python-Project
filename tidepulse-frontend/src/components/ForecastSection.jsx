import React from 'react';

const ForecastSection = () => {
  return (
    <section id="forecast-section" className="p-8 mt-12">
      {/* Heading */}
      <div className="bg-white bg-opacity-30 backdrop-blur-md py-4 px-6 rounded-3xl border border-gray-300 mb-8 inline-block">
        <h2 className="text-2xl font-semibold text-gray-900">Forecast</h2>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Stats */}
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white bg-opacity-30 backdrop-blur-md p-4 rounded-3xl border border-gray-300">
            <h3 className="text-lg font-semibold text-gray-900">Stat 1</h3>
            <p className="text-gray-600">Description of stat 1</p>
          </div>
          <div className="bg-white bg-opacity-30 backdrop-blur-md p-4 rounded-3xl border border-gray-300">
            <h3 className="text-lg font-semibold text-gray-900">Stat 2</h3>
            <p className="text-gray-600">Description of stat 2</p>
          </div>
          <div className="bg-white bg-opacity-30 backdrop-blur-md p-4 rounded-3xl border border-gray-300">
            <h3 className="text-lg font-semibold text-gray-900">Stat 3</h3>
            <p className="text-gray-600">Description of stat 3</p>
          </div>
        </div>

        {/* Heatmap */}
        <div className="lg:col-span-2 bg-white bg-opacity-30 backdrop-blur-md p-4 rounded-3xl border border-gray-300">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Topography Heatmap</h3>
          <div className="w-full h-64 bg-gray-200 rounded-3xl">
            {/* Placeholder for the heatmap */}
            <img src="path/to/your/heatmap.png" alt="Topography Heatmap" className="w-full h-full object-cover rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForecastSection;