import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantityInCart, increaseQuantityInCart } from "../redux/actions/cartActions";
import "../styles/components/Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  let cartProducts = useSelector((state) => state.cart.productsInCart);


  const calculateTotalPrice = () => {
    let total = 0;
    cartProducts.forEach((product) => {
      total += product.price * product.quantity;
    });
    return total;
  };

  return (
    <>
      <div className="cart">
        {cartProducts.length > 0 ?
          cartProducts.map((product) => (
            <div key={product.id}>
              <div className="products">
                <div className="info">
                  <p className="info-name">{product.name}</p>
                  <p className="info-price">${product.price}</p>
                </div>
                <div className="quantity-field">
                  <button
                    className="decrease"
                    onClick={() => dispatch(decreaseQuantityInCart(product.id))}
                  >
                    -
                  </button>
                  <span className="quantity">
                    {product.quantity}
                  </span>
                  <button
                    className="increase"
                    onClick={() => dispatch(increaseQuantityInCart(product.id))}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )) :
          <p className="empty">No Products in Cart</p>}
      </div>
      <div className="price-box">
        <h2 className="price-title">
          Total Price:{" "}
          <span className="price-value">
            ${calculateTotalPrice()}
          </span>
        </h2>
        <Link to="/payment">
          <button className="checkout">
            Checkout
          </button>
        </Link>
      </div>
    </>
  );
};

export default Cart;
