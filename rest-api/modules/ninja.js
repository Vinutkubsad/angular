const mongoose = require('mongoose');
const Schima = mongoose.Schema;


//create ninja Schena && model

const NinjaSchema = new Schima({
    name:{
        type: String,
        required: [true,'Name fild is required']
    },
    rank:{
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        default: false
    }
    //add geolocation
});

//add db
const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;

