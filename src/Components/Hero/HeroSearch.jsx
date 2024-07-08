import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";

const HeroSearch = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query); // Call onSearch with current query value
  };

  return (
    <form className="relative flex items-center">
      <input
        className="outline-none w-full placeholder:text-neutral-400 p-4 rounded-lg bg-white  "
        name="query"
        type="search"
        placeholder="Search for recipe here"
        id="search"
        value={query}
        onChange={handleInputChange} // Update on change
        required=""
      />
      <button
        type="submit"
        className="ml-2 bg-accent text-white hover:text-secondary px-4 py-4 rounded-md hover:bg-primaryDark transition duration-300 shadow-lg"
        onClick={handleSearch} // Trigger search on button click
      >
        <IoSearchSharp className="text-2xl " />
      </button>
    </form>
  );
};

export default HeroSearch;
