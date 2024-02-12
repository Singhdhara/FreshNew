import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Nopage from "./pages/nopage/Nopage";
import Cart from "./pages/cart/Cart";
import Daseboard from "./pages/admin/Daseboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/*" element={<Nopage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Daseboard />} />
      </Routes>
    </Router>
  );
}

export default App;
