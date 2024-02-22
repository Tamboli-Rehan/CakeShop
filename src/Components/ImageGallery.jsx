import React from "react";
import imageGallery from "../data/image-gallery";

const ImageGallery = () => {
  return (
    <>
      {[...imageGallery].map((image) => {
        return (
          <figure key={image.id}>
            <img src={image.path} alt={image.alt} />
          </figure>
        );
      })}
    </>
  );
};

export default ImageGallery;
