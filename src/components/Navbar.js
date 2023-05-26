import React from "react";
import { BsBasket3 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
const cartItem = useSelector((state) => state.allproduct.cartItems);
  // console.log(cartItem, "cartItemddd");
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">Product hub</Link>
        <form className="d-flex cartIcon">
          <Link to="/cart">
            <BsBasket3 />
          </Link>
            <span>{cartItem.length}</span>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
