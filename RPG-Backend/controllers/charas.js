const charasRouter = require('express').Router()
const Chara = require('../models/chara')
const { userExtractor } = require('../utils/middleware')

charasRouter.get('/', async (request, response) => {
  const charas = await Blog.find({}).populate('user', { username: 1 })
  response.json(charas)
})

charasRouter.get('/:id', async (request, response) => {
  const chara = await Chara.findById(request.params.id)
  if (chara) {
    response.json(chara)
  } else {
    response.status(404).end()
  }
})

charasRouter.post('/', userExtractor, async (request, response) => {
  const body = request.body
  const user = request.user

  const chara = new Chara({
    name: body.name, 
    fullname: body.fullname, 
    nicknames: body.nicknames,
    species: body.species, 
    nationality: body.nationality,
    languages: body.languages,
    birthdate: body.birthdate,
    height: body.height,
    weight: body.weight,
    mbti: body.mbti,
    interests: body.interests,
    career: body.career,
    relatives: body.relatives,
    partner: body.partner,
    user: user._id
  })

  const savedChara = await chara.save()
  const populatedChara = await savedChara.populate('user', { username: 1 })

  response.status(201).json(populatedChara)
})

charasRouter.delete('/:id', userExtractor, async (request, response) => {
  const user = request.user
  const chara = await Chara.findById(request.params.id)

  if (!chara) {
    return response.status(404).json({ error: 'Character not found' })
  }

  if (chara.user.toString() === user.id.toString()) {
    await Chara.findByIdAndDelete(request.params.id)
    user.charas = user.charas.filter(charaId => charaId.toString() !== request.params.id.toString())
    await user.save()
  } else {
    return response.status(403).json({ error: 'Only the creator can delete the character' })
  }

  response.status(204).end()
})

charasRouter.put('/:id', async (request, response) => {
  const { 
        name, 
        fullname, 
        nicknames,
        species, 
        nationality,
        languages,
        birthdate,
        height,
        weight,
        mbti,
        interests,
        career,
        relatives,
        partner,
        user 
    } = request.body
  const chara = await Chara.findById(request.params.id)

  if (!chara) {
    return response.status(404).json({ error: 'Character not found' })
  }

  chara.name = name
  chara.fullname = fullname
  chara.nicknames = nicknames
  chara.species = species
  chara.nationality = nationality
  chara.languages = languages
  chara.birthdate = birthdate
  chara.height = height
  chara.weight = weight
  chara.mbti = mbti
  chara.interests = interests
  chara.career = career
  chara.relatives = relatives
  chara.partner = partner
  chara.user = user

  const updatedChara = await chara.save()
  response.json(updatedChara)
})

module.exports = charasRouter