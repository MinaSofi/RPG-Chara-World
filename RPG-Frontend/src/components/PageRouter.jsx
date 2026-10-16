import Home from "./Home"
import CharaList from "./CharaList"
import Media from "./Media"
import Chara from "./Chara"
import LoginForm from "./LoginForm"
import LoginBar from "./LoginBar"
import LoggedBar from "./LoggedBar"
import RegisterForm from "./RegisterForm"
import MyCharacters from "./MyCharacters"
import AddCharacters from "./AddCharacters"
import Settings from "./Settings"
import Nav from "./Nav"
import charaService from "../../services/charas"
import userService from "../../services/user"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate
} from "react-router-dom"
import { useState, useEffect, useRef } from "react"

const PageRouter = () => {
    const [user, setUser] = useState(null)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [charas, setCharas] = useState([])
    const [message, setMessage] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedRPGAppUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            charaService.setToken(user.token)
        }
        charaService.getAll().then(charas =>
            setCharas(charas)
        )
    }, [])

    const handleLogin = async (event) => {
        event.preventDefault()

        try {
            const user = await userService.login({
                username, password,
            })
            window.localStorage.setItem('loggedRPGAppUser', JSON.stringify(user))
            charaService.setToken(user.token)
            setUser(user)
            navigate('/')
            if(user) {
                setUsername('')
                setPassword('')
            }
        } catch (error) {
            setMessage('Wrong credentials!')
            console.log(error)
            setTimeout(() => {
                setMessage(null)
            }, 3000)
        }
    }

    const handleRegister = async (event) => {
        event.preventDefault()

        try {
            const user = await userService.register({
                username, password,
            })
            window.localStorage.setItem('loggedRPGAppUser', JSON.stringify(user))
            charaService.setToken(user.token)
            setUser(user)
            navigate('/login')
            if(user) {
                setUsername('')
                setPassword('')
            }
        } catch (error) {
            setMessage('Check the tip! Otherwise the username might be already taken! :(')
            console.log(error)
            setTimeout(() => {
                setMessage(null)
            }, 3000)
        }
    }

    const logout = () => {
        window.localStorage.removeItem('loggedRPGAppUser')
        charaService.setToken(null)
        setUser(null)
        navigate('/')
    }

    return (
        <>
            <header>
                <h1>
                    <Link to="/">RPG Chara World</Link>
                </h1>
            </header>

            {!user && <LoginBar/>}
            {user && <LoggedBar logout={logout}/>}

            <section>
                <Nav/>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/characters" element={<CharaList />} />
                    <Route path="/media" element={<Media />} />
                    <Route path="/chara" element={<Chara />} />
                    <Route path="/login" element={
                        <LoginForm
                            handleLogin={handleLogin}
                            handleUsernameSetting={({ target }) => setUsername(target.value)}
                            handlePasswordSetting={({ target }) => setPassword(target.value)}
                            username={username}
                            password={password}
                            message={message}
                        />
                    } />
                    <Route path="/register" element={
                        <RegisterForm
                            handleRegister={handleRegister}
                            handleUsernameSetting={({ target }) => setUsername(target.value)}
                            handlePasswordSetting={({ target }) => setPassword(target.value)}
                            username={username}
                            password={password}
                            message={message}
                        />
                    } />
                    <Route path="/my_characters" element={<MyCharacters />} />
                    <Route path="/add_characters" element={<AddCharacters />} />
                    <Route path="/profile_settings" element={<Settings />} />
                </Routes>
            </section>
        </>
    )
}

export default PageRouter