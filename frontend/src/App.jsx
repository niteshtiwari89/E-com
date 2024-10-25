import { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Cart } from "./pages/Cart/Cart";
import { PlaceOrder } from "./pages/PlaceOrder/PlaceOrder";
import { Footer } from "./components/footer/Footer";
import { LoginPopUP } from "./components/LoginPopup/LoginPopUP";
import Verify from "./pages/Verify/Verify";
import Myorders from "./pages/Myorders/Myorders";
import ContactUs from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Faq from "./pages/Faq/Faq";
import Privacypolicy from "./pages/privacy/Privacy";
import { Alert } from "antd";
import ExploreMenu from "./pages/Menu/Menu.jsx";
import ProductPage from "./pages/ProductPage/ProductPage";
import TermsAndCondition from "./pages/TermsCondition/TermsCondition";
import { StoreContext } from "./Context/StoreContext.jsx";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  // const [addToCart] = useContext(StoreContext)
  const [alertMessage, setAlertMessage] = useState(""); // State for alert message
  const [alertVisible, setAlertVisible] = useState(false);
  // const handleAddToCart = () => {
  //   for (let i = 0; i < quantity; i++) {
  //     addToCart(product._id); // Add product to cart with the specified quantity
  //   }
  //   setAlertMessage(` added to cart!`); // Set alert message
  //   setAlertVisible(true)
  //   setTimeout(() => {
  //     setAlertVisible(false);
  //     setAlertMessage(""); // Clear the message
  //   }, 3000);
  // };
  // const handleAlertClose = () => {
  //   setAlertVisible(false);
  //   setAlertMessage(""); // Clear the message
  // };
  return (
    <>
      <div className="app">
        {showLogin ? <LoginPopUP setShowLogin={setShowLogin} /> : <></>}
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          {/* {alertVisible && (
            <Alert
              message={alertMessage}
              type="success"
              showIcon
              closable
              onClose={handleAlertClose}
              className="alert"
            />
          )} */}
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/menu" element={<ExploreMenu />} />
          <Route path="/menu/product/:id" element={<ProductPage />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/myorders" element={<Myorders />} />
          <Route path="/order/verify" element={<Verify />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/terms" element={<TermsAndCondition />} />
          <Route path="/privacy" element={<Privacypolicy />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};
export default App;
