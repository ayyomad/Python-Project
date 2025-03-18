import React from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi'; // Location icon
import { AiOutlineLike } from 'react-icons/ai'; // Like icon
import { BiCommentDetail } from 'react-icons/bi'; // Comment icon

const CommunityEngagement = () => {
  return (
    <section className="p-8 bg-blue-50">
      {/* Title & Intro */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Join the Community & Improve Flood Awareness!
        </h2>
        <p className="text-lg text-gray-700">
          Real-time user reports, discussions, and disaster support all in one place.
        </p>
        <button className="mt-6 bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-600 transition">
          Get Involved
        </button>
      </div>

      {/* Bento Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Latest User Reports */}
        <div className="bg-white p-6 rounded-3xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Latest User Reports</h3>
          <div className="space-y-4">
            {/* Report Card */}
            <div className="bg-blue-100 p-4 rounded-lg shadow-sm flex items-start space-x-4">
              <img
                src="https://via.placeholder.com/80"
                alt="Flood Report"
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-800 flex items-center">
                  <HiOutlineLocationMarker className="text-blue-500 mr-2" />
                  New York, NY
                </h4>
                <p className="text-sm text-gray-600">Severe flooding in downtown areas.</p>
                <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                <span className="inline-block mt-2 px-3 py-1 text-sm font-medium text-white bg-red-500 rounded-full">
                  High Severity
                </span>
              </div>
            </div>
            {/* Add more report cards as needed */}
          </div>
        </div>

        {/* Discussion Threads */}
        <div className="bg-white p-6 rounded-3xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Discussion Threads</h3>
          <div className="space-y-4">
            {/* Discussion Card */}
            <div className="bg-blue-100 p-4 rounded-lg shadow-sm flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                A
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Flood Safety Tips</h4>
                <p className="text-sm text-gray-600">
                  Share your best practices for staying safe during floods.
                </p>
                <div className="flex items-center space-x-4 mt-2">
                  <button className="flex items-center text-gray-500 hover:text-blue-500">
                    <AiOutlineLike className="mr-1" /> 12
                  </button>
                  <button className="flex items-center text-gray-500 hover:text-blue-500">
                    <BiCommentDetail className="mr-1" /> 5
                  </button>
                </div>
              </div>
            </div>
            {/* Add more discussion cards as needed */}
          </div>
        </div>

        {/* Call-to-Action Box */}
        <div className="bg-blue-500 text-white p-6 rounded-3xl shadow-md flex flex-col items-center justify-center">
          <h3 className="text-2xl font-bold mb-4">Be a part of the solution</h3>
          <p className="text-center mb-6">
            Share your reports, engage in discussions, and help others stay informed.
          </p>
          <button className="bg-white text-blue-500 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100 transition">
            Join the Community
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunityEngagement;