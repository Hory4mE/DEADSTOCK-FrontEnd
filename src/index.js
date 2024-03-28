import React, { useState } from "react";
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
import History from "./Pages/History";
import Billing from "./Pages/Billing";

// useContext
import { AuthProvider } from './context/AuthContext';
import ProtectRoute from './hook/ProtectRoute';

const root = document.getElementById("root");

createRoot(root).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* NO Authentication */}
          <Route path="/" element={<App />} />
          <Route path="/product" element={<Products />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* HAVE Authentication */}
          <Route
            path="/cart"
            element={
              <ProtectRoute requireRoles={['member']}>
                <Cart />
              </ProtectRoute>
            }
          />
          <Route
            path="/payment"
            element={
              <ProtectRoute requireRoles={['member']}>
                <Payment />
              </ProtectRoute>
            }
          />
          <Route
            path="/history"
            element={
              <ProtectRoute requireRoles={['member']}>
                <History />
              </ProtectRoute>
            }
          />
          <Route
            path="/billing"
            element={
              <ProtectRoute requireRoles={['member']}>
                <Billing />
              </ProtectRoute>
            }
          />
          {/* Error Page Request / Authentication */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
