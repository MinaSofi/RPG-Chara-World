import { Link } from "react-router-dom"

const RegisterForm = ({
    handleRegister,
    handleUsernameSetting,
    handlePasswordSetting,
    username,
    password
}) => {
    return (
        <article>
            <form onSubmit={handleRegister}>
                <h2>Register page</h2>
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
                <button type="submit">Register</button>
                <p>Already have an account? <Link to="/login">Login</Link>!</p>
            </form>
        </article>
    )
}

export default RegisterForm