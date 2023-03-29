import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

import { db as db0 } from "../config/firebase";
import { db } from "../config/firebase-config";

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const { name, email, password } = formData;
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
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        updateProfile(auth.currentUser, {
            displayName: name,
        });
        const user = userCredential.user;
        const formDataCopy = { ...formData };
        delete formDataCopy.password;
        formDataCopy.timestamp = serverTimestamp();

        await setDoc(doc(db0, "users", user.uid), formDataCopy);
            console.log("Sign up was successful");
            navigate("/");
        } catch (error) {
            console.log("Something went wrong with the registration");
        }
    }

    return(
        <div>
            <h1>Sign Up Page</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={onChange}
                        placeholder="Name"></input>
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={onChange}
                        placeholder="E-Mail"></input>
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={onChange}
                        placeholder="Password"></input>
                </div>
              <button>Submit</button>
            </form>
        </div>
    )
}
