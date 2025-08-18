import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/Login/Login";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./routes/ProtectedRoute";
import './index.css';
import Dashboard from "./components/Dashboard/Dashboard";
import AddProductPage from "./components/AddProductPage";
import AppLayout from "./components/AppLayout";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/commodity-dashboard" element={
             <AppLayout>
                <Login />
              </AppLayout>
            } />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute role="Manager">
                 <AppLayout>
                  <Dashboard />
                </AppLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/product"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <Products />
                </AppLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-product"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <AddProductPage />
                </AppLayout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
