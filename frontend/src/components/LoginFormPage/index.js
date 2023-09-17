import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ email, password }))
      .catch(async (res) => {
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
  };

  return (
    <div id="signin-form-container">
      <h1 id="slogan1">Find jobs through your</h1>
      <h2 id="slogan2">community</h2>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        <div id="email-input-container">
          <div id="email-label">
            <label>Email</label>
          </div>
            <div>
              <input 
                id="email-input"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
        </div>
        <div id="password-input-container">
          <div id="password-label">
            <label>Password</label>
          </div>
            <div>
              <input
                id="password-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
        </div>
        <button type="submit" className="signin-button" >Sign in</button>
        <div className="divider1">
          <hr/>
        </div>
        <div className="or-text">
          or
        </div>
        <div className="divider2">
          <hr />
        </div>
        <div id="signup-link">
          <button type="submit" className="join-now-button" >
            <NavLink className="navlink"  to="/signup">New to ReachOut? Join now</NavLink>
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginFormPage;