import React from "react";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Container } from "@material-ui/core";
import HeaderBar from "./components/header/AppBar";
import AddListingPage from "./components/views/AddListingPage";
import ListOfListingsView from "./components/views/ListOfListingsView";
import ViewListingPage from "./components/views/ViewListingPage";
// import sgMail from "./emailsender/emailsender.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const { loginWithRedirect, isLoading, isAuthenticated } = useAuth0();
  if (isLoading) {
    return (
      <div>
        <img id="loader" src="/loader.gif" alt="loading infinity animation" />
      </div>
    );
  }
  if (!isAuthenticated) {
    loginWithRedirect();
    return null;
  }

  return (
    <Router>
      <HeaderBar />
      <Container>
        <Switch>
          <Route path="/my-listings/add">
            <AddListingPage />
          </Route>
          <Route path="/listings/:listingId">
            <ViewListingPage />
          </Route>
          <Route path="/listings">
            <ListOfListingsView />
          {/* </Route>
            <Route path="/listings/:listingId/email">
            <sgMail /> */}
          </Route>
          <Route path="/">
            <Redirect to="/listings" />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
