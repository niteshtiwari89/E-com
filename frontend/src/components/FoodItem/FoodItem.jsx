// import { useContext } from 'react'
// import "./FoodItem.css";
// import { assets } from '../../assets/assets';
// import { StoreContext } from '../../Context/StoreContext';

// export const FoodItem = ({ id, name, price, description, image }) => {

//     const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext)

//     return (
//         <div className='food-item'>
//             <div className="food-item-img-container">
//                 <img src={url + "/images/" + image} alt="" className="food-item-image" />
//                 {!cartItems[id]
//                     ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
//                     : <div className='food-item-counter'>
//                         <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
//                         <p>{cartItems[id]}</p>
//                         <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />

//                     </div>
//                 }
//             </div>
//             <div className="food-item-info">
//                 <div className="food-item-name-rating">
//                     <p>{name}</p>
//                     <img src={assets.rating_starts} alt="" />
//                 </div>
//                 <p className="food-item-description">{description}</p>
//                 <p className="food-item-price">₹{price}</p>
//             </div>
//         </div>
//     )
// }

import { useContext, useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";
import Modal from "./ModalFood.jsx"; // Import the Modal component
import { Link } from "react-router-dom";

export const FoodItem = ({ id, name, price, description, images }) => {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);
  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent the link click from firing
    addToCart(id);
  };
  const handleRemoveFromCart = (e) => {
    e.stopPropagation(); // Prevent the link click from firing
    removeFromCart(id);
  };
 
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          src={`${images[0]}`}
          alt={name}
          className="food-item-image"
        />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={handleAddToCart}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={handleRemoveFromCart}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={(e) => {
                e.stopPropagation();
                addToCart(id);
              }}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <Link to={`/menu/product/${id}`}>
        <div className="food-item-info">
          <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
          </div>
          <p className="food-item-description">{description}</p>
          <p className="food-item-price">₹{price}</p>


          {/* <Link to={`/menu/product/${id}`}>
          <button>See More Details</button>
        </Link> */}
        </div>
      </Link>
    </div>
  );
};
