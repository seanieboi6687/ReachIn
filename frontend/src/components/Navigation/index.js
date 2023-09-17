import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
        <div className='signin-up-container'>
          <Route path="/login">
            <div id="signup-link" className="flex-container">
              <button className="left-reached">
                  <NavLink className="navlink" exact to="/login">Reached</NavLink>
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
            <div id='signin-link'>
            <button>
              <NavLink to="/login">Sign in</NavLink>
            </button>
            </div>
          </Route>
        </div>
    );
  }

  return (
    <nav className='nav-container'>
        {sessionLinks}
    </nav>

  );
}

export default Navigation;
