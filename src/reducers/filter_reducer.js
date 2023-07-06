import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions';
import { products_url } from '../utils/constants';

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    const maxPrice = Math.max(...action.payload.map(prod => prod.price));

    return {
      ...state,
      allProducts: [...action.payload],
      filteredProducts: [...action.payload],
      filters: {
        ...state.filters,
        maxPrice: maxPrice,
        price: maxPrice
      }
    };
  }

  if (action.type === SET_LISTVIEW) {
    return {
      ...state,
      gridView: false
    };
  }

  if (action.type === SET_GRIDVIEW) {
    return {
      ...state,
      gridView: true
    };
  }

  if (action.type === UPDATE_SORT) {
    return {
      ...state,
      sort: action.payload,
    };
  }

  if (action.type === SORT_PRODUCTS) {
    const { sort, filteredProducts } = state;

    let tempProd = [...filteredProducts];

    if (sort === 'price-lowest') {
      tempProd = tempProd.sort((a, b) => a.price - b.price);
    }

    if (sort === 'price-highest') {
      tempProd = tempProd.sort((a, b) => b.price - a.price);
    }

    if (sort === 'name-a') {
      tempProd = tempProd.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sort === 'name-z') {
      tempProd = tempProd.sort((a, b) => b.name.localeCompare(a.name));
    }

    return {
      ...state,
      filteredProducts: tempProd
    };
  }

  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;

    return {
      ...state,
      filters: { ...state.filters, [name]: value }
    };
  }

  if (action.type === FILTER_PRODUCTS) {
    const { allProducts } = state;
    const { text, category, company, color, price, shipping } = state.filters;

    let tempProd = [...allProducts];

    if (text) {
      tempProd = tempProd.filter(prod => {
        return prod.name.toLowerCase().includes(text);
      })
    }

    if (category && category !== 'all') {
      tempProd = tempProd.filter(prod => {
        return prod.category === category;
      })
    }

    if (company && company !== 'all') {
      tempProd = tempProd.filter(prod => {
        return prod.company === company;
      })
    }

    if (color && color !== 'all') {
      tempProd = tempProd.filter(prod => {
        return prod.colors.includes(color);
      })
    }

    tempProd = tempProd.filter(prod => prod.price <= price);

    if (shipping) {
      tempProd = tempProd.filter(prod => prod.shipping === true);
    }

    return {
      ...state,
      filteredProducts: tempProd
    };
  }

  if (action.type === CLEAR_FILTERS) {

    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        category: "all",
        company: "all",
        color: "all",
        price: state.filters.maxPrice,
        shipping: false,
      },
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
