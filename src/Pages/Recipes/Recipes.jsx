import React, { useState } from "react";
import CategoryWrapper from "../Category/CategoryWrapper";
import DisplayPage from "../Home/DisplayImage";
import HeroSearch from "../../Components/Hero/HeroSearch";

const Recipes = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <section className="flex flex-col justify-center items-center w-full py-20">
        <div className="px-5 xl:px-10 md:w-[60%] mb-10">
          <h1 className="text-2xl md:text-[45px] leading-none font-bold mb-10 text-secondary/90 text-center">
            Recipes
          </h1>
          <HeroSearch onSearch={handleSearch} />
        </div>
        <CategoryWrapper />
        <section className="mt-6">
          <DisplayPage searchQuery={searchQuery} />
        </section>
      </section>
    </div>
  );
};

export default Recipes;
