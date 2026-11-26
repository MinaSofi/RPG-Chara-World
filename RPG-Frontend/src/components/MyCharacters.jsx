import ListedCharas from "./ListedCharas"

const MyCharacters = ({ charas, user }) => {
    return (
        <article>
            <h2>My characters</h2>
            <p>Statistics</p>
            <ListedCharas charas={charas} user={user} page={'MyCharacters'}/>
        </article>
    )
}

export default MyCharacters