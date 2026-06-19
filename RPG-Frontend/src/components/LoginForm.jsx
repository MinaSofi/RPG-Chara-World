import { Link } from "react-router-dom"

const LoginForm = ({
    handleLogin,
    handleUsernameSetting,
    handlePasswordSetting,
    username,
    password
}) => {
    return (
        <article>
            <form onSubmit={handleLogin}>
                <h2>Login page</h2>
                <div>
                    <label>
                        Username :
                            <input
                                type="text"
                                value={username}
                                name="Username"
                                onChange={handleUsernameSetting}
                            />
                    </label>
                </div>
                <div>
                    <label>
                        Password :
                            <input
                                type="password"
                                value={password}
                                name="Password"
                                onChange={handlePasswordSetting}
                            />
                    </label>
                </div>
                <button type="submit">Login</button>
                <p>Don't have an account? <Link to="/register">Register</Link>!</p>
            </form>
        </article>
    )
}

export default LoginForm