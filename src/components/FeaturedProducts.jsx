import React from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import { Wrapper as FeaturedProductsContainer } from "../styled-components/FeaturedProducts.styles";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";

const FeaturedProducts = () => {
  return <h4>featured products</h4>;
};

export default FeaturedProducts;
