import React, { Component, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import '../App.css';

function Login() {
    const navigate = useNavigate()
    const [user, setUser] = useState("")

    const verify = (name) => {
        if (name==="IT"|| name==='it'||name==='admin') {
            navigate("/aXRtYWlu")
        } else {
            navigate("/dXNlcm1haW4=")
        }
    }
    return(
        <div className="text-center">
            <form>
                <h1>Home Page</h1>
                <h3>Login/Signup</h3>
                <label for="inputEmail" className="sr-only">Email address</label>
                <input
                  type="email"
                  id="inputEmail"
                  placeholder="Username (IT/admin)"
                  onChange={(e) => setUser(e.target.value)}
                  autofocus/>
                <div>
                  <label for="inputPassword" class="sr-only">password</label>
                  <input type="password" id="inputPassword" placeholder="Password (optional)"/>
                </div>
                <p>{`Don't have an account? `}<Link to="/sign-up">Register</Link></p>
                <button
                  className="btn btn-lg btn-primary btn-block"
                  onClick={() => verify(user)}
                >Login
                </button>
            </form>
        </div>
    )
}

export default Login;
