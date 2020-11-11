import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import "./AppBar.css";
import LogoutButton from "../logout-button";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 200,
    padding: 10,
  },
  buttonpadding: {
    margin: 10,
  },
}));

const HeaderBar = () => {
  const classes = useStyles();
  const { user } = useAuth0();
  const history = useHistory();
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
              src="/logo.svg"
              alt="Feed the need logo"
              onClick={() => {
                history.push("/");
              }}
            />
          </a>
        </Typography>
        Add a Listing
        <span className="email">{user.email} </span>
        <Button
          className={classes.buttonpadding}
          variant="contained"
          color="primary"
          onClick={() => {
            history.push("/my-listings/add");
          }}
        >
          Add Listing
        </Button>
        <LogoutButton />
      </Toolbar>
    </AppBar>
  );
};
export default HeaderBar;
