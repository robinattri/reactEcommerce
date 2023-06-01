import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductList from "./components/productList";
import {
  BrowserRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import ProductDetails from "./components/productDetails";
import Cart from "./components/Cart";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/Navbar";
import Login from "./components/login";
import Signup from "./components/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductList />,
  },
  {
    path: "/productDetail/:id",
    element: <ProductDetails />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

const createRoute = (path, element, exact = true) => ({ path, element, exact });

const rout = [
  createRoute("/", <ProductList />),
  createRoute("/productDetail/:id", <ProductDetails />),
  createRoute("/cart", <Cart />),
  createRoute("/login", <Login />),
  createRoute("/signup", <Signup />),
  // {
  //   path: "/",
  //   element: <ProductList />,
  // },
  // {
  //   path: "/productDetail/:id",
  //   element: <ProductDetails />,
  // },
  // {
  //   path: "/cart",
  //   element: <Cart />,
  // },
];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {rout.map((rou, index) => (
            <Route element={rou.element} path={rou.path} key={index} />
          ))}
        </Routes>
      </BrowserRouter>
      {/* <RouterProvider router={router} /> */}
    </Provider>
  </React.StrictMode>
);

