import React from "react";
import Card from "../../Components/Card/Card";
import items from "../../../public/Data/Items"; // Ensure this path is correct

const LatestRecipes = () => {
  // Get the first 4 items
  const latestItems = items.slice(0, 4);

  return (
    <div className="px-5 xl:px-10 py-16">
      <h2 className="text-3xl mb-8 font-semibold text-secondary sm:text-5xl sm:leading-relaxed">
        Latest Recipes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {latestItems.map((item) => (
          <Card key={item._id} item={item} />
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <button className="w-[50%] py-4 px-8 hover:bg-accent text-secondary hover:text-primary transition ease-in duration-200 text-center text-base font-semibold border border-secondary hover:border-primary shadow-lg shadow-secondary/20 focus:outline-none rounded-lg mb-5">
          Recipe
        </button>
      </div>
    </div>
  );
};

export default LatestRecipes;
