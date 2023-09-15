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
      <div>
        <Route path="/login" >
          <NavLink to="/signup">Join Now</NavLink>
        </Route>
        <Route path="/signup" >
          <NavLink to="/login">Sign In</NavLink>
        </Route>
      </div>
    );
  }

  return (
    <div>
        <NavLink exact to="/login">ReacOut</NavLink>
        {sessionLinks}
    </div>

  );
}

export default Navigation;
