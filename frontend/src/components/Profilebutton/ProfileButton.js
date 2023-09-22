import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import '../../components/Profilebutton/Profilebutton.css'
import defaultProfile from '../../components/Profilebutton/profile-default.png'

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory()
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push("/login")
  };

  let dropdown;
  if (showMenu) {
    dropdown = (
      <div className="profile-dropdown-container">
        {showMenu && (
          <ul className="profile-dropdown">
            <img className="default-profile-drop" src={defaultProfile} alt="dfpf"></img>
            <li className="user-name">{user.firstName} {user.lastName}</li>
            <p className="user-headline">
              I am full-stack software engineer!
              Javascript | React | Rails | Ruby | HTML | CSS | NodeJS | PostgreSQL.
              </p>
            <button className="view-profile-button">
              View Profile
            </button>
            <li>
              <div className="divider-drop1"/>
              <button className="sign-out-button" onClick={logout}>Sign Out</button>
            </li>
          </ul>)}
      </div>
    );
  } else {
    <></>
  }

  return (
    <>
      <div className="profile-button-container">
        <button className="profilebutton" onClick={openMenu}>
          <img className="default-profile" src={defaultProfile} alt="dfpf"></img>
          Me ▼ <i className="fa-solid fa-user-circle" />
        </button>
      </div>
      {dropdown}
    </>
  );
}

export default ProfileButton;
