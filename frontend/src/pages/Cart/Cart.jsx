import React, { useContext, useEffect } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LoginPopUP } from "../../components/LoginPopup/LoginPopUP";
// import { Table } from 're';
export const Cart = () => {
  const {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalAmount,
    url,
    token,
  } = useContext(StoreContext);
  const [showLogin, setShowLogin] = useState(false);

  const navigate = useNavigate();

  const [isCartAvailable, setIsCartAvailable] = useState(false);
  // const isCartAvailable = Object.keys(cartItems).length > 0;

  useEffect(() => {
    // Check if there are any items in the cart
    const hasItems = Object.keys(cartItems).some((key) => cartItems[key] > 0);
    setIsCartAvailable(hasItems);
  }, [cartItems]);

  const handleEvent = () => {
    if (token) {
      navigate("/order");
    } else {
      setShowLogin(true);
    }
  };
  console.log(cartItems);
  return (
    <>
      <div className="cart">
        {showLogin && <LoginPopUP setShowLogin={setShowLogin} />}
        {isCartAvailable ? (
          <table className="cart-items">
            <thead>
              <tr className="cart-items-title">
                <p>Items</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p></p>
              </tr>
            </thead>
            <br />
            <hr />
            {food_list.map((item, index) => {
              if (cartItems[item._id] > 0) {
                return (
                  <>
                    <tbody>
                      <tr className="cart-items-title cart-items-item">
                        <p>
                          <img src={item.image[0]} alt="" />
                        </p>
                        <p>{item.name}</p>
                        <p>₹{item.price}</p>
                        <p>{cartItems[item._id]}</p>
                        <p>{item.price * cartItems[item._id]}</p>
                        <p>
                          <div className="slider-container">
                            <button
                              className="bg-success"
                              onClick={() => addToCart(item._id)}
                            >
                              Add
                            </button>

                            <button
                              className="bg-danger"
                              onClick={() => removeFromCart(item._id)}
                            >
                              Remove
                            </button>
                          </div>
                          {/* <p
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "150px",
                      }}
                    >
                      <p
                        onClick={() => addToCart(item._id)}
                        className="AddCart"
                      >
                        Remove
                      </p>
                      <p
                        onClick={() => removeFromCart(item._id)}
                        className="cross"
                      >
                        Remove
                      </p>
                      </p> */}
                        </p>
                      </tr>
                    </tbody>
                    <hr />
                  </>
                );
              }
            })}
          </table>
        ) : (
          <>
            <div style={{textAlign:"center"}}>No data Found</div>
          </>
        )}
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>cart total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>₹{getTotalAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>₹{getTotalAmount() === 0 ? 0 : 80}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>total</b>
                <b>₹{getTotalAmount() === 0 ? 0 : getTotalAmount() + 80}</b>
              </div>
            </div>
            <button onClick={handleEvent}>proceed to checkout</button>
          </div>
          <div className="cart-promocode">
            <div>
              <p>if you have promocode, enter here</p>
              <div className="cart-promocode-input">
                <input type="text" placeholder="promocode" />
                <button>submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
