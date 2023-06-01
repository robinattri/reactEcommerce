import axios from "axios";
import {
  ADD_TO_CART,
  FILTERED_DATA,
  GET_PRODUCTLIST,
  REMOVE_PRODUCT,
  SELECTED_PRODUCT,
} from "./constant";

export const getProducts = (products) => {
  return {
    type: GET_PRODUCTLIST,
    payload: products,
  };
};

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};
export const selectedProduct = (product) => {
  return {
    type: SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeProduct = (id) => {
  return {
    type: REMOVE_PRODUCT,
    payload: id,
  };
};
export const filterData = (data) => {
  return {
    type: FILTERED_DATA,
    payload: data,
  };
};

export const getAPIData = () => (dispatch) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      dispatch({
        type: GET_PRODUCTLIST,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_PRODUCTLIST,
        payload: {
          data: null,
          err,
        },
      });
      console.log(err, "error");
    });
};
