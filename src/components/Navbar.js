import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsBasket3 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filterData } from "../redux/actions";
import { Button } from "bootstrap";
import { getAPIData } from "../redux/actions";
const Navbar = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.allproduct.cartItems);
  // console.log(cartItem, "cartItemddd");
  const getData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  const [products, setProducts] = useState([]);
  const [productsItem, setProductsItem] = useState(products);
  const [searchitem, setSearchItem] = useState("");

  const onSearchPanel = (e) => {
    const val = e.target.value;
    dispatch(filterData(val));
    setSearchItem(val);
    // if (val === "") {
    //   setProductsItem(products);
    // } else {
    //   let filteredData = products.filter(
    //     (item) =>
    //       item.title.toLowerCase().includes(val.toLowerCase()) ||
    //       item.category.toLowerCase().includes(val.toLowerCase())
    //   );
    //   setProductsItem(filteredData);
    //   dispatch(filterData(filteredData));
    // }
  };

  useEffect(() => {
    getData();
     dispatch(getAPIData());
  }, []);

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Product hub
        </Link>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Searchbar"
            onChange={(e) => onSearchPanel(e)}
          />
          <button>Search</button>
        </form>
        <div className="d-flex cartIcon">
          <Link to="/cart">
            <BsBasket3 />
          </Link>
          <span>{cartItem.length}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
