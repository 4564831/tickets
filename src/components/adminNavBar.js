import '../App.css'

export default function INavigationBar() {
    return(
        <nav className="navigation-bar">
            <a href="/admin/home"
                className="home">Home</a>
            <ul>
                <li>
                    <a href="/admin/ticket/open">Open Tickets</a>
                </li>
                <li>
                    <a href="/admin/ticket/closed">Closed Tickets</a>
                </li>
                <li>
                    <a href="/admin/about">About</a>
                </li>
                <li>
                    <a href="/">Log Out</a>
                </li>
            </ul>
        </nav>
    )
}
