import { Link } from "react-router-dom"

const ListedCharas = ({ charas, user, page }) => {
    const myCharas = charas.filter(
        chara => chara.user.username === user.username
    )

    const publicCharas = charas.filter(
        chara => chara.public.toString() === "true"
    )

    const checkImages = (chara) => {
        if (chara.hasImage) {
            return (
                <Link to={`/chara/${chara.id}`}>
                    <img src={`/api/charas/${chara.id}/image?v=${chara.updatedAt}`}></img>
                    <div id="charaName">{chara.name}</div>
                </Link>
            )
        } else {
            return (
                <Link to={`/chara/${chara.id}`}>
                    <img></img>
                    <div id="charaName">{chara.name}</div>
                </Link>
            )
        }
    }

    const printCharas = () => {
        try {
            if (page === 'MyCharacters') {
                if (!myCharas || myCharas.length === 0) {
                    return <p>You don't have any characters yet!</p>
                } else {
                    return (
                        myCharas.map((chara) => {
                            return (
                                <div id="charaList" key={chara.id}>
                                    {checkImages(chara)}
                                </div>
                            )
                        })
                    )
                }
            } else if (page === 'PublicCharacters') {
                if (!publicCharas || publicCharas.length === 0) {
                    return <p>No public characters yet!</p>
                } else {
                    return (
                        publicCharas.map((chara) => {
                            return (
                                <div id="charaList" key={chara.id}>
                                    {checkImages(chara)}
                                </div>
                            )
                        })
                    )
                }
            }
        } catch (error) {
            console.log(`Error printing mycharacters ${error}`)
        }
    }

    return (
        <div id="charaBox">
            {printCharas()}
        </div>
    )
}

export default ListedCharas