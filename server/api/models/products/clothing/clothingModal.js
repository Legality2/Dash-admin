const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//new schema for beats

const clothingModel = new Schema({
    clothingType: {
        type: String,
        enum: ['Jackets', 'shirts', 'Pants'],
        default: 'Shirts'
    },
    image: {},
    imgPath: {type: String}, 
    createdByUser: {type: mongoose.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Clothing', clothingModel);