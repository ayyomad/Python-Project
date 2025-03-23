import { FaBell } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-50 to-white">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 bg-black rounded-full"></div>
        <h1 className="text-xl font-semibold text-blue-600">TidePulse</h1>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-12 text-gray-600 bg-white bg-opacity-30 backdrop-blur-md py-2 px-20 rounded-full border border-gray-300 items-center relative">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : "hover:text-black"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/flood-map"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : "hover:text-black"
          }
        >
          Flood Map
        </NavLink>
        <NavLink
          to="/community"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : "hover:text-black"
          }
        >
          Community
        </NavLink>
        <NavLink
          to="/safety-resources"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : "hover:text-black"
          }
        >
          Safety
        </NavLink>

        {/* Notification Icon */}
        <div className="absolute right-[-30px] bg-white border border-gray-300 rounded-full w-12 h-12 flex items-center justify-center shadow-md ml-6">
          <FaBell className="text-gray-600 text-lg hover:text-black cursor-pointer" />
        </div>
      </div>

      {/* Login Button */}
      <div className="flex items-center space-x-4">
        <NavLink to="/login">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Login</button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;