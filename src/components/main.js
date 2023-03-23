import React, { Component, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import '../css/main.css';

function Home() {
    const navigate = useNavigate()
    const [user, setUser] = useState("")

    const verify = (name) => {
        if (name==="IT"|| name==='it'||name==='admin') {
            navigate("/admin")
        } else {
            navigate("/user")
        }
    }
    return(
        <div className="text-center">
            <form className="form-signin">
                <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label for="inputEmail" className="sr-only">Email address</label>
                <input
                  type="email"
                  id="inputEmail"
                  placeholder="Username (IT/admin)"
                  onChange={(e) => setUser(e.target.value)}
                  autofocus/>
                <label for="inputPassword" class="sr-only">password</label>
                <input type="password" id="inputPassword" placeholder="Password (optional)"/>
                <p>{`Don't have an account? `}<Link to="/signup">Signup</Link></p>
                <button
                  className="btn btn-lg btn-primary btn-block"
                  onClick={() => verify(user)}
                >Login
                </button>
                <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
            </form>
        </div>
    )
}

export default Home;
