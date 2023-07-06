import React from "react";
import { Wrapper as FilterContainer } from "../styled-components/Filters.styles";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const {
    allProducts,
    updateFilter,
    clearFilter,
    filters: {
      text,
      category,
      company,
      color,
      minPrice,
      maxPrice,
      price,
      shipping,
    },
  } = useFilterContext();

  const categories = getUniqueValues(allProducts, "category");
  const companies = getUniqueValues(allProducts, "company");
  const colors = getUniqueValues(allProducts, "colors");

  return (
    <FilterContainer>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="Search..."
              className="search-input"
              value={text || ""}
              onChange={updateFilter}
            />
          </div>
          <div className="form-control">
            <h5>Category</h5>
            <div>
              {categories.map((cat, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilter}
                    name="category"
                    type="button"
                    className={`${
                      category === cat.toLowerCase() ? "active" : null
                    }`}>
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="form-control">
            <h5>Company</h5>
            <select
              name="company"
              id="company"
              value={company}
              onChange={updateFilter}>
              {companies.map((company, index) => {
                return (
                  <option value={company} key={index}>
                    {company}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-control">
            <h5>Colors</h5>
            <div className="colors">
              {colors.map((colr, index) => {
                if (colr === "all") {
                  return (
                    <button
                      type="button"
                      key={index}
                      name="color"
                      className={`${
                        color === "all" ? "all-btn active" : "all-btn"
                      }`}
                      data-color="all"
                      onClick={updateFilter}>
                      all
                    </button>
                  );
                }

                return (
                  <button
                    type="button"
                    key={index}
                    name="color"
                    style={{ background: colr }}
                    className={`${
                      color === colr ? "color-btn active" : "color-btn"
                    }`}
                    data-color={colr}
                    onClick={updateFilter}>
                    {color === colr ? <FaCheck /> : null}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="form-control">
            <h5>Price</h5>
            <p className="price">$0 - {formatPrice(maxPrice)}</p>
            <input
              type="range"
              name="price"
              id="price"
              onChange={updateFilter}
              min={minPrice}
              max={maxPrice}
              value={price}
            />
          </div>
          <div className="form-control shipping">
            <label htmlFor="shipping">Free Shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              onChange={updateFilter}
              checked={shipping}
            />
          </div>
        </form>
        <button type="button" className="clear-btn" onClick={clearFilter}>
          Clear Filters
        </button>
      </div>
    </FilterContainer>
  );
};

export default Filters;
