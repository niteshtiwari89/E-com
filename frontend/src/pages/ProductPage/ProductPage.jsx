// // import { useState } from 'react';
// // import './ProductPage.css';
// // import { StoreContext } from '../../Context/StoreContext';
// // import { assets } from '../../assets/assets';

// // const ProductPage = () => {
// //   const [currentImage, setCurrentImage] = useState(0);
// //   const [quantity, setQuantity] = useState(1);
// //   const [selectedSize, setSelectedSize] = useState('8oz');
// //   const [activeTab, setActiveTab] = useState('usage');

// //   const images = [
// //     "/placeholder.svg?height=400&width=400&text=Ghee+Jar",
// //     "/placeholder.svg?height=400&width=400&text=Ghee+Texture",
// //     "/placeholder.svg?height=400&width=400&text=Ghee+Usage",
// //     "/placeholder.svg?height=400&width=400&text=Ghee+Packaging"
// //   ];

// //   const nextImage = () => setCurrentImage((currentImage + 1) % images.length);
// //   const prevImage = () => setCurrentImage((currentImage - 1 + images.length) % images.length);

// //   const incrementQuantity = () => setQuantity(prev => prev + 1);
// //   const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

// //   return (
// //     <div className="container">
// //       <div className="product-grid">
// //         <div className="image-container">
// //           <img src={images[currentImage]} alt={`Ghee product image ${currentImage + 1}`} className="product-image" />
// //           <button onClick={prevImage} className="nav-button left">{'<'}</button>
// //           <button onClick={nextImage} className="nav-button right">{'>'}</button>
// //           <div className="image-dots">
// //             {images.map((_, index) => (
// //               <span
// //                 key={index}
// //                 className={`dot ${index === currentImage ? 'active' : ''}`}
// //               />
// //             ))}
// //           </div>
// //         </div>

// //         <div className="product-info">
// //           <h1 className="product-title">Premium Organic Ghee</h1>
// //           <div className="product-rating">
// //             {'★'.repeat(4)}{'☆'.repeat(1)} <span className="review-count">(128 reviews)</span>
// //           </div>
// //           <p className="product-price">$19.99</p>
// //           <p className="product-description">
// //             Our Premium Organic Ghee is made from the finest grass-fed cow's milk.
// //             It's rich in nutrients, has a high smoke point, and adds a delicious buttery flavor to your dishes.
// //           </p>

// //           <div className="size-selector">
// //             <h3>Size</h3>
// //             <div className="size-options">
// //               {['8oz', '16oz', '32oz'].map((size) => (
// //                 <button
// //                   key={size}
// //                   onClick={() => setSelectedSize(size)}
// //                   className={`size-option ${selectedSize === size ? 'selected' : ''}`}
// //                 >
// //                   {size}
// //                 </button>
// //               ))}
// //             </div>
// //           </div>

// //           {/* <div className="add-to-cart-section">
// //             <div className="quantity-selector">
// //               <button onClick={decrementQuantity} className="quantity-button">-</button>
// //               <span className="quantity-display">{quantity}</span>
// //               <button onClick={incrementQuantity} className="quantity-button">+</button>
// //             </div>
// //             <button className="add-to-cart-button">Add to Cart</button>
// //           </div> */}

// // {/* <div className="product-cart-container">
// //       <div className="food-item-img-container">
// //         <img src={`${url}/images/${image}`} alt="" className="food-item-image" />
// //       </div> */}
// //       <div className="add-to-cart-section">
// //         {quantity === 0 ? (
// //           <button className="add-to-cart-button" onClick={incrementQuantity}>Add to Cart</button>
// //         ) : (
// //           <div className="quantity-selector">
// //             <button onClick={decrementQuantity} className="quantity-button">
// //               <img src={assets.remove_icon_red} alt="Remove" />
// //             </button>
// //             <span className="quantity-display">{quantity}</span>
// //             <button onClick={incrementQuantity} className="quantity-button">
// //               <img src={assets.add_icon_green} alt="Add" />
// //             </button>
// //           </div>
// //         )}
// //       </div>

