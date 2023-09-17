import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import LoginFormPage from "./components/LoginFormPage";

function App() {
  return (
    <>
      <Switch>

        <Route path="/login" >
          <Navigation />
          <LoginFormPage />
        </Route>

        <Route path="/signup">
          <Navigation />
          <SignupFormPage />
        </Route>

      </Switch>
    </>
  );
}

export default App