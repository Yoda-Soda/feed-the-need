import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./components/logout-button";
import { Button } from "@material-ui/core";
import { Icon } from "@material-ui/core";
import HeaderBar from "./components/header/AppBar";

function App() {
  const { loginWithRedirect, isLoading, isAuthenticated } = useAuth0();
  if (isLoading) {
    return (
      <div>
        <img id="loader" src="loader.gif" alt="loading infinity animation" />
      </div>
    );
  }
  if (!isAuthenticated) {
    loginWithRedirect();
    return null;
  }

  return (
    <div>
      <HeaderBar />
      <div className="App">
        <header className="App-header">
          <Icon color="secondary">star</Icon>
          <img src={logo} className="App-logo" alt="logo" />
          <Icon color="secondary">star</Icon>
        </header>
      </div>
    </div>
  );
}

export default App;
