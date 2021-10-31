import React, { useState } from "react";
import initializeAuthentication from "../../../Firebase/firebase.init";
import googleImg from "../../../images/google.png";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./Login.css";
import { useHistory, useLocation } from "react-router";

initializeAuthentication();
const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  console.log(email);
  const auth = getAuth();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      history.push(redirect_uri);
    });
  };

  const toggleLogin = (e) => {
    setIsLogin(e.target.checked);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (password.length < 6) {
      setError("Password Must be at least 6 characters long.");
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("Password Must contain 2 upper case");
      return;
    }

    if (isLogin) {
      processLogin(email, password);
    } else {
      registerNewUser(email, password);
    }
  };

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        history.push(redirect_uri);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        history.push(redirect_uri);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="login-area">
        <h3>Please {isLogin ? "Login" : "Register"}</h3>
        <br />
        <form onSubmit={handleRegistration}>
          <input
            onBlur={handleEmailChange}
            type="email"
            placeholder="Your email address"
          />
          <br />
          <input
            onBlur={handlePasswordChange}
            type="password"
            placeholder="Your password"
          />
          <br />
          <button className="button-login">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        <br />
        <div className="row mb-3 text-danger">{error}</div>
        <p>
          {isLogin ? "Don't have account? " : "Already have an account  "}{" "}
          <label>
            <input
              onChange={toggleLogin}
              className="form-check-input"
              type="checkbox"
              id="gridCheck1"
            />
            {isLogin ? "Resister" : "Login"}
          </label>
        </p>
        <button onClick={handleGoogleSignIn} className="button-google">
          <img src={googleImg} alt="" srcset="" /> Login with google
        </button>
      </div>
    </div>
  );
};

export default Login;
