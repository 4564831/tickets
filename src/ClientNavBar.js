import './App.css'

export default function UNavigationBar() {
    return(
        <nav className="navigation-bar">
            <a href="/Y2xpZW50aG9tZQ=="
                className="home">Home</a>
            <ul>
                <li>
                    <a href="/Y2xpZW50bmV3dGlja2V0">New Ticket</a>
                </li>
                <li>
                    <a href="/Y2xpZW50b3BlbnRpY2tldA==">Open Tickets</a>
                </li>
                <li>
                    <a href="/Y2xpZW50Y2xvc2VkdGlja2V0">Closed Tickets</a>
                </li>
                <li>
                    <a href="/Y2xpZW50YWJvdXQ=">About</a>
                </li>
            </ul>
        </nav>
    )
}