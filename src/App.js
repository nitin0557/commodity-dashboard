import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import "./index.css";
import AppLayout from "./components/AppLayout";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const Login = lazy(() => import("./components/Login/Login"));
const Products = lazy(() => import("./components/Products"));
const Dashboard = lazy(() => import("./components/Dashboard/Dashboard"));
const AddProductPage = lazy(() => import("./components/AddProductPage"));

export default function App() {
  const loadingText = "loading...";

  // ✅ define a theme
  const theme = createTheme({
    palette: {
      mode: "light", // or "dark"
      primary: { main: "#1976d2" },
      secondary: { main: "#9c27b0" },
    },
  });

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
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
      </ThemeProvider>
    </AuthProvider>
  );
}
