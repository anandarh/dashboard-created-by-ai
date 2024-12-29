import React, { useState } from "react";
import {
  AppBar as MuiAppBar,
  Box,
  IconButton,
  InputBase,
  Avatar,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Button,
  ListItemIcon,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { motion, AnimatePresence } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const AppBar = () => {
  const navigate = useNavigate();
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
    handleClose();
  };

  return (
    <MuiAppBar
      position="fixed"
      sx={{
        backgroundColor: "white",
        color: "#333",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        ml: "240px",
        width: "calc(100% - 240px)",
        height: "64px",
        zIndex: 1200,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ width: 40 }} /> {/* Left spacer */}
        {/* Search Bar */}
        <AnimatePresence>
          <motion.div
            initial={false}
            animate={{
              width: isSearchFocused ? 400 : 300,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            <Box
              sx={{
                position: "relative",
                borderRadius: "50px",
                backgroundColor: "#f5f5f5",
                "&:hover": {
                  backgroundColor: "#eeeeee",
                },
                width: "100%",
              }}
            >
              <Box
                sx={{
                  padding: "2px 16px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <SearchIcon
                  sx={{
                    color: "#666",
                    mr: 1,
                  }}
                />
                <InputBase
                  placeholder="Search or type a command..."
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  sx={{
                    color: "#333",
                    width: "100%",
                  }}
                />
              </Box>
            </Box>
          </motion.div>
        </AnimatePresence>
        {/* Avatar and Menu */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            onClick={handleMenu}
            sx={{
              padding: 0.5,
              "&:hover": {
                backgroundColor: "rgba(0,0,0,0.04)",
              },
            }}
          >
            <Avatar
              sx={{
                width: 32,
                height: 32,
                bgcolor: "#1a1a1a",
                fontSize: "0.9rem",
              }}
            >
              A
            </Avatar>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            PaperProps={{
              elevation: 5,
              sx: {
                mt: 1,
                minWidth: 300,
                maxWidth: 320,
                borderRadius: 3,
                backgroundColor: "#2d2d2d",
                color: "white",
                overflow: "visible",
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "#2d2d2d",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
          >
            <Box sx={{ p: 3, pb: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Avatar
                  sx={{
                    width: 40,
                    height: 40,
                    mr: 2,
                    bgcolor: "#1a1a1a",
                    fontSize: "1rem",
                  }}
                >
                  A
                </Avatar>
                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "white", fontWeight: 500 }}
                  >
                    Admin User
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    admin@example.com
                  </Typography>
                </Box>
              </Box>
              <Button
                fullWidth
                variant="outlined"
                size="small"
                sx={{
                  mt: 1,
                  color: "white",
                  borderColor: "rgba(255,255,255,0.3)",
                  borderRadius: 2,
                  textTransform: "none",
                  "&:hover": {
                    borderColor: "white",
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                Manage your Account
              </Button>
            </Box>
            <Box sx={{ py: 1 }}>
              <MenuItem
                onClick={handleClose}
                sx={{
                  py: 1,
                  px: 3,
                  color: "white",
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                }}
              >
                <ListItemIcon>
                  <PersonIcon sx={{ color: "rgba(255,255,255,0.7)" }} />
                </ListItemIcon>
                <Typography variant="body2">Profile</Typography>
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                sx={{
                  py: 1,
                  px: 3,
                  color: "white",
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                }}
              >
                <ListItemIcon>
                  <SettingsIcon sx={{ color: "rgba(255,255,255,0.7)" }} />
                </ListItemIcon>
                <Typography variant="body2">Settings</Typography>
              </MenuItem>
              <MenuItem
                onClick={handleLogout}
                sx={{
                  py: 1,
                  px: 3,
                  color: "white",
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                }}
              >
                <ListItemIcon>
                  <LogoutIcon sx={{ color: "rgba(255,255,255,0.7)" }} />
                </ListItemIcon>
                <Typography variant="body2">Sign Out</Typography>
              </MenuItem>
            </Box>
          </Menu>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
