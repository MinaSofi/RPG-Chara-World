import Home from "./Home"
import CharaList from "./CharaList"
import Media from "./Media"
import Chara from "./Chara"
import LoginForm from "./LoginForm"
import LoginBar from "./LoginBar"
import RegisterForm from "./RegisterForm"
import Nav from "./Nav"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom"

const PageRouter = () => {
    return (
        <Router>
            <header>
                <h1>
                    <Link to="/">RPG Chara World</Link>
                </h1>
            </header>

            <LoginBar/>

            <section>
                <Nav/>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/characters" element={<CharaList />} />
                    <Route path="/media" element={<Media />} />
                    <Route path="/chara" element={<Chara />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/register" element={<RegisterForm />} />
                </Routes>
            </section>
        </Router>
    )
}

export default PageRouter