const mongoose = require('mongoose')

const charaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    fullname: {
        type: String,
        default: "-",
    },
    nicknames: {
        type: String,
        default: "-",
    },
    gender: {
        type: String,
        default: "-",
    },
    species: {
        type: String,
        default: "-",
    },
    nationality: {
        type: String,
        default: "-",
    },
    languages: {
        type: String,
        default: "-",
    },
    birthdate: {
        type: String,
        default: "-",
    },
    height: {
        type: String,
        default: "-",
    },
    weight: {
        type: String,
        default: "-",
    },
    mbti: {
        type: String,
        default: "-",
    },
    interests: {
        type: String,
        default: "-",
    },
    career: {
        type: String,
        default: "-",
    },
    relatives: {
        type: String,
        default: "-",
    },
    partner: {
        type: String,
        default: "-",
    },
    image: {
        type: String,
        default: "-",
    },
    lore: {
        type: String,
        default: "-",
    },
    gallery: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Gallery'
        }
    ],
    game: {
        type: String,
        default: "-",
    },
    public: {
        type: Boolean,
        default: false,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
})

charaSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    },
})

const Chara = mongoose.model('Chara', charaSchema)

module.exports = Chara