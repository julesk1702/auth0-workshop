import "./App.css";
import React from "react";

function App() {
  // TODO: Haal isAuthenticated en isLoading op via useAuth0()
  // TODO: Geef de gebruiker feedback dat de app aan het laden is

  return (
    <>
      {
        // TODO: Als de gebruiker NIET is ingelogd, toon welkom en login-knop anders toon je het profielcomponent
        <>
          <h1>Welcome to the Auth0 workshop</h1>
          <p>
            To get started, please read the <code>README.md</code>.
          </p>
          <p>
            And start editing <code>src/App.js</code> to see the changes in
            action.
          </p>
        </>
      }
    </>
  );
}

export default App;
