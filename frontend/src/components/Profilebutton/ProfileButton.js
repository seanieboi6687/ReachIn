import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import '../../components/Profilebutton/Profilebutton.css'

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

  return (
    <>
      <button className="profilebutton" onClick={openMenu}>
        Drop <i className="fa-solid fa-user-circle" />
      </button>
      <div className="profile-dropdown-container">
        {showMenu && (
          <ul className="profile-dropdown">
            <li>{user.email}</li>
            <li>
              <button onClick={logout}>Log Out</button>
            </li>
          </ul>)}
        </div>
    </>
  );
}

export default ProfileButton;