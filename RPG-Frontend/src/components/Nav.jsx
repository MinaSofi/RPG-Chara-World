import Home from "./Home"
import CharaList from "./CharaList"
import Media from "./Media"
import Chara from "./Chara"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
} from "react-router-dom"

const Nav = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" activeClassName="active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/characters" activeClassName="active">Characters</NavLink>
                    </li>
                    <li>
                        <NavLink to="/media" activeClassName="active">Media</NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/characters" element={<CharaList />} />
                <Route path="/media" element={<Media />} />
                <Route path="/chara" element={<Chara />} />
            </Routes>
        </Router>
    )
}

export default Nav