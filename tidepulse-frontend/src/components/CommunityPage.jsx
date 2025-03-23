import React, { useEffect, useState } from "react";

const CommunityPage = () => {
  const [reports, setReports] = useState([]);

  // Fetch reports from the backend
  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/v1/reports"); // Replace with your backend endpoint
        const data = await response.json();
        setReports(data);
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    };

    fetchReports();
  }, []);

  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Community Flood Reports</h1>

      {/* Scrollable Section */}
      <div className="overflow-y-auto max-h-[70vh] space-y-6">
        {reports.length > 0 ? (
          reports.map((report, index) => (
            <div
              key={index}
              className="flex bg-white p-4 rounded-3xl shadow-md border border-gray-300"
            >
              {/* Cover Image */}
              <div className="w-1/3 h-40 bg-gray-200 rounded-2xl overflow-hidden">
                <img
                  src={report.image || "https://via.placeholder.com/150"} // Replace with actual image URL
                  alt={report.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Report Details */}
              <div className="ml-6 flex-grow">
                <h2 className="text-xl font-semibold text-gray-900">{report.title}</h2>
                <p className="text-gray-700 mt-2">{report.description}</p>

                {/* Stats */}
                <div className="flex space-x-4 mt-4">
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                    {report.help_requests}+ Helps
                  </div>
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                    Location: {report.location}
                  </div>
                  <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold">
                    Urgency: {report.urgency}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-700">No reports available. Be the first to submit a report!</p>
        )}
      </div>
    </section>
  );
};

export default CommunityPage;