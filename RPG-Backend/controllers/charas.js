const charasRouter = require('express').Router()
const Chara = require('../models/chara')
const { userExtractor } = require('../utils/middleware')
const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

charasRouter.get('/', async (request, response) => {
    const charas = await Chara.find({})
        .select('-image.data')
        .populate('user', { username: 1 })

    response.json(
        charas.map(chara => ({
            ...chara.toJSON(),
            hasImage: Boolean(chara.image?.contentType)
        }))
    )
})

charasRouter.get('/:id', async (request, response) => {
    const chara = await Chara.findById(request.params.id)
    if (chara) {
        response.json(chara)
    } else {
        response.status(404).end()
    }
})

charasRouter.get('/:id/image', async (request, response) => {
    const chara = await Chara.findById(request.params.id)

    if (!chara || !chara.image || !chara.image.data) {
        return response.status(404).send('Image not found')
    }

    response.set('Content-Type', chara.image.contentType)

    response.send(chara.image.data)
})

charasRouter.post('/', userExtractor, upload.single('image'), async (request, response) => {
    const body = request.body
    const user = request.user
    const file = request.file

    const chara = new Chara({
        name: body.name, 
        fullname: body.fullname, 
        nicknames: body.nicknames,
        gender: body.gender,
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
        relative_desc: body.relative_desc,
        partner: body.partner,
        partner_desc: body.partner_desc,
        image: {
            data: file.buffer,
            contentType: file.mimetype
        },
        lore: body.lore,
        gallery: body.gallery,
        game: body.game,
        public: body.public,
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

charasRouter.put('/:id', upload.single('image'), async (request, response) => {
    const { 
        name, 
        fullname, 
        nicknames,
        gender,
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
        relative_desc,
        partner,
        partner_desc,
        lore,
        game,
        public
    } = request.body
    const file = request.file
    const chara = await Chara.findById(request.params.id).populate('user')

    if (!chara) {
        return response.status(404).json({ error: 'Character not found' })
    }

    chara.name = name
    chara.fullname = fullname
    chara.nicknames = nicknames
    chara.gender = gender
    chara.species = species
    chara.nationality = nationality
    chara.languages = languages
    chara.birthdate = birthdate
    chara.height = height
    chara.weight = weight
    chara.mbti = mbti
    chara.interests = interests
    chara.career = career
    chara.relatives = JSON.parse(relatives)
    chara.relative_desc = JSON.parse(relative_desc)
    chara.partner = JSON.parse(partner)
    chara.partner_desc = JSON.parse(partner_desc)
    if (file) {
        chara.image = {
            data: file.buffer,
            contentType: file.mimetype
        }
    }
    chara.lore = lore
    chara.game = game
    chara.public = public

    const updatedChara = await chara.save()
    await updatedChara.populate('user')
    response.json(updatedChara)
})

module.exports = charasRouter