// //           {/* <div className="benefits-section">
// //             <h3>Key Benefits</h3>
// //             <ul>
// //               <li>High smoke point (485°F) - ideal for high-heat cooking</li>
// //               <li>Rich in vitamins A, E, and K</li>
// //               <li>Lactose and casein-free</li>
// //               <li>Supports digestive health</li>
// //             </ul>
// //           </div> */}
// //         </div>
// //       </div>

// //       {/* <div className="tabs-container">
// //         <div className="tabs-list">
// //           <button
// //             onClick={() => setActiveTab('usage')}
// //             className={`tab ${activeTab === 'usage' ? 'active' : ''}`}
// //           >
// //             Usage Suggestions
// //           </button>
// //           <button
// //             onClick={() => setActiveTab('nutrition')}
// //             className={`tab ${activeTab === 'nutrition' ? 'active' : ''}`}
// //           >
// //             Nutritional Info
// //           </button>
// //         </div>
// //         <div className="tab-content">
// //           {activeTab === 'usage' && (
// //             <div>
// //               <h3>How to Use Our Ghee:</h3>
// //               <ul>
// //                 <li>Spread on toast or crackers for a rich, buttery flavor</li>
// //                 <li>Use for sautéing vegetables or frying eggs</li>
// //                 <li>Add to coffee or tea for a creamy boost (bulletproof coffee)</li>
// //                 <li>Use in baking as a substitute for butter or oil</li>
// //                 <li>Drizzle over popcorn for a delicious snack</li>
// //               </ul>
// //             </div>
// //           )}
// //           {activeTab === 'nutrition' && (
// //             <div>
// //               <h3>Nutritional Information (per 1 tbsp/15ml):</h3>
// //               <ul>
// //                 <li>Calories: 130</li>
// //                 <li>Total Fat: 14g</li>
// //                 <li>Saturated Fat: 9g</li>
// //                 <li>Trans Fat: 0g</li>
// //                 <li>Cholesterol: 35mg</li>
// //                 <li>Sodium: 0mg</li>
// //                 <li>Total Carbohydrate: 0g</li>
// //                 <li>Protein: 0g</li>
// //               </ul>
// //             </div>
// //           )}
// //         </div>
// //       </div> */}

// //     </div>
// //   );
// // }
// // export default ProductPage;

// import { useParams } from 'react-router-dom';
// import { useContext, useState, useEffect } from 'react';
// import './ProductPage.css';
// import { StoreContext } from '../../Context/StoreContext';
// import { assets } from '../../assets/assets';

// const ProductPage = () => {
//   const { id } = useParams(); // Get product ID from URL
//   const { food_list, addToCart, cartItems } = useContext(StoreContext); // Assuming you have a list of products
//   const product = food_list.find(p => p.id === parseInt(id)); // Find the product by ID

//   const [currentImage, setCurrentImage] = useState(0);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedSize, setSelectedSize] = useState('8oz');

//   // Handle case where product is not found
//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   const images = product.images; // Assuming your product has an `images` property

//   const nextImage = () => setCurrentImage((currentImage + 1) % images.length);
//   const prevImage = () => setCurrentImage((currentImage - 1 + images.length) % images.length);

//   const incrementQuantity = () => setQuantity(prev => prev + 1);
//   const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

//   return (
//     <div className="container">
//       <div className="product-grid">
//         <div className="image-container">
//           <img src={images[currentImage]} alt={`Product image ${currentImage + 1}`} className="product-image" />
//           <button onClick={prevImage} className="nav-button left">{'<'}</button>
//           <button onClick={nextImage} className="nav-button right">{'>'}</button>
//           <div className="image-dots">
//             {images.map((_, index) => (
//               <span
//                 key={index}
//                 className={`dot ${index === currentImage ? 'active' : ''}`}
//                 onClick={() => setCurrentImage(index)} // Allow dot clicks to change images
//               />
//             ))}
//           </div>
//         </div>

//         <div className="product-info">
//           <h1 className="product-title">{product.name}</h1>
//           <div className="product-rating">
//             {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
//             <span className="review-count">({product.reviews} reviews)</span>
//           </div>
//           <p className="product-price">${product.price}</p>
//           <p className="product-description">{product.description}</p>

