import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import LoginFormPage from "./components/LoginFormPage";
import Newsfeed from './components/Newsfeed'
import './components/Navigation/Navigation.css'
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "./components/Footer"

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
          <Footer/>
        </Route>

        <Route exact path="/signup">
          <Navigation />
          <SignupFormPage />
          <Footer />
        </Route>

        <Route exact path="/newsfeed">
          <Navigation/>
          <Newsfeed/>
        </Route>

      </Switch>
    </>
  );
}

export default App