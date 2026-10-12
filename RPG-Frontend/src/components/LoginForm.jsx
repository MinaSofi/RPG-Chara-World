import Notification from "./Notification"
import { Link } from "react-router-dom"
import { useEffect } from "react"

const LoginForm = ({
    handleLogin,
    handleUsernameSetting,
    handlePasswordSetting,
    username,
    password,
    message
}) => {
    useEffect(() => {
        username = null
        password = null
        message = null
    }, [])
    
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
                <Notification message={message}/>
                <p>Don't have an account? <Link to="/register">Register</Link>!</p>
            </form>
        </article>
    )
}

export default LoginForm