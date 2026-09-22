import { Link } from "react-router-dom"

const MyCharacters = () => {
    return (
        <article>
            <h2>My characters</h2>
            <p>Statistics</p>
            <div id="charaBox">
                <div id="charaList">
                    <Link to="/chara">
                        <img src=""></img>
                        <div id="charaName">Adam</div>
                    </Link>
                </div>
                <div id="charaList">
                    <Link to="/chara">
                        <img src=""></img>
                        <div id="charaName">Adam</div>
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default MyCharacters