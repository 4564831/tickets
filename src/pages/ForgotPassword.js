import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  function onChange(e) {
    setEmail(e.target.value);
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      console.log("Email was sent");
    } catch (error) {
      console.log("Could not send reset password");
    }
  }
  return (
    <div>
      <h1>Forgot Password</h1>
        <div>
          <form onSubmit={onSubmit}>
            <label>email address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email address"
            />
            <button type="submit">
              Send reset password
            </button>
          </form>
        </div>
        <OAuth />
    </div>
  );
}
