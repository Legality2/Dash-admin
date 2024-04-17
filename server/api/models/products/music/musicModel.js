const mongoose = require('mongoose');

let musicModel = new mongoose.Schema({
    artist: {
        type: String,
        required: true
    },
    ft: {type: String},
    song:{},
    songPath: {type: String}, 
    createdByUser: {type: mongoose.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Music', musicModel);