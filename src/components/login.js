import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {
    const navigate = useNavigate()
    const [user, setUser] = useState("")

    const verify = (name) => {
        if (name === "IT"||name==='it') {
            navigate("/aXRtYWlu")
        } else {
            navigate("/dXNlcm1haW4=")
        }
    }
    return(
        <div>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input 
                        type="email" 
                        class="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                        onChange={(e) => setUser(e.target.value)}
                    />
                    <div id="emailHelp" class="form-text">TODO: link email address to roles (it/user)</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary" onClick={()=>verify(user)}>Login</button>
            </form>
        </div>
        
    )
}
