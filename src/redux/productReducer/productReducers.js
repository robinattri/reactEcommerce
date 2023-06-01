import { ADD_TO_CART, FILTERED_DATA, GET_PRODUCTLIST, REMOVE_PRODUCT, SELECTED_PRODUCT } from "../constant";

const initialState = {
  productList:[],
  cartItems: [],
  selectProduct: "",
  filterData:[],
};

export const productReducers = (state = initialState, action) => {
  switch (action.type) {
     case GET_PRODUCTLIST:
      return { ...state, productList: action.payload };
    case ADD_TO_CART:
      return { ...state, cartItems: [...state.cartItems, action.payload] };

    case SELECTED_PRODUCT:
      return { ...state, selectProduct: action.payload.product };
    case REMOVE_PRODUCT:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    case FILTERED_DATA:
      return {
        ...state,
        filterData: action.payload,
      };
    default:
      return state;
  }
};
