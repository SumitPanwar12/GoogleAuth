const mongoose = require('mongoose')

const alienSchema = new mongoose.Schema({

    name :{
        type: String,
        required: true
    },
    tech :{
        type: String,
        required: true
    },
    sub :{
        type: boolean,
        required: true,
        default: false
    }
})

module.export = mongoose.model("alien", alienSchema)