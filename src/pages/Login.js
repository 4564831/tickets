import React, { Component, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import '../App.css';

function Login() {
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
    const { email, password } = formData;
    const navigate = useNavigate();
    function onChange(e) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
      }));
    }
    async function onSubmit(e) {
      e.preventDefault();
      try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        if (userCredential.user) {
          navigate("/profile");
        }
      } catch (error) {
        console.log(error);
      }
    }

    return(
        <div>
          <h1>Home Page</h1>
          <h3>Login/Signup</h3>
          <form onSubmit={onSubmit}>
            <div>
              <label>email address</label>
              <input
                type="email"
                id="email"
                placeholder="email address"
                onChange={onChange}
              />
            </div>
            <div>
              <label>password</label>
              <input
                type="text"
                id="password"
                value={password}
                onChange={onChange}
                placeholder="password"
              />
            </div>
            <p>{`Don't have an account? `}<Link to="/sign-up">Register</Link></p>
            <p><Link to="/forgot-password">Forgot Password?</Link></p>
            <button>Login</button>
          </form>
        </div>
    )
}

export default Login;
