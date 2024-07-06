import React from "react";
import aboutImage from "/about-image.jpg";

const AboutSection = () => {
  return (
    <div className="overflow-hidden flex  lg:flex-row flex-col justify-between items-center sm:my-20 my-4 md:gap-20 gap-12 px-5 lg:px-10">
      {/* text-div */}
      <div>
        <h2 className="text-3xl font-semibold text-secondary sm:text-5xl sm:leading-relaxed">
          About Tastehub
        </h2>
        <p className="text-xl mt-4 text-secondary">
          Welcome to <span className="text-accent font-bold">Taste Hub</span>,
          your ultimate online recipe book! Our mission is to inspire home cooks
          of all skill levels to create delicious and memorable meals. Whether
          you’re a seasoned chef or a beginner in the kitchen, Taste Hub offers
          a diverse collection of recipes to suit every palate and occasion.
          From quick and easy weeknight dinners to gourmet dishes and delectable
          desserts, our curated recipes are designed to bring joy and flavor to
          your table. Explore our extensive database, search by ingredients, and
          discover new culinary delights. Join our community of food enthusiasts
          and embark on a culinary adventure with Taste Hub, where every recipe
          is a gateway to a world of taste.
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex">
            <button className="py-4 bg-accent px-8 hover:bg-primaryDark text-primary hover:text-secondary transition ease-in duration-200 text-center text-base font-semibold hover:border-primary shadow-lg shadow-secondary/20 focus:outline-none rounded-lg mb-5">
              View Recipe
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="text-start sm:w-1/2">
          <p className="text-3xl lg:text-5xl font-bold"></p>
        </div>
        <img src={aboutImage} alt="Featured Img" className="rounded-md" />
      </div>
    </div>
  );
};

export default AboutSection;
