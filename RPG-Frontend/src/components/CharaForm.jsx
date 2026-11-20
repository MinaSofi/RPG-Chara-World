import { useParams } from "react-router-dom"
import Chara from "./Chara"

const CharaForm = ({ 
    charas, 
    user, 
    loading, 
    message, 
    editChara, 
    deleteChara
}) => {
    const { id } = useParams()

    if (loading) {
        return <p>Loading your beautiful creations...</p>
    }

    const chara = charas.find(chara => chara.id === id)

    if (!chara) {
        return (
            <article>
                <p>Hmm... Seems like this character went missing!</p>
            </article>
        )
    }

    return (
        <Chara 
            key={chara.id}
            chara={chara} 
            user={user} 
            charas={charas} 
            message={message}
            editChara={editChara}
            deleteChara={deleteChara}
        />
    )
}

export default CharaForm