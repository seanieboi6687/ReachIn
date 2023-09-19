import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("")
  const [gender, setGender] = useState("")
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory()

  if (sessionUser) {
    history.push('/newsfeed')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      dispatch(sessionActions.signup({ 
        email: email,
        password: password,
        phoneNumber: phoneNumber,
        firstName: firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase().trim(),
        lastName: lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase().trim(),
        gender: gender
      })).catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if, e.g., server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
    } else {
      return setErrors(['Please confirm your password.']);
    }
  };

  let passwordError;
  let emailError;
  let genderError;
  let phoneError;
  let confirmError;
  errors.forEach(error => {
    if (error.includes('Password is too short (minimum is 6 characters)')) {
      passwordError = 'Password is too short (minimum is 6 characters)'
    } 
    if(error.includes('Email is invalid')) {
      emailError = 'Email is invalid'
    }
    if (error.includes('Phone number is too short (minimum is 10 characters)')) {
      phoneError = 'Phone number is too short (minimum is 10 digits)'
    }
    if (error.includes('Gender is required')) {
      genderError = 'Gender is required'
    }
    if (error.includes('Please confirm your password')) {
      confirmError = 'Please confirm your password'
    }
  })

  return (
    <div className="background">
      <div className="signup-slogan">
        <h1>Make the most of your professional life</h1>
      </div>
    <div className="sign-up-form-container">
      <div className="sign-up-form">
        <form onSubmit={handleSubmit}>
          <div className="label">
            <label>First name</label>
          </div>
            <input
              id="user-input"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          <div className="label">
            <label>Last name</label>
          </div>
            <input
              id="user-input"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          <div className="label">
              <label>Gender</label>
          </div>
            <select value={gender} onChange={(e) => setGender(e.target.value)} id="menu">
              <option value=""></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Transgender">Transgender</option>
              <option value="Non-binary/non-conforming">Non-binary/non-conforming</option>
              <option value="Prefer not to respond">Prefer not to respond</option>
            </select>
            <div className="gender-error">{genderError}</div>
          <div className="label">
            <label>Email</label>
          </div>
            <input
              id="user-input"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="email-error">{emailError}</div>
          <div className="label">
            <label>Phone number</label>
          </div>
            <input
              id="user-input"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            <div className="phone-error">{phoneError}</div>
          <div className="label">
            <label>Password</label>
          </div>
            <input
              id="user-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="password-error">{passwordError}</div>
          <div className="label">
            <label>Confirm password</label>
          </div>
            <input
              id="user-input"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <div className="confirm-error">{confirmError}</div>
          <button className="join-button" type="submit">Join</button>
            <div className="divider3">
              <hr />
            </div>
            <div className="or-text1">
              or
            </div>
            <div className="divider4">
              <hr />
            </div>
          <div className="signin"> Already on ReachedOut?
            <NavLink className="signin-link" to="/login">Sign In</NavLink>  
          </div>
        </form>
      </div>
    </div>
  </div>
  );
}

export default SignupFormPage;