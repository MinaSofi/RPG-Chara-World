import { Link } from "react-router-dom"

const LoggedBar = ({logout}) => {
    return (
        <section id="login">
            <ul>
                <li>
                    <Link to="/my_characters">My Characters</Link>
                </li>
                <li>
                    <Link to="/add_characters">Add Characters</Link>
                </li>
                <li>
                    <Link to="/profile_settings">Settings</Link>
                </li>
                <li>
                    <button onClick={logout}>Logout</button>
                </li>
            </ul>
        </section>
    )
}

export default LoggedBar