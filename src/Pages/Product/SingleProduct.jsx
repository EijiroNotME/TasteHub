import React, { useEffect } from "react";
import Page404 from "../../Error/Page404/Page404";

const SingleProduct = ({ recipe }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!recipe) {
    return <Page404 />;
  }

  // Split the instructions string into an array
  const instructionsArray = recipe.instructions
    .split(". ")
    .map((instruction, index) => {
      // Add the step number back to the instruction
      if (instruction.trim() !== "") {
        return `${index + 1}. ${instruction.trim()}`;
      }
      return null;
    })
    .filter(Boolean); // Remove any null values

  return (
    <div className="mx-auto my-10 bg-primary rounded-lg sm:max-w-[100%] md:max-w-[70%]">
      <div className="mb-8 flex ">
        <img
          src={recipe.thumbnail_image}
          alt={recipe.name}
          className="rounded-t-lg shadow-lg"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>

      <div className="m-10 pb-5">
        <h1 className="text-3xl sm:text-5xl font-semibold text-secondary mb-8">
          {recipe.name}
        </h1>
        {/* Recipe Details */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-secondary mb-4">Details</h2>
          <p className="text-secondary">{recipe.details}</p>
        </div>

        {/* Ingredients */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-secondary mb-4">
            Ingredients
          </h2>
          <ul className="list-disc text-secondary pl-6">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient.name} - {ingredient.quantity}
                {ingredient.optional && " (optional)"}
              </li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-secondary mb-4">
            Instructions
          </h2>
          <ol className="text-secondary pl-6">
            {instructionsArray.map((step, index) => (
              <li key={index} className="mb-2">
                {step}
              </li>
            ))}
          </ol>
        </div>

        {/* Additional Information */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-secondary mb-4">
            Additional Information
          </h2>
          <ul className="list-disc text-secondary pl-6">
            <li>
              <span className="font-bold">Prep Time:</span>
              {""}
              {recipe.more.prep_time}
            </li>
            <li>
              <span className="font-bold">Cook Time:</span>{" "}
              {recipe.more.cook_time}
            </li>
            <li>
              <span className="font-bold">Servings:</span>{" "}
              {recipe.more.servings}
            </li>
            <li>
              <span className="font-bold">Difficulty:</span>{" "}
              {recipe.more.difficulty}
            </li>
            <li>
              <span className="font-bold">Source:</span>
              {recipe.more.source}
            </li>
          </ul>
        </div>
        <hr />
        {/* Comments */}
        <div className="mb-8  mt-4">
          <h2 className="text-xl font-semibold text-secondary mb-4">
            Comments
          </h2>
          {recipe.comments.map((comment, index) => (
            <div key={index} className="mb-4">
              <p className="text-secondary">
                <span className="text-accent font-medium">
                  {comment.user}:{" "}
                </span>
                {comment.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
