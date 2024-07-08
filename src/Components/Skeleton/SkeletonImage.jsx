import React from "react";
import LoadingImage from "../../../public/loadingImage.png"; // Adjust the path as needed

const SkeletonImage = () => {
  return (
    <div className="w-full h-full bg-gray-300 animate-pulse rounded-2xl">
      <img
        src={LoadingImage}
        alt="Loading"
        className="w-full h-full object-cover rounded-2xl opacity-50"
      />
    </div>
  );
};

export default SkeletonImage;
