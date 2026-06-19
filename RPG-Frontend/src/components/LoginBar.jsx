import { Link } from "react-router-dom"

const LoginBar = () => {
    return (
        <section id="login">
            <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        </section>
    )
}

export default LoginBar