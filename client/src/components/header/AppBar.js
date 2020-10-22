import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "./AppBar.css";
import LogoutButton from "../logout-button";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 200,
    padding: 10,
  },
}));

const HeaderBar = () => {
  const classes = useStyles();
  const { user } = useAuth0();
  return (
    <AppBar position="static">
      <Toolbar className="bar">
        <IconButton edge="start" color="secondary" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className="title">
          <a href="/">
            <img
              className={classes.root}
              src="logo.svg"
              alt="Feed the need logo"
            />
          </a>
        </Typography>

        <Link to="/my-listings/add">Add a Listing</Link>
        <span className="email">NAU MAI - WELCOME {user.email} </span>
        <LogoutButton />
      </Toolbar>
    </AppBar>
  );
};
export default HeaderBar;
