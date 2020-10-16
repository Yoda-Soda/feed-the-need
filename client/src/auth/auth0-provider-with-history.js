import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const audience = "http://proj3.net";

  const history = useHistory(); //this hook gets the history object from React Router

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname); //method to take users back to the route they intended to access before authentication.
  };

  return (
    <Auth0Provider
      domain={domain}
      audience={audience}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
