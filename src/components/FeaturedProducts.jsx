import React from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import { Wrapper as FeaturedProductsContainer } from "../styled-components/FeaturedProducts.styles";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";

const FeaturedProducts = () => {
  const { productsLoading, productsError, featuredProducts } =
    useProductsContext();

  if (productsLoading) return <Loading />;

  if (productsError) return <Error />;

  return (
    <FeaturedProductsContainer className="section">
      <div className="title">
        <h2>Featured Products</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {featuredProducts.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
      <Link to="/products" className="btn">
        All Products
      </Link>
    </FeaturedProductsContainer>
  );
};

export default FeaturedProducts;
