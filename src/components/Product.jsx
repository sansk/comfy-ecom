import React from "react";
import { Wrapper as ProductContainer } from "../styled-components/Product.styles";
import { formatPrice } from "../utils/helpers";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ image, name, price, id }) => {
  return (
    <ProductContainer>
      <div className="container">
        <img src={image} alt={name} />
        <Link to={`/products/${id}`} className="link">
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
    </ProductContainer>
  );
};

export default Product;
