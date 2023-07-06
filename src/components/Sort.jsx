import React from "react";
import { useFilterContext } from "../context/filter_context";
import { BsFillGridFill, BsFillNutFill, BsList } from "react-icons/bs";
import { Wrapper as SortContainer } from "../styled-components/Sort.styles";

const Sort = () => {
  const {
    gridView,
    filteredProducts,
    setGridView,
    setListiew,
    sort,
    updateSort,
  } = useFilterContext();

  return (
    <SortContainer>
      <div className="btn-container">
        <button
          type="button"
          className={`${gridView ? "active" : null}`}
          onClick={setGridView}>
          <BsFillGridFill />
        </button>
        <button
          type="button"
          className={`${!gridView ? "active" : null}`}
          onClick={setListiew}>
          <BsList />
        </button>
      </div>
      <p>{filteredProducts.length} products found</p>
      <hr />
      <form>
        <label htmlFor="sort">Sort By</label>
        <select
          name="sort"
          id="sort"
          className="sort-input"
          value={sort}
          onChange={updateSort}>
          <option value="price-lowest">Price (Low to High)</option>
          <option value="price-highest">Price (High to Low)</option>
          <option value="name-a">Name (A to Z)</option>
          <option value="name-z">Name (Z to A)</option>
        </select>
      </form>
    </SortContainer>
  );
};

export default Sort;
