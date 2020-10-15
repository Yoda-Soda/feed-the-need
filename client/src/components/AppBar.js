import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "./AppBar.css";
import LogoutButton from "./logout-button";
import { useAuth0 } from '@auth0/auth0-react';

const AppBarJo = () => {
  const { user } = useAuth0();
  console.log(user);
  // const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          // className={classes.menuButton}
          color="secondary"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className="title">
          FEEDtheNEED
        </Typography>
       <span className="email">Welcome {user.email} </span> 
        <LogoutButton />
      </Toolbar>
    </AppBar>
  );
};
export default AppBarJo;
