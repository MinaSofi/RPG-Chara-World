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
    relatives: [
        {
            type: String,
            default: ""
        }
    ],
    relative_desc: {
        type: Object,
        default: ""
    },
    partner: [
        {
            type: String,
            default: ""
        }
    ],
    partner_desc: {
        type: Object,
        default: ""
    },
    image: {
        data: Buffer,
        contentType: String,
    },
    lore: {
        type: String,
        default: "-",
    },
    gallery: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Gallery'
    },
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
}, { timestamps: true })

charaSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()

        returnedObject.hasImage = Boolean(
            document.image?.data &&
            document.image.data.length > 0
        )

        delete returnedObject.image
        delete returnedObject._id
        delete returnedObject.__v
    },
})

const Chara = mongoose.model('Chara', charaSchema)

module.exports = Chara