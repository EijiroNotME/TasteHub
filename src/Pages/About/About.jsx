import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SkeletonImage from "../../Components/Skeleton/SkeletonImage";

const stories = [
  {
    title: "Passion for Cooking: Sharing Recipes From Around the World",
    description:
      "TasteHub is a celebration of our passion for cooking and our love for global flavors. It all started with a curiosity for diverse cuisines and a desire to share the joy of cooking with others. From mastering the art of French pastries to perfecting the spice blends of India, each recipe on TasteHub is a testament to our commitment to culinary exploration. Join us as we unlock the secrets of international cuisines and empower you to create delicious meals in your own kitchen.",
    image: "./story1.jpg",
  },
  {
    title: "Community of Food Enthusiasts: Learning and Growing Together",
    description:
      "At TasteHub, we believe that cooking is more than just preparing food—it's about connecting with others and sharing knowledge. Our journey began with a small group of food enthusiasts swapping recipes and cooking tips. Today, TasteHub is a vibrant community where home cooks and culinary adventurers alike come together to learn, experiment, and grow. Whether you're a novice cook or a seasoned chef, our platform is dedicated to fostering a love for cooking and inspiring creativity in the kitchen. Join our community and discover the joy of cooking with TasteHub.",
    image: "./story2.jpg",
  },
];

const StoryItem = ({ item, index }) => {
  const { title, description, image } = item;
  const isEvenIndex = index % 2 === 0;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => setLoading(false);
  }, [image]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div
        className={`col-span-1 md:col-span-1 ${
          isEvenIndex
            ? "order-1 md:order-2 md:col-start-2"
            : "order-2 md:order-1 md:col-start-1"
        }`}
      >
        <div
          className={`flex flex-col ${
            isEvenIndex ? "pl-4 md:pl-12" : "pr-4 md:pr-12"
          }`}
        >
          <h4
            className={`text-3xl font-bold mb-4 ${
              isEvenIndex
                ? "text-center md:text-left"
                : "text-center md:text-right"
            }`}
          >
            {title}
          </h4>
          <p
            className={`text-base leading-relaxed opacity-70 mb-0 ${
              isEvenIndex
                ? "text-center md:text-left"
                : "text-center md:text-right"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
      <div
        className={`col-span-1 md:col-span-1 ${
          isEvenIndex
            ? "order-1 md:order-1 md:col-start-1"
            : "order-2 md:order-2 md:col-start-2"
        } mt-6 md:mt-0`}
      >
        <div className="flex justify-center">
          {loading ? (
            <SkeletonImage />
          ) : (
            <img
              src={image}
              alt={title}
              className="max-w-full h-auto rounded-2xl"
            />
          )}
        </div>
      </div>
    </div>
  );
};

StoryItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

const About = () => {
  return (
    <section className="ezy__about6 light py-14 md:py-24 text-secondary">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 justify-center text-center mb-12">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl md:text-[45px] leading-none font-bold mb-10 text-secondary/90">
              About
            </h2>
            <p className="text-xl opacity-80 mb-4">
              Welcome to TasteHub, where culinary creativity meets simplicity.
              At TasteHub, we're passionate about bringing you a curated
              collection of recipes that inspire and delight. Whether you're
              exploring new flavors or mastering old favorites, TasteHub is your
              trusted companion in the kitchen. Join our community of food
              lovers and embark on a journey of delicious discovery. From
              appetizers to desserts, our goal is to make every meal memorable
              and every cooking experience enjoyable. Let TasteHub be your go-to
              resource for culinary inspiration and kitchen confidence.
            </p>
          </div>
        </div>

        {stories.map((item, index) => (
          <div key={index} className="col-span-1 md:col-span-1">
            <StoryItem item={item} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
