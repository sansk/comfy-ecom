import React, { useState } from "react";
import { Wrapper as ProductImageContainer } from "../styled-components/ProductImages.styles";

const ProductImages = ({ images = [] }) => {
  const [main, setMain] = useState(images[0]);

  return <ProductImageContainer>product images</ProductImageContainer>;
};

export default ProductImages;
