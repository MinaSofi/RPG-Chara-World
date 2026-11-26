import InfoForm from "./InfoForm"
import { useState } from "react"

const EditCharacters = ({ 
    editChara, 
    id,
    user, 
    message, 
    charas,
    lore, 
    image,
    newImage,
    prevName,
    prevFullname,
    prevNickname,
    prevGender,
    prevSpecies,
    prevNationality,
    prevLanguage,
    prevBirthdate,
    prevHeight,
    prevWeight,
    prevMbti,
    prevInterests,
    prevCareer,
    prevSelectedRelatives,
    prevRelative_desc,
    prevSelectedPartners,
    prevPartner_desc,
    prevGame,
    prevPubl
}) => {
    const [name, setName] = useState(prevName)
    const [fullname, setFullname] = useState(prevFullname)
    const [nickname, setNickname] = useState(prevNickname)
    const [gender, setGender] = useState(prevGender)
    const [species, setSpecies] = useState(prevSpecies)
    const [nationality, setNationality] = useState(prevNationality)
    const [language, setLanguage] = useState(prevLanguage)
    const [birthdate, setBirthdate] = useState(prevBirthdate)
    const [height, setHeight] = useState(prevHeight)
    const [weight, setWeight] = useState(prevWeight)
    const [mbti, setMbti] = useState(prevMbti)
    const [interests, setInterests] = useState(prevInterests)
    const [career, setCareer] = useState(prevCareer)
    const [selectedRelatives, setSelectedRelatives] = useState(prevSelectedRelatives)
    const [relative_desc, setRelative_desc] = useState(prevRelative_desc)
    const [selectedPartners, setSelectedPartners] = useState(prevSelectedPartners)
    const [partner_desc, setPartner_desc] = useState(prevPartner_desc)
    const [game, setGame] = useState(prevGame)
    const [publ, setPubl] = useState(prevPubl)

    const handleEditing = (event) => {
        event.preventDefault()
        try {
            editChara({
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
                image: image,
                lore: lore,
                game: game,
                public: publ,
                id: id
            }, newImage)
        } catch (error) {
            console.log(`Error when handling editing character: ${error}`)
        }
    }

    return (
        <InfoForm
            charas={charas}
            user={user}
            handleAction={handleEditing}
            title="Edit your character"
            hint="(*) marks the fields that are required."
            action="Edit"
            message={message}
            text="Be sure to press the edit button to save your changes!"
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
    )
}

export default EditCharacters