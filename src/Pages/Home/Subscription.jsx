import React from "react";

const Subscription = () => {
  return (
    <div className="py-16 rounded-t-md w-full">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-20 ">
          {/* for left text */}
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
              Subscribe to our newsletter
            </h3>
            <p className="mt-4 text-lg leading-8">
              Get the latest news and updates straight to your inbox, Be the
              first to know.
            </p>
          </div>
          {/*  */}
          <div className="sm:w-1/2 flex flex-col sm:flex-row gap-4">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              type="text"
              placeholder="Email address"
              className="flex flex-grow px-4 py-4 rounded text-secondary/40 outline-none placeholder:text-[secondary] bg-primary"
            />
            <button className="mt-2 md:mt-0 md:ml-2 bg-accent hover:text-secondary outline-none hover:bg-primaryDark text-primary shadow-lg rounded-md px-8 py-4 text-sm transition-all ease-in-out duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default Subscription;
