import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import AppBar from "./components/AppBar/AppBar";
import { Box } from "@mui/material";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  return isAuthenticated ? (
    <>
      <Navbar />
      <AppBar />
      {children}
    </>
  ) : (
    <Navigate to="/" replace />
  );
};

const App = () => {
  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
