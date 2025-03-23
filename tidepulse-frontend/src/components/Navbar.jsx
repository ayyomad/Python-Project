import { FaBell } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 mx-6 mt-4"> {/* Increased navbar length by adjusting padding */}
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 bg-black rounded-full"></div>
        <h1 className="text-xl font-semibold text-blue-600">TidePulse</h1>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8 text-gray-600 bg-white bg-opacity-30 backdrop-blur-md py-2 px-8 rounded-full border border-gray-300">
        <Link to="/" className="hover:text-black">Home</Link>
        <Link to="/flood-map" className="hover:text-black">Flood Map</Link>
        <Link to="/community" className="hover:text-black">Community</Link>
<Link to="/safety-resources" className="hover:text-black">Safety & Resources</Link>
      </div>

      {/* Right Icons */}
      <div className="flex items-center space-x-4">
        <FaBell className="text-gray-600 cursor-pointer" />
        <Link to="/login">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;