import { ADD_TO_CART, REMOVE_PRODUCT, SELECTED_PRODUCT } from "../constant";

const initialState = {
  cartItems: [],
  selectProduct: "",
};

export const productReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cartItems: [...state.cartItems, action.payload] };

    case SELECTED_PRODUCT:
      return { ...state, selectProduct: action.payload.product };
    case REMOVE_PRODUCT:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
