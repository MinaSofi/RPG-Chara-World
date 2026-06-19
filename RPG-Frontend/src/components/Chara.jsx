import { Link } from "react-router-dom"

const Chara = () => {
    return (
        <article>
            <Link to="/characters">
                <button id="backButton">Back</button>
            </Link>
            <h2 id="charaTitle">Character Page</h2>

            <div id="charaLayout">
                <h3>Adam</h3>
                <ul>
                    <li>
                        <div id="charaInfo">
                            <img src=""></img>
                        </div>
                    </li>
                    <li>
                        <div id="charaInfo">
                            <ul>
                                <li>Fullname: Adam Raymond Holland</li>
                                <li>Nickname(s): -</li>
                                <li>Species: Man-made Human</li>
                                <li>Nationality: American</li>
                                <li>Language(s): English</li>
                                <li>Birthdate: 13th of January 2755</li>
                                <li>Height: 183 cm</li>
                                <li>Weight: 76 kg</li>
                                <li>MBTI: ENFJ-A</li>
                                <li>Interests: </li>
                                <li>Career: Doctor</li>
                                <li>Relatives: -</li>
                                <li>Partner(s): <a href="../Characters/Sakura.html">Sakura</a> & 
                                <a href="../Characters/Petra.html">Petra</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>

            <div id="charaLore">
                <p>Lotsa lore here!</p>
            </div>

            <div id="charaGallery">
                <h3>Gallery</h3>
                <p>Lotsa pics here!</p>
            </div>

            <div id="charaOrigins">
                <h3>Game origins</h3>
                <p>Phantasy Star Online 2 New Genesis</p>
            </div>
        </article>
    )
}

export default Chara