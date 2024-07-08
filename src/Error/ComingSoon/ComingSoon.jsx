import React from "react";

const ComingSoon = () => {
  return (
    <section className="h-screen bg-cover">
      <div className="flex h-full w-full items-center justify-center container mx-auto px-8">
        <div className="max-w-2xl text-center">
          <h1 className="text-3xl sm:text-5xl capitalize tracking-widest text-secondary lg:text-7xl">
            Comming Soon
          </h1>

          <p className="mt-6 lg:text-lg text-secondaryDark">
            You can subscribe to our newsletter, and let you know when we are
            back
          </p>

          <div className="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
            <input
              id="email"
              type="text"
              className="rounded-md border border-transparent bg-primary px-4 py-2 text-secondary placeholder-secondary focus:backdrop-blur-sm focus:border-accent focus:outline-none focus:ring focus:ring-accent focus:ring-opacity-40 sm:mx-2"
              placeholder="Email Address"
            />

            <button className="transform rounded-md bg-accent px-8 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-accent focus:bg-accent focus:outline-none sm:mx-2">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
