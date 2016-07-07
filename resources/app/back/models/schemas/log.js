const mongoose = require('mongoose')
const schemaDefinition = {
    accessType:{
        type:String,
        enum:['access','exit']
    },
    date:{
        type:'Date',
        default: Date.now
    }
}
const schema = new mongoose.Schema(schemaDefinition)
const Log = mongoose.model('Log', schema, 'Log');