import { Link } from "react-router-dom"

const MyCharacters = ({ charas, user }) => {

    const printCharas = () => {
        try {
            if (!charas || charas.length === 0) {
                return <p>You don't have any characters yet!</p>
            } else {
                return (
                    charas.map((chara) => {
                        if(chara.user.username === user.username) {
                            return (
                                <div id="charaList" key={chara.name}>
                                    <Link to={`/chara/${chara.id}`}>
                                        <img src={chara.image}></img>
                                        <div id="charaName">{chara.name}</div>
                                    </Link>
                                </div>
                            )
                        }
                    })
                )
            }
        } catch (error) {
            console.log(`Error printing mycharacters ${error}`)
        }
    }

    return (
        <article>
            <h2>My characters</h2>
            <p>Statistics</p>
            <div id="charaBox">
                {printCharas()}
            </div>
        </article>
    )
}

export default MyCharacters