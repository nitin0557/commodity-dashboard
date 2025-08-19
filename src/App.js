import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import "./index.css";
import AppLayout from "./components/AppLayout";

const Login = lazy(() => import("./components/Login/Login"));
const Products = lazy(() => import("./components/Products"));
const Dashboard = lazy(() => import("./components/Dashboard/Dashboard"));
const AddProductPage = lazy(() => import("./components/AddProductPage"));

export default function App() {
  var loadingText = "loading...";

  return (
    <AuthProvider>
      <Router>
        <Suspense fallback={<div>{loadingText}</div>}>
          <Routes>
            <Route
              path="/commodity-dashboard"
              element={
                <AppLayout>
                  <Login />
                </AppLayout>
              }
            />
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
        </Suspense>
      </Router>
    </AuthProvider>
  );
}
