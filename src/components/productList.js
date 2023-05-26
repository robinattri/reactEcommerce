import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";
import { Link } from "react-router-dom";

const ProductList = () => {
const dispatch =useDispatch();


  const [products, setProducts] =useState([])
 
const getData=()=>{
axios.get("https://fakestoreapi.com/products")
.then((res)=>{
  setProducts(res.data);
  console.log(res.data, "products");
}
).catch((err)=>{
  console.log(err,"error")
})
} 

useEffect(()=>{
  getData();
},[])

  return (
    <div className="">
      <Navbar />

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
