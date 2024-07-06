import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";

const HeroSearch = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // Call onSearch on every input change
  };

  return (
    <form className="bg-white p-4 relative flex items-center rounded-lg">
      <IoSearchSharp className="w-5 h-5 mr-2 text-neutral-300" />
      <input
        className="outline-none w-full placeholder:text-neutral-400"
        name="query"
        type="search"
        placeholder="Search for recipe here"
        id="search"
        value={query}
        onChange={handleInputChange} // Update on change
        required=""
      />
    </form>
  );
};

export default HeroSearch;
