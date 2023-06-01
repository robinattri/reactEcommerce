import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getProducts } from "../redux/actions";
import { Link } from "react-router-dom";

const ProductList = () => {
const dispatch =useDispatch();
const filteredData = useSelector((state) => state.allproduct.filterData);
console.log(filteredData, "filteredData");
const products = useSelector((state) => state.allproduct.productList);
console.log(products, "products");
 
// const getData=()=>{
// axios.get("https://fakestoreapi.com/products")
// .then((res)=>{
//   dispatch(getProducts(res.data));
// }
// ).catch((err)=>{
//   console.log(err,"error")
// })
// } 
// useEffect(()=>{
//   getData();
// },[])

  return (
    <div className="">
      {/* <Navbar /> */}

      <div className="productList">
        <div className="container">
          <h2>Products</h2>
          <div className="row">
            {products.map((item, index) => {
              const {id} = item;
              return (
                <div className="col-12 col-md-3" key={index}>
                  <div className="card p-2">
                    <div className="cardBox text-align-center">
                      <span>{item.category}</span>
                      <div className="productImg">
                        <img src={item.image} />
                      </div>
                      <div className="productList">
                        <div className="productName">{item.title}</div>
                        <div className="productPrice">{item.price}</div>
                        <div className="btns d-flex justify-content-between align-content-center">
                          <Link
                            to={`/productDetail/${id}`}
                            className="btn btn-primary"
                          >
                            View
                          </Link>
                          <button
                            className="btn viewBtn"
                            onClick={() => dispatch(addToCart(item))}
                          >
                            add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
