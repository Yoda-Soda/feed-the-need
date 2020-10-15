import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "./AppBar.css";
import LogoutButton from "../logout-button";
import { useAuth0 } from "@auth0/auth0-react";

const HeaderBar = () => {
  const { user } = useAuth0();
  return (
    <AppBar position="static">
      <Toolbar className="bar">
        <IconButton edge="start" color="secondary" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className="title">
          FEEDtheNEED
        </Typography>
        <span className="email">NAU MAI - WELCOME {user.email} </span>
        <LogoutButton />
      </Toolbar>
    </AppBar>
  );
};
export default HeaderBar;
