import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="flex justify-center mt-6">
      <div className="relative w-3/5">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-3 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
    </div>
  );
};

export default SearchBar;