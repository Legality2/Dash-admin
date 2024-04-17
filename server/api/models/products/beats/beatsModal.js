const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//new schema for beats

const beatsModel = new Schema({
    producer: { type: String},
    song:{},
    songPath: {type: String}, 
    createdByUser: {type: mongoose.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Beats', beatsModel);