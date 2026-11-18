import EditCharacters from "./EditCharacters"
import { useState } from "react"
import { Link } from "react-router-dom"

const Chara = ({ chara, user, charas, message, editChara }) => {
    const [name, setName] = useState(chara.name)
    const [fullname, setFullname] = useState(chara.fullname)
    const [nickname, setNickname] = useState(chara.nicknames)
    const [gender, setGender] = useState(chara.gender)
    const [species, setSpecies] = useState(chara.species)
    const [nationality, setNationality] = useState(chara.nationality)
    const [language, setLanguage] = useState(chara.languages)
    const [birthdate, setBirthdate] = useState(chara.birthdate)
    const [height, setHeight] = useState(chara.height)
    const [weight, setWeight] = useState(chara.weight)
    const [mbti, setMbti] = useState(chara.mbti)
    const [interests, setInterests] = useState(chara.interests)
    const [career, setCareer] = useState(chara.career)
    const [selectedRelatives, setSelectedRelatives] = useState(chara.relatives)
    const [relative_desc, setRelative_desc] = useState(chara.relative_desc)
    const [selectedPartners, setSelectedPartners] = useState(chara.partner)
    const [partner_desc, setPartner_desc] = useState(chara.partner_desc)
    const [lore, setLore] = useState(chara.lore)
    const [game, setGame] = useState(chara.game)
    const [publ, setPubl] = useState(chara.publ)
    const [editing, setEditing] = useState(false)

    const printPeople = (desc) => {
        try {
            if (!desc || desc.length === 0) {
                return ""
            } else {
                return (
                    Object.entries(desc).map(([name, relation]) => 
                        ` ${name} (${relation})`)
                        .join(", ")
                )
            }
        } catch (error) {
            console.log(`Error printing relatives' info ${error}`)
        }
    }

    const editInfo = () => {
        setEditing(!editing)
        //console.log(chara)
    }

    const showEditButton = () => {
        if (chara.user.username === user.username) {
            return (
                <button id="editButton" onClick={editInfo}>Edit profile</button>
            )
        } else {
            return ""
        }
    }

    const showAddButton = () => {
        if (editing) {
            return (
                <button id="imageButton" onClick={editInfo}>Add image</button>
            )
        }
    }

    return (
        <article>
            <h2 id="charaTitle">Character Page</h2>
            <h3>{chara.name}</h3>

            <div id="charaLayout">
                <div id="charaPic">
                    <img src={chara.image}></img>
                    {showAddButton()}
                </div>

                <div id="charaInfo">
                    <ul>
                        <li>Fullname: {chara.fullname}</li>
                        <li>Nickname(s): {chara.nicknames}</li>
                        <li>Gender: {chara.gender}</li>
                        <li>Species: {chara.species}</li>
                        <li>Nationality: {chara.nationality}</li>
                        <li>Language(s): {chara.languages}</li>
                        <li>Birthdate: {chara.birthdate}</li>
                        <li>Height: {chara.height}</li>
                        <li>Weight: {chara.weight}</li>
                        <li>MBTI: {chara.mbti}</li>
                        <li>Interests: {chara.interests}</li>
                        <li>Career: {chara.career}</li>
                        <li>Relatives: {printPeople(chara.relative_desc)}</li>
                        <li>Partner(s): {printPeople(chara.partner_desc)}</li>
                    </ul>
                    {showEditButton()}
                </div>
            </div>

            <div id="charaLore">
                <h3>Lore</h3>
                <p>{chara.lore}</p>
            </div>

            <div id="charaEditing">
                {editing && <EditCharacters
                    editChara={editChara} 
                    id={chara.id}
                    user={user}
                    message={message}
                    charas={charas}
                    prevName={name}
                    prevFullname={fullname}
                    prevNickname={nickname}
                    prevGender={gender}
                    prevSpecies={species}
                    prevNationality={nationality}
                    prevLanguage={language}
                    prevBirthdate={birthdate}
                    prevHeight={height}
                    prevWeight={weight}
                    prevMbti={mbti}
                    prevInterests={interests}
                    prevCareer={career}
                    prevSelectedRelatives={selectedRelatives}
                    prevRelative_desc={relative_desc}
                    prevSelectedPartners={selectedPartners}
                    prevPartner_desc={partner_desc}
                    prevLore={lore}
                    prevGame={game}
                    prevPubl={publ}
                />}
            </div>

            <div id="charaGallery">
                <h3>Gallery</h3>
                <p>{chara.gallery}</p>
            </div>

            <div id="charaOrigins">
                <h3>Game origins</h3>
                <p>{chara.game}</p>
            </div>

            <div id="charaUser">
                <p>Added by {chara.user.username}</p>
            </div>
        </article>
    )
}

export default Chara