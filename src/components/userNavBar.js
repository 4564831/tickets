import '../App.css'

export default function UNavigationBar() {
    return(
        <nav className="navigation-bar">
            <a href="/user/home"
                className="home">Home</a>
            <ul>
                <li>
                    <a href="/user/ticket/new">New Ticket</a>
                </li>
                <li>
                    <a href="/user/ticket/open">Open Tickets</a>
                </li>
                <li>
                    <a href="/user/ticket/closed">Closed Tickets</a>
                </li>
                <li>
                    <a href="/user/about=">About</a>
                </li>
                <li>
                    <a href="/">Log Out</a>
                </li>
            </ul>
        </nav>
    )
}
