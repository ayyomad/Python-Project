const SearchBar = () => {
    return (
      <div className="flex justify-center mt-6">
        <input
          type="text"
          placeholder="Search..."
          className="w-3/5 p-3 border rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>
    );
  };
  
  export default SearchBar;
  