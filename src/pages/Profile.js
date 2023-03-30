import { useState } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import UserHome from "../pages/ClientSide/UserHome";

export default function Profile() {
  const auth=getAuth();
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  });
  const { name, email } = formData;
  function onLogout() {
    auth.signOut();
    navigate("/");
  }
  return (
    <>
      <h1>My Profile</h1>
      <div>
        <form>
          <div>
            <label>Name</label>
            <input type="text" id="name" value={name}/>
          </div>
          <div>
            <label>Email</label>
            <input type="text" id="name" value={email}/>
          </div>
        </form>
        <p onClick={onLogout}>Sign out</p>
      </div>
    </>
  )
}
