
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import selectedProduct from "../redux/actions";
import Navbar from "./Navbar";

const ProductDetails = () => {
  const { id } = useParams();
  const [selProduct, setSelProduct] = useState("");

  const { image, category, description, price, title, } = selProduct;
 console.log(selProduct, "selected");
  

  const selectedProduct = () => {
   axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setSelProduct(res.data);
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };
 

  useEffect(() => {
    selectedProduct();
  }, []);

  return (
    <>
    <Navbar/>
      <div className="container ">
        <div className="row">
          <div className="col-md-6">
            <img src={image} className="productImage" />
          </div>
          <div className="col-md-6">
            <div className="productDetails">
              <div className="titleBox">
                <h2>{title}</h2>
                <h3>Price: {price}</h3>
                <p>{description}</p>
                <h5>{category}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
