import { Link } from "react-router-dom"

const CharaList = () => {
    return (
        <article>
            <h2 id="charaTitle">All the characters</h2>
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

export default CharaList