//           <div className="size-selector">
//             <h3>Size</h3>
//             <div className="size-options">
//               {['8oz', '16oz', '32oz'].map(size => (
//                 <button
//                   key={size}
//                   onClick={() => setSelectedSize(size)}
//                   className={`size-option ${selectedSize === size ? 'selected' : ''}`}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="add-to-cart-section">
//             <div className="quantity-selector">
//               <button onClick={decrementQuantity} className="quantity-button">-</button>
//               <span className="quantity-display">{quantity}</span>
//               <button onClick={incrementQuantity} className="quantity-button">+</button>
//             </div>
//             <button className="add-to-cart-button">Add to Cart</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;

import { useParams } from "react-router-dom";
import { useContext, useState } from "react";

import { Alert } from "antd";

import "./ProductPage.css";
import { StoreContext } from "../../Context/StoreContext";

const ProductPage = () => {
  const { id } = useParams(); // Get product ID from URL
  const { food_list, addToCart , url } = useContext(StoreContext); // Use food_list from context
  const product = food_list.find((p) => p._id === id); // Find the product by ID

  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("8oz");
  const [alertMessage, setAlertMessage] = useState(""); // State for alert message
  const [alertVisible, setAlertVisible] = useState(false);

  // Handle case where product is not found
  if (!product) {
    return <div>Product not found</div>;
  }

  // const images = product.images; // Assuming your product has an `images` property
  const images = Array.isArray(product.image) ? product.image : [];

  const nextImage = () => setCurrentImage((currentImage + 1) % images.length);
  const prevImage = () =>
    setCurrentImage((currentImage - 1 + images.length) % images.length);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product._id); // Add product to cart with the specified quantity
    }
    // notification.success({
    //   message: 'Product Added',
    //   description: `${quantity} ${product.name} added to cart!`,
    //   duration: 3, // Duration in seconds
    //   placement: 'topRight', // Position of the notification
    // });
    setAlertMessage(`${quantity} ${product.name} added to cart!`); // Set alert message
    setAlertVisible(true)
    setTimeout(() => {
      setAlertVisible(false);
      setAlertMessage(""); // Clear the message
    }, 3000);
  };
  const handleAlertClose = () => {
    setAlertVisible(false);
    setAlertMessage(""); // Clear the message
  };

  return (
<>
      {alertVisible && (
       <Alert
         message={alertMessage}
         type="success"
         showIcon
         closable
         style={{
          position: 'fixed',
          top: 30,
          right: 20,
          zIndex: 1000,
          backgroundColor:"white",
          width: '300px', // Adjust width as needed
        }}
         onClose={handleAlertClose}
         className="alert"
       />
     )}
    <div className="container">

      <div className="product-grid">
        <div className="image-container">
          {images.length > 0 ? (
            <>
              <img
                src={`${images[currentImage]}`}
                alt={`Product image ${currentImage + 1}`}
                className="product-image"
              />
              <button onClick={prevImage} className="nav-button left">
                {"<"}
              </button>
              <button onClick={nextImage} className="nav-button right">
                {">"}
              </button>
              <div className="image-dots">
                {images.map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${index === currentImage ? "active" : ""}`}
                    onClick={() => setCurrentImage(index)}
                  />
                ))}
              </div>
            </>
          ) : (
            <p>No images available for this product.</p>
          )}
        </div>

        <div className="product">
        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          <div className="product-rating">
            {"★".repeat(product.rating)}
            {"☆".repeat(5 - product.rating)}
            <span className="review-count">({product.reviews} reviews)</span>
          </div>
          <p className="product-price">₹{product.price}</p>
          <p className="product-description">{product.description}</p>

          <div className="size-selector">
            <h3>Size</h3>
            <div className="size-options">
              {["8oz", "16oz", "32oz"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`size-option ${
                    selectedSize === size ? "selected" : ""
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="add-to-cart-section">
            <div className="quantity-selector">
              <button onClick={decrementQuantity} className="quantity-button">
                -
              </button>
              <span className="quantity-display">{quantity}</span>
              <button onClick={incrementQuantity} className="quantity-button">
                +
              </button>
            </div>
            <button onClick={handleAddToCart} className="add-to-cart-button">
              Add to Cart
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductPage;
