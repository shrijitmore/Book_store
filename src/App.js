import React, { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Home from './pages/Home/Home';
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import supabase from "./supabase";
import { useDispatch } from "react-redux";  
import { setUser } from "./Components/Slices/userSlice";

const App = () => {
  const dispatch = useDispatch();

  const getUser = async () => {
    const { data, error } = await supabase.auth.getSession();
    if (data && data.session && data.session.user) {
      dispatch(setUser(data.session.user));
    } else {
      console.error('User session not available');
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;