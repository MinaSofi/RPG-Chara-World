import { useParams } from "react-router-dom"
import Chara from "./Chara"

const CharaForm = ({ charas, user, loading }) => {
    const { index } = useParams()

    if (loading) {
        return <p>Loading characters...</p>
    }

    const chara = charas[Number(index)]

    return <Chara chara={chara} user={user} />
}

export default CharaForm