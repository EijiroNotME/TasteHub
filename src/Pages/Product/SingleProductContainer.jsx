import React from "react";
import { useParams } from "react-router-dom";
import items from "../../../public/Data/Items";
import SingleProduct from "./SingleProduct.jsx";

const SingleProductContainer = () => {
  let { id } = useParams();
  // Assuming items is an array containing all recipes
  const recipe = items.find((item) => item._id === id);

  return <SingleProduct recipe={recipe} />;
};

export default SingleProductContainer;
