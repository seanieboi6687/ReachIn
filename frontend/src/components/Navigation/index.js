import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from '../Profilebutton/ProfileButton';
import './Navigation.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import logo from '../../components/Navigation/logo.png'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory()
  function handleclick() {
    history.push('/newsfeed')
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <> 
        <div>
            <img onClick={handleclick} className="logo-png1" src={logo} alt='logo'></img>
        </div>
      </>  
    );
  } else {
    sessionLinks = (
        <div className='signin-up-container'>
          <Switch>
            <Route path="/login">
              <div id="signup-link" className="flex-container">
                <button className="left-reached">
                    <NavLink className="navlink" exact to="/login">Reach</NavLink>
                  <button className="left-in" >
                    <NavLink className="navlink" exact to="/login">in</NavLink>
                  </button>
                </button>
                <div className="right-links">
                  <button className="joinnow-button1">
                    <NavLink className="navlink" to="/signup">Join now</NavLink>
                  </button>
                <button className="signin-button1">
                  <NavLink className="navlink" to="/login">Sign in</NavLink>
                </button>
                </div>
              </div>
            </Route>
            <Route path="/signup" >
              <div id="signup-link" className="flex-container">
                <button className="left-reached">
                  <NavLink className="navlink" exact to="/login">Reach</NavLink>
                  <button className="left-in" >
                    <NavLink className="navlink" exact to="/login">in</NavLink>
                  </button>
                </button>
              </div>
            </Route>
          </Switch>
        </div>
    );
  }

  if (sessionUser){
    return (
      <>
        <div className='nav-container1'>
            {sessionLinks}
        </div>
        <ProfileButton user={sessionUser} />
      </>

    )}

    return (
      <nav className='nav-container2'>
        {sessionLinks}
      </nav>
    )
  
}

export default Navigation;
