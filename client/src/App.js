import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./components/logout-button";
import { Button } from "@material-ui/core";
import { Icon } from "@material-ui/core";

// import "fontsource-roboto";

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
    <div className="App">
      <header className="App-header">
        <Icon>star</Icon>
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="contained" color="secondary">
          KIA ORA
        </Button>
        <p>NAU MAI - WELCOME TO FEED THE NEED </p>
        <LogoutButton />
      </header>
    </div>
  );
}

export default App;
