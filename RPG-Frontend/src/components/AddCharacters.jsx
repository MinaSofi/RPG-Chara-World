import { Link } from "react-router-dom"

const AddCharacters = ({ 
    handleAdding, 
    name, 
    handleNameSetting, 
    fullname,
    handleFullnameSetting,
    nickname,
    handleNicknameSetting,
    gender,
    handleGenderSetting,
    species,
    handleSpeciesSetting,
    nationality,
    handleNationalitySetting,
    language,
    handleLanguageSetting,
    birthdate,
    handleBirthdateSetting,
    height,
    handleHeightSetting,
    weight,
    handleWeightSetting,
    mbti,
    handleMBTISetting,
    interests,
    handleInterestsSetting,
    career,
    handleCareerSetting,
    relative,
    partner,
    game,
    handleGameSetting,
    publ
}) => {
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
                            onChange={handleNameSetting}
                        />
                </label>
                <label>
                    Fullname :
                        <input
                            type="text"
                            value={fullname}
                            name="Fullname"
                            onChange={handleFullnameSetting}
                        />
                </label>
                <label>
                    Nickname(s) :
                        <input
                            type="text"
                            value={nickname}
                            name="Nickname"
                            onChange={handleNicknameSetting}
                        />
                </label>
                <label>
                    Gender :
                        <input
                            type="text"
                            value={gender}
                            name="Gender"
                            onChange={handleGenderSetting}
                        />
                </label>
                <label>
                    Species :
                        <input
                            type="text"
                            value={species}
                            name="Species"
                            onChange={handleSpeciesSetting}
                        />
                </label>
                <label>
                    Nationality :
                        <input
                            type="text"
                            value={nationality}
                            name="Nationality"
                            onChange={handleNationalitySetting}
                        />
                </label>
                <label>
                    Language(s) :
                        <input
                            type="text"
                            value={language}
                            name="Language"
                            onChange={handleLanguageSetting}
                        />
                </label>
                <label>
                    Birthdate :
                        <input
                            type="text"
                            value={birthdate}
                            name="Birthdate"
                            onChange={handleBirthdateSetting}
                        />
                </label>
                <label>
                    Height :
                        <input
                            type="text"
                            value={height}
                            name="Height"
                            onChange={handleHeightSetting}
                        />
                </label>
                <label>
                    Weight :
                        <input
                            type="text"
                            value={weight}
                            name="Weight"
                            onChange={handleWeightSetting}
                        />
                </label>
                <label>
                    MBTI :
                        <input
                            type="text"
                            value={mbti}
                            name="MBTI"
                            onChange={handleMBTISetting}
                        />
                </label>
                <label>
                    Interests :
                        <input
                            type="text"
                            value={interests}
                            name="Interests"
                            onChange={handleInterestsSetting}
                        />
                </label>
                <label>
                    Career :
                        <input
                            type="text"
                            value={career}
                            name="Career"
                            onChange={handleCareerSetting}
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
                            onChange={handleGameSetting}
                        />
                </label>
                <label>
                    Public(*) :
                        <label>
                            <input 
                                type="radio" 
                                value={publ}
                                name="publ"
                            />No
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                value={publ}
                                name="publ"
                            />Yes
                        </label>
                </label>
                <button type="submit">Add</button>
                <p>Don't worry! You can always edit your character's info later!</p>
            </form>
        </article>
    )
}

export default AddCharacters