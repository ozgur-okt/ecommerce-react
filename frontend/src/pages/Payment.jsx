import React, { useState, useRef } from 'react';
import Card from 'react-credit-cards';
import '../styles/pages/Payment.css';
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from '../utils/paymentCheck';
import 'react-credit-cards/es/styles-compiled.css';
import { useSelector } from 'react-redux';

const Payment = () => {
  const productsInCart = useSelector((state) => state.cart.productsInCart);
  const totalPrice = productsInCart.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
  
  const [formData, setFormData] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: ""
  });

  const formRef = useRef(null);

  const handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      setFormData((prevData) => ({ ...prevData, issuer }));
    }
  };

  const handleInputFocus = ({ target }) => {
    setFormData((prevData) => ({ ...prevData, focused: target.name }));
  };

  const handleInputChange = ({ target }) => {
    let { name, value } = target;

    if (name === "number") {
      value = formatCreditCardNumber(value);
    } else if (name === "expiry") {
      value = formatExpirationDate(value);
    } else if (name === "cvc") {
      value = formatCVC(value);
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("You have finished payment!");
    formRef.current.reset();
  };

  const { name, number, expiry, cvc, focused, issuer } = formData;

  return (
    <div key="Payment">
      <div className="payment">
        <h1>Enter your <strong>${totalPrice}</strong> payment details</h1>
        <h4>please input your information below</h4>
        <div className="card-details">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <small>Name on card:</small>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                pattern="[a-zA-Z-]+"
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
            <div className="form-group">
              <small>Card Number:</small>
              <input
                type="tel"
                name="number"
                className="form-control"
                placeholder="Card Number"
                pattern="[\d ]{16,22}"
                maxLength="19"
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
            <div className="form-group">
              <small>Expiration Date:</small>
              <input
                type="tel"
                name="expiry"
                className="form-control"
                placeholder="Valid Thru"
                pattern="\d\d/\d\d"
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
            <div className="form-group">
              <small>CVC:</small>
              <input
                type="tel"
                name="cvc"
                className="form-control"
                placeholder="CVC"
                pattern="\d{3}"
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
            <input type="hidden" name="issuer" value={issuer} />
            <div className="form-actions">
              <button>Submit</button>
            </div>
          </form>
          <div className="credit-card">
            <Card
              number={number}
              name={name}
              expiry={expiry}
              cvc={cvc}
              focused={focused}
              callback={handleCallback}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
