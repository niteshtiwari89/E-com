import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([]);
  
  // Add item to cart
  const addToCart = async (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
    
    if (token) {
      try {
        await axios.post(url + "/api/cart/add", { itemId }, { headers: { Authorization: `Bearer ${token}` } });
      } catch (error) {
        handleAuthError(error);
      }
    }
  };

  // Remove item from cart
  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 1) - 1, 0),
    }));
    
    if (token) {
      try {
        await axios.post(url + "/api/cart/remove", { itemId }, { headers: { Authorization: `Bearer ${token}` } });
      } catch (error) {
        handleAuthError(error);
      }
    }
  };

  // Calculate total amount
  const getTotalAmount = () => {
    return Object.keys(cartItems).reduce((total, item) => {
      const itemInfo = food_list.find((product) => product._id === item);
      return total + (itemInfo ? itemInfo.price * cartItems[item] : 0);
    }, 0);
  };

  // Fetch food list
  const fetchFoodList = async () => {
    try {
      const response = await axios.get(url + "/api/food/list");
      setFoodList(response.data.data);
    } catch (error) {
      console.error("Error fetching food list:", error);
    }
  };

  // Load cart data
  const loadCartData = async (token) => {
    try {
      const response = await axios.post(url + "/api/cart/get", {}, { headers: { Authorization: `Bearer ${token}` } });
      setCartItems(response.data.cartData);
  } catch (error) {
      if (error.response?.status === 401) {
          alert("Your session has expired. Please log in again.");
          setToken(""); // Clear the token
          localStorage.removeItem("token"); // Remove token from local storage
          // Optionally navigate to the login page
        } else {
          console.error("Error loading cart data:", error);
      }
  }
};

  // Handle authentication errors
  const handleAuthError = (error) => {
    if (error.response && error.response.data.message === "Token is expired") {
      alert("Your session has expired. Please log in again.");
      setToken(""); // Clear the token
      localStorage.removeItem("token"); // Remove token from local storage
      // You can navigate to login here if you have a navigation method
    } else {
      console.error("An error occurred:", error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      await fetchFoodList();
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
        await loadCartData(storedToken);
      }
    };
    loadData();
  }, []);
  
  const clearCart = () =>{
    
    setCartItems({});

  }
  
  const contextValue = {
    food_list,
    addToCart,
    cartItems,
    removeFromCart,
    setCartItems,
    getTotalAmount,
    url,
    setToken,
    token,
    clearCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
