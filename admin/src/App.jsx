import React from "react";
import { Navbar } from "./component/Navbar/Navbar";
import { Sidebar } from "./component/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import { Add } from "./pages/Add/Add";
import { Order } from "./pages/Orders/Order";
import { List } from "./pages/List/List";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css"
const App = () => {
  const url = "https://e-com-server-mu.vercel.app";
  return (
    <>
    <div>
      <div className="header-app">
        <ToastContainer />
        <Navbar />
        <hr />
      </div>
      <div className="app-content">
        <div><Sidebar /></div>
        {/* <div style={{overflow:"scroll"}}> */}
        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/orders" element={<Order url={url} />} />
        </Routes>
        {/* </div> */}
      </div>
     </div>
    </>
  );
};

export default App;
