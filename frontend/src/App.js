import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import LoginFormPage from "./components/LoginFormPage";
import ProfileButton from "./components/Profilebutton/ProfileButton";
import Newsfeed from './components/Newsfeed'
import './components/Navigation/Navigation.css'

function App() {
  return (
    <>
      <Navigation />
      <Switch>

        <Route exact path="/login" >
          <LoginFormPage />
        </Route>

        <Route exact path="/signup">
          <SignupFormPage />
        </Route>

        <Route exact path="/newsfeed">
          <Newsfeed/>
        </Route>

      </Switch>
    </>
  );
}

export default App