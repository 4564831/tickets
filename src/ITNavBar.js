import './App.css'

export default function INavigationBar() {
    return(
        <nav className="navigation-bar">
            <a href="/aXRob21l"
                className="home">Home</a>
            <ul>
                <li>
                    <a href="/aXRvcGVudGlja2V0cw==">Open Tickets</a>
                </li>
                <li>
                    <a href="/aXRjbG9zZWR0aWNrZXRz">Closed Tickets</a>
                </li>
                <li>
                    <a href="/aXRhYm91dA==">About</a>
                </li>
                <li>
                    <a href="/">Log Out</a>
                </li>
            </ul>
        </nav>
    )
}