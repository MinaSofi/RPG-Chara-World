import Notification from "./Notification"
import { useState } from "react"

const AddCharacters = ({ createChara, user, message }) => {
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
    const [relative, setRelative] = useState([])
    const [partner, setPartner] = useState([])
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
                relatives: relative,
                partner: partner,
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
        setRelative('')
        setPartner('')
        setGame('')
        setPubl('')
    }

    return (
        <article>
            <form onSubmit={handleAdding} id="addForm">
                <h2>Add a character</h2>
                <p><i>(*) marks the fields that are required.</i></p>
                <label>
                    Name(*) :
                        <input
                            type="text"
                            value={name}
                            name="Name"
                            onChange={({ target }) => setName(target.value)}
                        />
                </label>
                <label>
                    Fullname :
                        <input
                            type="text"
                            value={fullname}
                            name="Fullname"
                            onChange={({ target }) => setFullname(target.value)}
                        />
                </label>
                <label>
                    Nickname(s) :
                        <input
                            type="text"
                            value={nickname}
                            name="Nickname"
                            onChange={({ target }) => setNickname(target.value)}
                        />
                </label>
                <label>
                    Gender :
                        <input
                            type="text"
                            value={gender}
                            name="Gender"
                            onChange={({ target }) => setGender(target.value)}
                        />
                </label>
                <label>
                    Species :
                        <input
                            type="text"
                            value={species}
                            name="Species"
                            onChange={({ target }) => setSpecies(target.value)}
                        />
                </label>
                <label>
                    Nationality :
                        <input
                            type="text"
                            value={nationality}
                            name="Nationality"
                            onChange={({ target }) => setNationality(target.value)}
                        />
                </label>
                <label>
                    Language(s) :
                        <input
                            type="text"
                            value={language}
                            name="Language"
                            onChange={({ target }) => setLanguage(target.value)}
                        />
                </label>
                <label>
                    Birthdate :
                        <input
                            type="text"
                            value={birthdate}
                            name="Birthdate"
                            onChange={({ target }) => setBirthdate(target.value)}
                        />
                </label>
                <label>
                    Height :
                        <input
                            type="text"
                            value={height}
                            name="Height"
                            onChange={({ target }) => setHeight(target.value)}
                        />
                </label>
                <label>
                    Weight :
                        <input
                            type="text"
                            value={weight}
                            name="Weight"
                            onChange={({ target }) => setWeight(target.value)}
                        />
                </label>
                <label>
                    MBTI :
                        <input
                            type="text"
                            value={mbti}
                            name="MBTI"
                            onChange={({ target }) => setMbti(target.value)}
                        />
                </label>
                <label>
                    Interests :
                        <input
                            type="text"
                            value={interests}
                            name="Interests"
                            onChange={({ target }) => setInterests(target.value)}
                        />
                </label>
                <label>
                    Career :
                        <input
                            type="text"
                            value={career}
                            name="Career"
                            onChange={({ target }) => setCareer(target.value)}
                        />
                </label>
                <label>
                    Relatives :
                        <div id="dropdown">
                            <div id="select">Select characters</div>
                            <div id="drop-content">
                                <label>
                                    <input type="checkbox" value={relative}/>
                                    <p>hi</p>
                                </label>
                                <label>
                                    <input type="checkbox" value={relative}/>
                                    <p>ha</p>
                                </label>
                                <label>
                                    <input type="checkbox" value={relative}/>
                                    <p>ho</p>
                                </label>
                            </div>
                        </div>
                </label>
                <label>
                    Partner(s) :
                        <div id="dropdown">
                            <div id="select">Select characters</div>
                            <div id="drop-content">
                                <label>
                                    <input type="checkbox" value={partner}/>
                                    <p>hi</p>
                                </label>
                                <label>
                                    <input type="checkbox" value={partner}/>
                                    <p>ha</p>
                                </label>
                                <label>
                                    <input type="checkbox" value={partner}/>
                                    <p>ho</p>
                                </label>
                            </div>
                        </div>
                </label>
                <label>
                    Game :
                        <input
                            type="text"
                            value={game}
                            name="Game"
                            onChange={({ target }) => setGame(target.value)}
                        />
                </label>
                <label>
                    Public(*) :
                        <label>
                            <input 
                                type="radio" 
                                value={false}
                                name="publ"
                                onChange={({ target }) => setPubl(target.value)}
                            />No
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                value={true}
                                name="publ"
                                onChange={({ target }) => setPubl(target.value)}
                            />Yes
                        </label>
                </label>
                <button type="submit">Add</button>
                <Notification message={message}/>
                <p>Don't worry! You can always edit your character's info later!</p>
            </form>
        </article>
    )
}

export default AddCharacters