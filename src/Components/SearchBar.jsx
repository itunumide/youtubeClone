import searchIcon from "../assets/search.png";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    if (searchTerm.trim()) {
      onSearch(searchTerm); // Pass the search term to the parent component
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex-div w-[100%] border rounded-[1.6rem] py-[.2rem] md:py-[.5rem] px-[.75rem]"
    >
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-[6.25rem] md:w-[25rem] border-none outline-none bg-transparent"
        type="text"
        placeholder="Search"
      />
      <button type="submit" className="border-none bg-transparent">
        <img src={searchIcon} alt="search icon" className="w-[.9rem]" />
      </button>
    </form>
  );
};

export default SearchBar;
