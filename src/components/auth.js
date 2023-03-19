import {auth, googleProvider} from "../config/firebase-config"
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { useState } from "react"

export const Auth = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const signIn = async() => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
        } catch (err) {
            console.error(err)
        }
    }
    const signInWithGoogle = async() => {
        try {
            await signInWithPopup(auth, googleProvider)
        } catch (err) {
            console.error(err)
        }
    }
    const signingOut = async() => {
        try {
            await signOut(auth)
        } catch (err) {
            console.error(err)
        }
    }
    return(
        <div>
            <div>
                <input placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}/>
                <input placeholder="Password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={signIn}>Sign In</button>
            </div>
            <div>
                <button onClick={signInWithGoogle}> Sign in with Google</button>
            </div>
            <div>
                <button onClick={signingOut}> Sign Out</button>
            </div>
        </div>
    )
}