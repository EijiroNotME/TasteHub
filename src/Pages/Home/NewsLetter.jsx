import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full md:w-2/3 mx-auto flex flex-col items-center p-10">
      <h3 className="text-secondary font-semibold text-center text-4xl">
        Sign up for our weekly newsletter!
      </h3>
      <p className="text-center text-secondary mt-6 leading:normal font-light">
        Weekly emails with the latest recipes, cooking tips, and more.
        <br />
        You'll be set up in a few minutes.
      </p>
      <div className="mt-6 flex flex-col md:flex-row items-center justify-center w-full md:px-8 gap-4 mb-20">
        <input
          type="text"
          placeholder="Name"
          className="flex flex-grow px-4 py-4 rounded text-secondary/40 outline-none placeholder:text-[secondary]"
        />
        <input
          type="text"
          placeholder="Email address"
          className="flex flex-grow px-4 py-4 rounded text-secondary/40 outline-none placeholder:text-[secondary]"
        />
        <button className="mt-2 md:mt-0 md:ml-2 bg-accent hover:text-secondary outline-none hover:bg-primaryDark text-primary shadow-lg rounded-md px-8 py-4 text-sm transition-all ease-in-out duration-300">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
