import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductList from "./components/productList";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductDetails from "./components/productDetails";
import Cart from "./components/Cart";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
 
 const router = createBrowserRouter([
   {
     path: "/",
     element: <ProductList  />,
   },
   {
     path: "/productDetail/:id",
     element: (
       <ProductDetails  />
     ),
   },
   {
     path: "/cart",
     element: <Cart />,
   },
 ]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

