import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { loginWithRedirect, isLoading, isAuthenticated } = useAuth0();
  if (isLoading) {
    return <div>loading...</div>;
  }
  if (!isAuthenticated) return <div>Sorry you're not logged in</div>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          WELCOME TO THE TRADE APP OF JAN, KELLY, KATE, DAVE AND MIKE AND JO{" "}
          <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
