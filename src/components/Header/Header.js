import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { initMessages } from "redux/Reducers/InboxReducer/inboxSlice";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Avatar from "@mui/material/Avatar";
import Button from "components/Button/Button.js";
import styles from "./Header.module.css";
import MDTypography from "components/MDTypography";
import { People } from "@mui/icons-material";

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleGoBack = () => {
    dispatch(initMessages([]));
    navigate("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("azleUser");
    navigate("/login");
  };

  const navigateToCustomer = () => {
    navigate("/customers");
  };

  return (
    <div className={styles.headerWrapper}>
      <div>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
          className={styles.toggleBtn}
        >
          <DensityMediumIcon />
        </IconButton>
        {location.pathname.includes("/inbox/") && (
          <Button
            size="small"
            classes={{ startIcon: styles.startIcon }}
            className={styles.rootBtn}
            startIcon={<KeyboardArrowLeftIcon />}
            onClick={handleGoBack}
          >
            Inbox
          </Button>
        )}
      </div>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar className={styles.userAvatar}>M</Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
      <MenuItem onClick={navigateToCustomer}>
        <ListItemIcon>
          <People fontSize="small" />
        </ListItemIcon>
        <MDTypography variant="button" color="text">
          Customer
        </MDTypography>
      </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <MDTypography variant="button" color="text">
            Logout
          </MDTypography>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Header;
