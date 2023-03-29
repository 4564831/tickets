import { useLocation, useNavigate } from "react-router-dom";
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
            <li onClick={()=>navigate("/")}>Home</li>
            <li onClick={()=>navigate("/new")}>New Ticket</li>
            <li onClick={()=>navigate("/open")}>Open Tickets</li>
            <li onClick={()=>navigate("/closed")}>Closed Tickets</li>
            <li onClick={()=>navigate("/about")}>About</li>
            <li onClick={()=>navigate("/")}>Log Out</li>
          </ul>
        </div>
      </header>
    </div>
  );
}
