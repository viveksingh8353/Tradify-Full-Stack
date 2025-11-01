import React from "react";
import MainLayout from "./components/MainLayout";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/DashboardPage";
import Portfolio from "./pages/Portfolio";
import Watchlist from "./pages/Watchlist";
import TopMoversPage from "./pages/TopMoversPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Protected routes */}
          <Route
            path="/dashboard"
            element={
              <MainLayout>
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
              </MainLayout>
            }
          />
          <Route
            path="/portfolio"
            element={
              <MainLayout>
              <PrivateRoute>
                <Portfolio />
              </PrivateRoute>
              </MainLayout>
            }
          />
          <Route
            path="/watchlist"
            element={
              <MainLayout>
              <PrivateRoute>
                <Watchlist />
              </PrivateRoute>
              </MainLayout>
            }
          />
          <Route
            path="/topmovers"
            element={
              <MainLayout>
              <PrivateRoute>
                <TopMoversPage />
              </PrivateRoute>
              </MainLayout>
            }
          />
          {/* Redirect unknown routes to home or 404 page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
