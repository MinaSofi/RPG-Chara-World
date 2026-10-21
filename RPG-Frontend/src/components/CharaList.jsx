import { Link, useParams } from "react-router-dom"

const CharaList = ({ charas }) => {
    return (
        <article>
            <h2 id="charaTitle">All the characters</h2>
            <div id="charaBox">
                {charas.map((chara, index) => {
                    if(chara.public.toString() == "true") {
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

export default CharaList