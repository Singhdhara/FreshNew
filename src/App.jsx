import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Nopage from "./pages/nopage/Nopage";
import Cart from "./pages/cart/Cart";
import MyState from "./context/data/myState";
import Login from "./pages/registration/Login";
import Sinup from "./pages/registration/Sinup";
import ProductInfo from "./pages/productInfo/ProductInfo";
import Daseboard from "./pages/daseboard/Daseboard";

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/*" element={<Nopage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element= {<Login />} />
          <Route path="/sinup" element= {<Sinup />} />
          <Route path="/daseboard" element={<Daseboard />} />
          <Route path="/productInfo/:id" element= {<ProductInfo />} />
        </Routes>
      </Router>
    </MyState>
  );
}

export default App;