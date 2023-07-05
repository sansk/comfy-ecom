import React from "react";
import { Wrapper as GridViewContainer } from "../styled-components/GridView.styles";
import Product from "./Product";

const GridView = ({products}) => {
  return <GridViewContainer>
    <div className="products-container">
      {products.map((product) =>{
        return <Product key={product.id} {...product} />
      })}
    </div>
  </GridViewContainer>;
};

export default GridView;
