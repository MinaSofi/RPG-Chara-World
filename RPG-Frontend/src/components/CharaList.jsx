import ListedCharas from "./ListedCharas"

const CharaList = ({ charas, user }) => {
    return (
        <article>
            <h2 id="charaTitle">All the characters</h2>
            <ListedCharas charas={charas} user={user} page={'PublicCharacters'}/>
        </article>
    )
}

export default CharaList