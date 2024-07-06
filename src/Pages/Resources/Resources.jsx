import React from "react";
import blogData from "../../../public/Data/blog"; // Assuming blog.js is in the same directory

const Resources = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full py-20 flex-shrink-0">
      <h1 className="text-2xl md:text-[45px] leading-none font-bold mb-10 text-secondary/90">
        Resources
      </h1>
      <h2 className="text-2xl font-bold text-secondary/90">Articles</h2>
      <p className="text-xl opacity-80 mb-4">
        Here are some resources that can help you in your journey.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {blogData.map((item, index) => (
          <div
            key={index}
            className="relative h-96 flex flex-col justify-between bg-primary shadow-lg shadow-secondary/30 rounded-lg overflow-hidden m-4 cursor-pointer"
          >
            <img
              src={item.imgSrc}
              alt={item.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <hr className="my-3" />
              <p className="text-gray-600 text-sm mb-2">{item.date}</p>
              <p className="text-gray-600 text-sm mb-2">{item.views}</p>
              <p className="text-gray-600 text-sm mb-2">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
