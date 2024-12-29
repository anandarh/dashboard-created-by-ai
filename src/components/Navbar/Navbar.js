import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
  { text: "Analytics", icon: <BarChartIcon />, path: "/analytics" },
  { text: "Users", icon: <PeopleIcon />, path: "/users" },
  { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
];

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Paper
      elevation={3}
      sx={{
        width: 240,
        height: "100vh",
        backgroundColor: "#1a1a1a",
        color: "white",
        position: "fixed",
        left: 0,
        top: 0,
      }}
    >
      <Box sx={{ p: 2, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
          Dashboard
        </Typography>
      </Box>
      <List>
        {menuItems.map((item, index) => (
          <motion.div
            key={item.text}
            whileHover={{ scale: 1.02, x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ListItem
              button
              onClick={() => navigate(item.path)}
              sx={{
                py: 1.5,
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              <ListItemIcon sx={{ color: "white", minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{
                  "& .MuiListItemText-primary": {
                    fontSize: "0.9rem",
                    fontWeight: 500,
                  },
                }}
              />
            </ListItem>
          </motion.div>
        ))}
      </List>
    </Paper>
  );
};

export default Navbar;
