import { useParams } from "react-router-dom"
import Chara from "./Chara"

const CharaForm = ({ charas, user, loading, message, editChara }) => {
    const { id } = useParams()

    if (loading) {
        return <p>Loading your beautiful creations...</p>
    }

    const chara = charas.find(chara => chara.id === id)

    if (!chara) {
        return <p>Hmm... Seems like this character went missing!</p>
    }

    return (
        <Chara 
            key={chara.id}
            chara={chara} 
            user={user} 
            charas={charas} 
            message={message}
            editChara={editChara}
        />
    )
}

export default CharaForm