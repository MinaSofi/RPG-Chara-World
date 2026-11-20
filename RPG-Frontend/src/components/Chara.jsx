import EditCharacters from "./EditCharacters"
import { useState } from "react"
import { Link } from "react-router-dom"

const Chara = ({ chara, user, charas, message, editChara, deleteChara }) => {
    const [editing, setEditing] = useState(false)
    const [lore, setLore] = useState(chara.lore)

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
    }

    const showEditButton = () => {
        if (chara.user.username === user.username) {
            return (
                <button id="editButton" onClick={editInfo}>Edit profile</button>
            )
        }
    }

    const showDeleteButton = () => {
        if (editing) {
            return (
                <button id="deleteButton" onClick={() => deleteChara(chara.id)}>Delete</button>
            )
        }
    }

    const showAddImageButton = () => {
        if (editing) {
            return (
                <button id="imageButton" onClick={editInfo}>Add image</button>
            )
        }
    }

    const showAddLore = () => {
        if (editing) {
            return (
                <label>
                    <textarea
                        id="loreInput"
                        value={lore}
                        name="Lore"
                        onChange={({ target }) => setLore(target.value)}
                    />
                </label>
            )
        }
    }

    return (
        <article>
            <h2 id="charaTitle">Character Page</h2>
            <h3>{chara.name}</h3>

            <div id="charaLayout">
                <div id="charaPic">
                    <img src={chara.image} alt="No image added"></img>
                    {showAddImageButton()}
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
                    {showDeleteButton()}
                </div>
            </div>

            <div id="charaLore">
                <h3>Lore</h3>
                <p>{chara.lore}</p>
                {showAddLore()}
            </div>

            <div id="charaEditing">
                {editing && <EditCharacters
                    editChara={editChara} 
                    id={chara.id}
                    user={user}
                    message={message}
                    charas={charas}
                    lore={lore}
                    prevName={chara.name}
                    prevFullname={chara.fullname}
                    prevNickname={chara.nicknames}
                    prevGender={chara.gender}
                    prevSpecies={chara.species}
                    prevNationality={chara.nationality}
                    prevLanguage={chara.languages}
                    prevBirthdate={chara.birthdate}
                    prevHeight={chara.height}
                    prevWeight={chara.weight}
                    prevMbti={chara.mbti}
                    prevInterests={chara.interests}
                    prevCareer={chara.career}
                    prevSelectedRelatives={chara.relatives}
                    prevRelative_desc={chara.relative_desc}
                    prevSelectedPartners={chara.partner}
                    prevPartner_desc={chara.partner_desc}
                    prevGame={chara.game}
                    prevPubl={chara.publ}
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