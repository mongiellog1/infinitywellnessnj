import React from "react";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const MandalaGallery = ({ mandalaImages }) => {
  const items = Object.keys(mandalaImages).map((key) => ({
    original: mandalaImages[key].childImageSharp.fluid.src,
    thumbnail: mandalaImages[key].childImageSharp.fluid.src
  }));
  return (
    <ImageGallery
      items={items}
      startIndex={3}
    />
  )
};

export default MandalaGallery;
