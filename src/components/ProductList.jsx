import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { gridView, filteredProducts } = useFilterContext();

  if (filteredProducts.length <= 0) {
    return <h5>Sorry, No Products matched your Search...!</h5>;
  }

  if (!gridView) return <ListView products={filteredProducts} />;

  return <GridView products={filteredProducts} />;
};

export default ProductList;
