import React, { useState } from "react";
import { Wrapper as ProductImageContainer } from "../styled-components/ProductImages.styles";

const ProductImages = ({ images = [{ url: "" }] }) => {
  const [main, setMain] = useState(images[0]);

  return (
    <ProductImageContainer>
      <img src={main.url} alt="Main Image" className="main" />
      <div className="gallery">
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              alt={image.filename}
              key={index}
              onClick={() => setMain(images[index])}
              className={`${main.url === image.url ? "active" : null}`}
            />
          );
        })}
      </div>
    </ProductImageContainer>
  );
};

export default ProductImages;
