import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SignUp() {

    return(
        <div>
            <h1>Sign Up Page</h1>
            <div>
                <input
                    placeholder="Name"></input>
            </div>
            <div>
                <input
                    placeholder="E-Mail"></input>
            </div>
            <div>
                <input
                    placeholder="Password"></input>
            </div>
            <button onClick={() => alert}>Submit</button>   
        </div>
    )
}