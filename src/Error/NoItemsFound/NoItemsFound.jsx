import React from "react";
import NoItems from "../../../public/Animated-Question.gif";

const NoItemsFound = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <h1 className="text-2xl font-bold text-secondary/90">
          No Recipes Found
        </h1>
      </div>
      <div>
        <img
          className="w-full h-auto max-w-lg"
          src={NoItems}
          alt="No items found illustration"
        />
      </div>
    </div>
  );
};

export default NoItemsFound;
