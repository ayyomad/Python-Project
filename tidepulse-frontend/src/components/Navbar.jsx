import { FaBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 bg-black rounded-full"></div>
        <h1 className="text-xl font-semibold text-blue-600">TidePulse</h1>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6 text-gray-600">
        <a href="/" className="hover:text-black">Home</a>
        <a href="/flood-map" className="hover:text-black">Flood Map</a>
        <a href="/reports" className="hover:text-black">Reports</a>
        <a href="/safety" className="hover:text-black">Safety</a>
      </div>

      {/* Right Icons */}
      <div className="flex items-center space-x-4">
        <FaBell className="text-gray-600 cursor-pointer" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
