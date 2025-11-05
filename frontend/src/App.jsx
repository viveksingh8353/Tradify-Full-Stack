import React from "react";
import MainLayout from "./components/MainLayout";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import RegisterPage from "./pages/register/RegisterPage";
import LoginPage from "./pages/Login/LoginPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import PortfolioPage from "./pages/portfolio/PortfolioPage";
import WatchlistPage from "./pages/watchlist/WatchlistPage";
import TopMoversPage from "./pages/TopMovers/TopMoversPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Protected routes */}
          <Route
            path="/dashboard"
            element={
              <MainLayout>
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
              </MainLayout>
            }
          />
          <Route
            path="/portfolio"
            element={
              <MainLayout>
              <PrivateRoute>
                <PortfolioPage />
              </PrivateRoute>
              </MainLayout>
            }
          />
          <Route
            path="/watchlist"
            element={
              <MainLayout>
              <PrivateRoute>
                <WatchlistPage />
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
