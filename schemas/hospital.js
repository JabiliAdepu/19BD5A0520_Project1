const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);

const hospSchema = new mongoose.Schema({
    hId:{
        type: String,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true,
    },
    location:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    contactNo:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('hospital', hospSchema, 'hospital');

