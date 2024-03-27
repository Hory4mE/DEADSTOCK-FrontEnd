import React , {useState} from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

// PAGES
import App from "./Pages/App";
import ErrorPage from "./Pages/errorPage";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetail";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Cart from "./Pages/Cart";
import Payment from "./Pages/Payment"

// useContext
import { AuthProvider } from './context/AuthContext';
import ProtectRoute from './hook/ProtectRoute'; 

const root = document.getElementById("root");

createRoot(root).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/product" element={<Products />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/payment" element={<Payment />} />
          <Route
            path="/cart"
            element={
              <ProtectRoute requireRoles={['member']}>
                <Cart/>
              </ProtectRoute>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
