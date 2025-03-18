const HeroSection = () => {
    return (
      <section className="text-center mt-10">
        <h1 className="text-5xl font-bold text-gray-900">
          Real-Time Flood Forecasts, <br /> Stay Prepared.
        </h1>
        <p className="text-lg text-blue-600 mt-2">
          AI-powered coastal flood forecasting for real-time risk awareness.
        </p>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Predict, prepare, and protect—our smart forecasting tool helps communities stay safe with real-time flood insights.
        </p>
  
        {/* Buttons */}
        <div className="mt-6 flex justify-center space-x-4">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg">
            Forecast
          </button>
          <button className="border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-lg">
            Community
          </button>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  