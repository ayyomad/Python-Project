import React from 'react';
import topography from '../assets/topography.svg'; // Import the SVG file

const BackgroundGraphic = () => {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full"
      style={{
        backgroundImage: `url(${topography})`, // Use the imported SVG file
        backgroundRepeat: "repeat", // Tile the background
        backgroundSize: "auto", // Use the original size of the SVG
        zIndex: -1, // Ensure it stays behind other content
      }}
    />
  );
};

export default BackgroundGraphic;