import React from "react";
import HeroInto from "./HeroInto";
import HeroSearch from "./HeroSearch";

const Hero = () => {
  return (
    <section className="px-5 xl:px-10 md:w-[60%] mb-10 ">
      <HeroInto />
      <HeroSearch />
    </section>
  );
};

export default Hero;
