import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import LoginFormPage from "./components/LoginFormPage";
import ProfileButton from "./components/Profilebutton/ProfileButton";
import Newsfeed from './components/Newsfeed'
import './components/Navigation/Navigation.css'
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();
  if (!sessionUser) {
    history.push('/login')
  }
  return (
    <>
      <Switch>

        <Route exact path="/login" >
          <Navigation />
          <LoginFormPage />
        </Route>

        <Route exact path="/signup">
          <Navigation />
          <SignupFormPage />
        </Route>

        <Route exact path="/newsfeed">
          <Navigation />
          <ProfileButton user={sessionUser} />
          <Newsfeed/>
        </Route>

      </Switch>
    </>
  );
}

export default App