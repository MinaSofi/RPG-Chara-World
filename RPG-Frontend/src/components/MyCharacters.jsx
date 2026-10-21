import { Link, useParams } from "react-router-dom"

const MyCharacters = ({ charas, user }) => {
    return (
        <article>
            <h2>My characters</h2>
            <p>Statistics</p>
            <div id="charaBox">
                {charas.map((chara, index) => {
                    if(chara.user.username == user.username) {
                        return (
                            <div id="charaList" key={chara.name}>
                                <Link to={`/chara/${index}`}>
                                    <img src={chara.image}></img>
                                    <div id="charaName">{chara.name}</div>
                                </Link>
                            </div>
                        )
                    }
                })}
            </div>
        </article>
    )
}

export default MyCharacters