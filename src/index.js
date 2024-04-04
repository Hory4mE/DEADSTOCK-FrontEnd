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
import Payment from "./Pages/Payment";
import Account from "./Pages/Account";
import Billing from "./Pages/Billing";
import ManageProducts from "./Pages/ManageProducts";
import AddProductPage from "./Pages/AddProductsPage";
import Dashboard from "./Pages/Dashboard"
import OrderStatus from "./Pages/OrderStatus";

// useContext
import { AuthProvider } from "./context/AuthContext";
import ProtectRoute from "./hook/ProtectRoute";


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
          <Route path="/payment" element={<Payment />} />
          <Route
            path="/cart"
            element={
              <ProtectRoute requireRoles={["member"]}>
                <Cart />
              </ProtectRoute>
            }
          />
          <Route
            path="/payment"
            element={
              <ProtectRoute requireRoles={["member"]}>
                <Payment />
              </ProtectRoute>
            }
          />
          <Route
            path="/account"
            element={
              <ProtectRoute requireRoles={["member"]}>
                <Account />
              </ProtectRoute>
            }
          />
          <Route
            path="/billing"
            element={
              <ProtectRoute requireRoles={["member"]}>
                <Billing />
              </ProtectRoute>
            }
          />     
        <Route
            path="/dashboard"
            element={
              <ProtectRoute
                requireRoles={["user_admin", "super_admin", "member"]}
              >
                <Dashboard />
              </ProtectRoute>
            }
          />
          <Route
            path="/ManageProducts"
            element={
              <ProtectRoute
                requireRoles={["user_admin", "super_admin", "member"]}
              >
                <ManageProducts/>
              </ProtectRoute>
            }
          />
          <Route
            path="/addProduct"
            element={
              <ProtectRoute
                requireRoles={["user_admin", "super_admin", "member"]}
              >
                <AddProductPage />
              </ProtectRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectRoute
                requireRoles={["user_admin", "super_admin", "member"]}
              >
                <OrderStatus />
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
