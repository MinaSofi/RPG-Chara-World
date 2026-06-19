import { NavLink } from "react-router-dom"

const Nav = () => {
    return (
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
    )
}

export default Nav