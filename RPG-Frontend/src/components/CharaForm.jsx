import { useParams } from "react-router-dom"
import Chara from "./Chara"

const CharaForm = ({ charas, user }) => {
    const { index } = useParams()

    const chara = charas[Number(index)]

    return <Chara chara={chara} user={user} />
}

export default CharaForm