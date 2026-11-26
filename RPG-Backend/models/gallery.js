const mongoose = require('mongoose')

const gallerySchema = new mongoose.Schema({
    images: [
        {
            data: Buffer,
            contentType: String,
        }
    ],
    chara: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chara',
    },
})

gallerySchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Gallery = mongoose.model('Gallery', gallerySchema)

module.exports = Gallery