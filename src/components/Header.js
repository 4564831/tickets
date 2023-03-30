import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Header() {
  const [pageState, setPageState] = useState("Sign in");
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("My Profile");
      } else {
        setPageState("Sign in");
      }
    });
  }, [auth]);
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div>
      <header>
        <h1>NavBar Component</h1>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/new">New Tickets</Link></li>
            <li><Link to="/open">Open Tickets</Link></li>
            <li><Link to="/closed">Closed Tickets</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/profile">{pageState}</Link></li>
          </ul>
        </div>
      </header>
    </div>
  );
}
