import { Link } from "react-router-dom"

const Chara = ({ chara, user }) => {
    const editInfo = () => {
        if (user) {
            return "/my_characters"
        } else {
            return "/characters"
        }
    }

    return (
        <article>
            <h2 id="charaTitle">Character Page</h2>
            <h3>{chara.name}</h3>

            <div id="charaLayout">
                <div id="charaPic">
                    <img src={chara.image}></img>
                </div>

                <div id="charaInfo">
                    <ul>
                        <li>Fullname: {chara.fullname}</li>
                        <li>Nickname(s): {chara.nicknames}</li>
                        <li>Gender: {chara.gender}</li>
                        <li>Species: {chara.species}</li>
                        <li>Nationality: {chara.nationality}</li>
                        <li>Language(s): {chara.languages}</li>
                        <li>Birthdate: {chara.birthdate}</li>
                        <li>Height: {chara.height}</li>
                        <li>Weight: {chara.weight}</li>
                        <li>MBTI: {chara.mbti}</li>
                        <li>Interests: {chara.interests}</li>
                        <li>Career: {chara.career}</li>
                        <li>Relatives: {chara.relatives}</li>
                        <li>Partner(s): {chara.partner}</li>
                    </ul>
                    <button id="editButton" onClick={editInfo}>Edit profile</button>
                </div>
            </div>

            <div id="charaLore">
                <h3>Lore</h3>
                <p>{chara.lore}</p>
            </div>

            <div id="charaGallery">
                <h3>Gallery</h3>
                <p>{chara.gallery}</p>
            </div>

            <div id="charaOrigins">
                <h3>Game origins</h3>
                <p>{chara.game}</p>
            </div>

            <div id="charaUser">
                <p>Added by {chara.user.username}</p>
            </div>
        </article>
    )
}

export default Chara