import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;
    const tempItem = state.cart.find(item => item.id === id + color)

    console.log("atate: ", state);
    console.log(action.payload);

    if (tempItem) {
      const tempCart = state.cart.map(item => {
        if (item.id === id + color) {
          let newAmount = item.amount + amount;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount }
        } else {
          return item;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock
      }
      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  if (action.type === CLEAR_CART) {
    return { ...state }
  }

  if (action.type === COUNT_CART_TOTALS) {
    return { ...state }
  }

  if (action.type === REMOVE_CART_ITEM) {
    return { ...state }
  }

  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    return { ...state }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer
