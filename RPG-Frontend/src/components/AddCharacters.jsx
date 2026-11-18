import InfoForm from "./InfoForm"
import { useState } from "react"

const AddCharacters = ({ createChara, user, message, charas }) => {
    const [name, setName] = useState('')
    const [fullname, setFullname] = useState('')
    const [nickname, setNickname] = useState('')
    const [gender, setGender] = useState('')
    const [species, setSpecies] = useState('')
    const [nationality, setNationality] = useState('')
    const [language, setLanguage] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [mbti, setMbti] = useState('')
    const [interests, setInterests] = useState('')
    const [career, setCareer] = useState('')
    const [selectedRelatives, setSelectedRelatives] = useState([])
    const [relative_desc, setRelative_desc] = useState('')
    const [selectedPartners, setSelectedPartners] = useState([])
    const [partner_desc, setPartner_desc] = useState('')
    const [game, setGame] = useState('')
    const [publ, setPubl] = useState(false)

    const handleAdding = (event) => {
        event.preventDefault()
        try {
            createChara({
                name: name,
                fullname: fullname,
                nicknames: nickname,
                gender: gender,
                species: species,
                nationality: nationality,
                languages: language,
                birthdate: birthdate,
                height: height,
                weight: weight,
                mbti: mbti,
                interests: interests,
                career: career,
                relatives: selectedRelatives,
                relative_desc: relative_desc,
                partner: selectedPartners,
                partner_desc: partner_desc,
                image: null,
                lore: null,
                gallery: null,
                game: game,
                public: publ,
                user: user
            })
            setTimeout(() => {
                resetFields()
            }, 2000)
        } catch (error) {
            console.log(`Error when creating character: ${error}`)
        }
    }

    const resetFields = () => {
        setName('')
        setFullname('')
        setNickname('')
        setGender('')
        setSpecies('')
        setNationality('')
        setLanguage('')
        setBirthdate('')
        setHeight('')
        setWeight('')
        setMbti('')
        setInterests('')
        setCareer('')
        setRelative_desc('')
        setSelectedRelatives([])
        setPartner_desc('')
        setSelectedPartners([])
        setGame('')
    }

    return (
        <article>
            <InfoForm
                charas={charas}
                user={user}
                handleAction={handleAdding}
                title="Add a character"
                hint="(*) marks the fields that are required."
                action="Add"
                message={message}
                text="Don't worry! You can always edit your character's info later!"
                name={name}
                setName={setName}
                fullname={fullname}
                setFullname={setFullname}
                nickname={nickname}
                setNickname={setNickname}
                gender={gender}
                setGender={setGender}
                species={species}
                setSpecies={setSpecies}
                nationality={nationality}
                setNationality={setNationality}
                language={language}
                setLanguage={setLanguage}
                birthdate={birthdate}
                setBirthdate={setBirthdate}
                height={height}
                setHeight={setHeight}
                weight={weight}
                setWeight={setWeight}
                mbti={mbti}
                setMbti={setMbti}
                interests={interests}
                setInterests={setInterests}
                career={career}
                setCareer={setCareer}
                selectedRelatives={selectedRelatives}
                setSelectedRelatives={setSelectedRelatives}
                relative_desc={relative_desc}
                setRelative_desc={setRelative_desc}
                selectedPartners={selectedPartners}
                setSelectedPartners={setSelectedPartners}
                partner_desc={partner_desc}
                setPartner_desc={setPartner_desc}
                game={game}
                setGame={setGame}
                setPubl={setPubl}
            />
        </article>
    )
}

export default AddCharacters