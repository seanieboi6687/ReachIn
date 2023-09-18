import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import LoginFormPage from "./components/LoginFormPage";
import ProfileButton from "./components/Navigation/ProfileButton";

function App() {
  return (
    <>
      <Navigation />
      <Switch>

        <Route path="/login" >
          <LoginFormPage />
        </Route>

        <Route path="/signup">
          <SignupFormPage />
        </Route>

        <Route path="/newsfeed">
          <ProfileButton/>
        </Route>

      </Switch>
    </>
  );
}

export default App