import React from "react";
import items from "../../../public/Data/Items";
import FeaturedImg from "../../assets/featured.webp";

const FeaturedPage = () => {
  const featuredItems = items[0];
  return (
    <div className="overflow-hidden flex  lg:flex-row flex-col justify-between items-center sm:my-20 my-4 md:gap-20 gap-12 px-5 lg:px-10">
      <div className="relative">
        <div className="text-start sm:w-1/2">
          <h1 className="absolute top-4 left-5 text-secondary bg-primary py-1 px-3 rounded-md uppercase tracking-wider">
            Featured Dishes
          </h1>
          <p className="text-3xl lg:text-5xl font-bold"></p>
        </div>
        <img
          src={featuredItems.thumbnail_image}
          alt="Featured Img"
          className="rounded-md"
        />
      </div>
      {/* text-div */}
      <div>
        <h2 className="text-3xl font-semibold text-secondary sm:text-5xl sm:leading-relaxed">
          {featuredItems.name}
        </h2>
        <p className="text-xl mt-4 text-secondary">{featuredItems.details}</p>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex">
            <button className="py-4 px-8 hover:bg-accent text-secondary hover:text-primary transition ease-in duration-200 text-center text-base font-semibold border border-secondary hover:border-primary shadow-lg shadow-secondary/20 focus:outline-none rounded-lg mb-5">
              Recipe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPage;
