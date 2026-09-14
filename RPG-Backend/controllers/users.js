const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (request, response) => {
    const users = await User.find({}).populate('charas', { 
        name: 1, 
        fullname: 1, 
        nicknames: 1,
        species: 1, 
        nationality: 1,
        languages: 1,
        birthdate: 1,
        height: 1,
        weight: 1,
        mbti: 1,
        interests: 1,
        career: 1,
        relatives: 1,
        partner: 1,
        user: 1
    })
    response.json(users)
})

usersRouter.post('/', async (request, response, next) => {
    try {
        const { username, name, password } = request.body

        const saltRounds = 10
        const passwordHash = await bcrypt.hash(password, saltRounds)

        const user = new User({
            username,
            name,
            passwordHash,
        })

        const savedUser = await user.save()

        response.status(201).json(savedUser)
    } catch (error) {
        next(error)
    }
})

module.exports = usersRouter