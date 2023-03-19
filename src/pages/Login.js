import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {
    const navigate = useNavigate()
    const [user, setUser] = useState("")

    const verify = (name) => {
        if (name === "IT") {
            navigate("/aXRtYWlu")
        } else {
            navigate("/dXNlcm1haW4=")
        }
    }
    return(
        <div>
            <h1>Login Page</h1>
            <input
                onChange={(e) => setUser(e.target.value)}
                placeholder="credentials"></input>
            <button onClick={() => verify(user)}>Login</button>   
        </div>
        
    )
}