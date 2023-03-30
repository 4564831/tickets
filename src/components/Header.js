import { useLocation, useNavigate, Link } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
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
            <li><Link to="/">Logout</Link></li>
          </ul>
        </div>
      </header>
    </div>
  );
}
