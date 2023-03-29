import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Login from "./Login";

export default function MainPage() {
    const navigate = useNavigate()
    return(
        <div>
          <Login/>
        </div>
    )
}
