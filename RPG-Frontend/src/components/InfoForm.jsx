import CharaDropdown from "./CharaDropdown"
import Notification from "./Notification"

const InfoForm = ({ 
    charas,
    user,
    handleAction, 
    title, 
    hint,
    action,
    message,
    text,
    name, 
    setName, 
    fullname, 
    setFullname, 
    nickname, 
    setNickname, 
    gender, 
    setGender, 
    species, 
    setSpecies, 
    nationality, 
    setNationality,
    language, 
    setLanguage, 
    birthdate, 
    setBirthdate,
    height, 
    setHeight, 
    weight, 
    setWeight,
    mbti, 
    setMbti, 
    interests, 
    setInterests,
    career, 
    setCareer, 
    selectedRelatives, 
    setSelectedRelatives,
    relative_desc, 
    setRelative_desc, 
    selectedPartners, 
    setSelectedPartners,
    partner_desc, 
    setPartner_desc, 
    game, 
    setGame,
    setPubl
}) => {
    
    return (
        <form onSubmit={handleAction} id="addForm">
            <h2>{title}</h2>
            <p><i>{hint}</i></p>
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
            <CharaDropdown
                    title="Relatives"
                    charas={charas}
                    user={user}
                    relation="Relative"
                    selectedPeople={selectedRelatives}
                    setSelectedPeople={setSelectedRelatives}
                    desc={relative_desc}
                    name="Relative_desc"
                    pholder="Relation to character..."
                    setting={setRelative_desc}
                />
                <CharaDropdown
                    title="Partner(s)"
                    charas={charas}
                    user={user}
                    relation="Partner"
                    selectedPeople={selectedPartners}
                    setSelectedPeople={setSelectedPartners}
                    desc={partner_desc}
                    name="Partner_desc"
                    pholder="Relationship w/ character..."
                    setting={setPartner_desc}
                />
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
            <button type="submit">{action}</button>
            <Notification message={message}/>
            <p>{text}</p>
        </form>
    )
}

export default InfoForm