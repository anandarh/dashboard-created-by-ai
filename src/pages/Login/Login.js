import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)`,
        backgroundSize: "400% 400%",
        animation: "gradient 15s ease infinite",
        "@keyframes gradient": {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Paper
            elevation={10}
            sx={{
              padding: 4,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              borderRadius: 2,
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            }}
          >
            <Typography
              component="h1"
              variant="h4"
              sx={{ mb: 4, color: "#333" }}
            >
              Welcome Back
            </Typography>
            <Box
              component="form"
              onSubmit={handleLogin}
              sx={{ mt: 1, width: "100%" }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                sx={{ mb: 2 }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ mb: 2 }}
              />
              {error && (
                <Typography color="error" sx={{ mb: 2 }}>
                  {error}
                </Typography>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  background:
                    "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                  color: "white",
                  "&:hover": {
                    background:
                      "linear-gradient(45deg, #FE6B8B 40%, #FF8E53 80%)",
                  },
                }}
              >
                Sign In
              </Button>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Login;
