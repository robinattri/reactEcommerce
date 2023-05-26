import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../redux/actions";
import Navbar from "./Navbar";
const Cart = () => {
  const cartItem = useSelector((state) => state.allproduct.cartItems);

const carPanel = cartItem.filter(
  (item, index) => cartItem.indexOf(item) === index
);

const [finalCart,setFinalCart]= useState([]);
console.log(finalCart,"finalcart")

useEffect(()=>{
  setFinalCart(
    carPanel.map((items) => ({
      ...items,
      qty: 1,
      totalPrice: items.price,
    }))
  );
},[cartItem]);


const increment=(index)=>{
  finalCart[index].qty = finalCart[index].qty + 1;
   finalCart[index].totalPrice = finalCart[index].price * finalCart[index].qty;
   setFinalCart([...finalCart]);
}
const decrement = (index) => {
  finalCart[index].qty = finalCart[index].qty - 1;
  finalCart[index].totalPrice = finalCart[index].price * finalCart[index].qty;
  setFinalCart([...finalCart]);
};


let subTotal = 0;
finalCart.map((item)=>{
  subTotal += item.totalPrice;
})

  const dispatch = useDispatch();

  // const [count, setCount] = useState(0);

  

  return (
    <>
    <Navbar/>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            <h1>Cart</h1>

            {finalCart?.map((items, index) => {
              const { image, title, price, id } = items;
              return (
                <div className="card p-2 mb-2" key={index}>
                  <div className="carDpanel d-flex justify-content-between align-items-center g-4">
                    <img src={image} style={{ maxWidth: "100px" }} />
                    <div>
                      <h5>{title}</h5>
                      <h6>
                        Price:
                        {price}
                      </h6>
                      <div className="qtyBox">
                        <button
                          className="btn"
                          disabled={items.qty == 1}
                          onClick={() => decrement(index)}
                        >
                          -
                        </button>
                        <div className="countBox">{items.qty}</div>
                        <button
                          className="btn"
                          onClick={() => increment(index)}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(removeProduct(id))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-md-4">
            <div className="subtotalBox p-3">
              <div className="d-flex flex-column">
                <span>
                  <h6>Subtotal</h6>
                </span>
                <span className="text-danger">
                  <h2>{subTotal.toFixed(2)}</h2>
                </span>
              </div>

              <button className="btn btn-outline-success ">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
