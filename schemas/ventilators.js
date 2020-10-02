const mongoose = require("mongoose");

const ventilatorSchema = new mongoose.Schema({
    hId:{
        type: String,
        required: true,
        unique: true
    },
    ventilatorId:{
        type: String,
        required: true,
        unique: true
    },
    status:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('ventilators', ventilatorSchema);

