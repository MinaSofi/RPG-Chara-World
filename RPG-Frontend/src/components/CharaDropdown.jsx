const CharaDropdown = ({
    title,
    charas,
    user,
    relation,
    selectedPeople,
    setSelectedPeople,
    desc,
    name,
    pholder,
    setting
}) => {

    const printRelation = (selectedPeople, desc, name, pholder, setting) => {
        try {
            if (!selectedPeople || selectedPeople.length === 0) {
                return ""
            } else {
                return (
                    selectedPeople.map((relative) => (
                        <label id="relation-content" key={relative}>
                            {relative}
                            <input
                                type="text"
                                value={desc[relative]}
                                name={name}
                                placeholder={pholder}
                                onChange={({ target }) => setting(prev => ({
                                    ...prev,
                                    [relative]: target.value
                                }))}
                            />
                        </label>
                    ))
                )
            }
        } catch (error) {
            console.log(`Error printing relatives ${error}`)
        }
    }

    const printDropdown = () => {
        try {
            if (!charas || charas.length === 0) {
                return ""
            } else {
                return (
                    charas.map((chara, index) => {
                        if (chara.user.username == user.username) {
                            return (
                                <label id="label-dropdown" key={index}>
                                    <input 
                                        type="checkbox"
                                        value={chara.name}
                                        name={relation}
                                        checked={selectedPeople.includes(chara.name)}
                                        onChange={({target}) => {
                                            if (target.checked) {
                                                setSelectedPeople(prev => [
                                                    ...prev,
                                                    target.value
                                                ])
                                            } else {
                                                setSelectedPeople(prev => 
                                                    prev.filter(relation => relation !== target.value)
                                                )
                                            }
                                        }}
                                    />
                                    <p>{chara.name}</p>
                                </label>
                            )
                        }
                    })
                )
            }
        } catch (error) {
            console.log(`Error creating dropdowns ${error}`)
        }
    }

    return (
        <>
            <label>
                {title} :
                    <div id="dropdown">
                        <div id="select">Select characters</div>
                        <div id="drop-content">
                            {printDropdown()}
                        </div>
                    </div>
            </label>
            {printRelation(selectedPeople, desc, name, pholder, setting)}
        </>
    )
}

export default CharaDropdown