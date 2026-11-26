import axios from 'axios'

const baseUrl = '/api/charas'

let token = null

const setToken = newToken => {
    token = `Bearer ${newToken}`
}

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = async newObject => {
    const config = {
        headers: { Authorization: token },
    }

    const response = await axios.post(baseUrl, newObject, config)
    return response.data
}

const update = async (id, newObject, newImage) => {
    const formData = new FormData()
    console.log(newObject)

    formData.append('name', newObject.name)
    formData.append('fullname', newObject.fullname)
    formData.append('nicknames', newObject.nicknames)
    formData.append('gender', newObject.gender)
    formData.append('species', newObject.species)
    formData.append('nationality', newObject.nationality)
    formData.append('languages', newObject.languages)
    formData.append('birthdate', newObject.birthdate)
    formData.append('height', newObject.height)
    formData.append('weight', newObject.weight)
    formData.append('mbti', newObject.mbti)
    formData.append('interests', newObject.interests)
    formData.append('career', newObject.career)
    formData.append('relatives', JSON.stringify(newObject.relatives))
    formData.append('relative_desc', JSON.stringify(newObject.relative_desc))
    formData.append('partner', JSON.stringify(newObject.partner))
    formData.append('partner_desc', JSON.stringify(newObject.partner_desc))
    formData.append('lore', newObject.lore)
    formData.append('game', newObject.game)
    formData.append('public', newObject.public)
    
    if (newImage) {
        formData.append('image', newObject.image)
    }

    const response = await axios.put(`${baseUrl}/${id}`, formData)
    return response.data
}

const remove = async id => {
    const config = {
        headers: { Authorization: token },
    }

    await axios.delete(`${baseUrl}/${id}`, config)
}

export default { getAll, setToken, create, update, remove }