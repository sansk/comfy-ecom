import React from "react";
import { Wrapper as ProductsContainer } from "../styled-components/ProductsPage.styles";
import { Filters, ProductList, Sort, PageHero } from "../components";

const ProductsPage = () => {
  return (
    <main>
      <PageHero title="Products" />
      <ProductsContainer className="page">
        <div className="section-center products">
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </ProductsContainer>
    </main>
  );
};

export default ProductsPage;
