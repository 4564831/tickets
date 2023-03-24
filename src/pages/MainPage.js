import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function MainPage() {
    const navigate = useNavigate()
    return(
        <div>
            <div>
                <h1>Login</h1>
                <button onClick={() => navigate("/login")}>Login</button>
            </div>   
            <div>
                <h1>Sign Up</h1>
                <button onClick={() => navigate("/sign-up")}>Sign Up</button>
            </div>   
        </div>
        
    )
}