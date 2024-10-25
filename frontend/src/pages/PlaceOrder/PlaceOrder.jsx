import React, { useContext, useEffect, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../Context/StoreContext';
import { allowedZipCodes } from './allowedZipCodes'; // Ensure this exports an array of allowed zip codes
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const PlaceOrder = () => {
  const { getTotalAmount, token, food_list, cartItems, url } = useContext(StoreContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    phone: "",
    country: ""
  });
  const [zipCodeError, setZipCodeError] = useState("");

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));

    if (name === 'zipcode') {
      setZipCodeError(""); // Clear error on input change
    }
  };

  const validateZipCode = (zipcode) => {
    if (!allowedZipCodes.includes(zipcode)) {
      setZipCodeError("We are currently only available in Nagpur City Division.");
      return false;
    }
    return true;
  };

  const placeOrder = async (event) => {
    event.preventDefault();

    if (!validateZipCode(data.zipcode)) {
      return; // Prevent further processing if zip code is invalid
    }

    const orderItems = food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        return { ...item, quantity: cartItems[item._id] };
      }
      return null;
    }).filter(Boolean);

    const orderData = {
      address: data,
      items: orderItems,
      amount: getTotalAmount() + 80 // Delivery fee set to 80
    };

    try {
      const response = await axios.post(`${url}/api/order/place`, orderData, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url);
      } else {
        alert("Error placing order: " + response.data.message);
      }
    } catch (error) {
      console.error("Error placing order:", error.response ? error.response.data : error);
      alert("There was an error placing your order. Please check your details and try again.");
    }
  };

  useEffect(() => {
    if (!token || getTotalAmount() === 0) {
      navigate("/cart");
    }
  }, [token, getTotalAmount, navigate]);

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input
            required
            name="firstName"
            onChange={onChangeHandler}
            value={data.firstName}
            type="text"
            placeholder="First Name"
          />
          <input
            required
            name="lastName"
            onChange={onChangeHandler}
            value={data.lastName}
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          required
          name="email"
          onChange={onChangeHandler}
          value={data.email}
          type="email"
          placeholder="Email Address"
        />
        <input
          required
          name="street"
          onChange={onChangeHandler}
          value={data.street}
          type="text"
          placeholder="Street"
        />
        <div className="multi-fields">
          <input
            required
            name="city"
            onChange={onChangeHandler}
            value={data.city}
            type="text"
            placeholder="City"
          />
          <input
            required
            name="state"
            onChange={onChangeHandler}
            value={data.state}
            type="text"
            placeholder="State"
          />
        </div>
        <div className="multi-fields">
          <input
            required
            name="zipcode"
            onChange={onChangeHandler}
            value={data.zipcode}
            type="text"
            placeholder="Zip Code"
          />
          <input
            required
            name="country"
            onChange={onChangeHandler}
            value={data.country}
            type="text"
            placeholder="Country"
          />
        </div>
        {zipCodeError && <p className="error-message">{zipCodeError}</p>}
        <input
          required
          name="phone"
          onChange={onChangeHandler}
          value={data.phone}
          type="tel"
          placeholder="Phone"
        />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹80</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{getTotalAmount() + 80}</b>
            </div>
          </div>
          <button type='submit'>Proceed to Payment</button>
        </div>
      </div>
    </form>
  );
};
