import { useContext, useEffect } from "react";
import "./Verify.css";
import { useSearchParams, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";

const Verify = () => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const { url , clearCart } = useContext(StoreContext);
  const navigate = useNavigate();

  const verifyPayment = async () => {
    try {
      
        // Confirm the payment with the backend
        const response = await axios.post(url + "/api/order/verify",null, {
          params:{
          success,
          orderId,
        }
        });

        if (response.data.success) {
          clearCart();
          alert("Payment successful! Your order has been placed.");
          navigate("/myorders");
        } else {
          alert("Payment was not completed. Please try again.");
          // restoreCartItems(response.data.items);
          navigate("/cart");
        }
      // } else {
      //   alert("Payment was canceled. Your order has not been placed.");
      //   navigate("/");
      // }
    } catch (error) {
      console.error("Error verifying payment:", error);
      alert("An error occurred while verifying your payment. Please try again.");
      navigate("/");
    }
  };

  
  // console.log(restoreCartItems);

  useEffect(() => {
    if(orderId){
      verifyPayment();
    }
    else{
      alert("Invalid Request .Order ID is missing");
      navigate("/")
    }
  }, [orderId, success]);

  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;
