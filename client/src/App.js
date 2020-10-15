import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./components/logout-button";
import { Button } from "@material-ui/core";
import { Icon } from "@material-ui/core";
import HeaderBar from "./components/header/AppBar";
import  AddListingPage  from "./components/views/AddListingPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
    <Router>
    <div>
      <HeaderBar />
    <div className="App">
      <Switch>
        <Route path="/my-listings/add">
          <AddListingPage />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
