const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//product schema
const productSchema = new mongoose.Schema({
    product: {
        price: String,
        pType: {
            type: String,
            enum: ['Clothing', 'Beats', 'Music'],
            default: 'Clothing'
        },
        prod: { type: Schema.Types.ObjectId, ref: this.product.pType}
    }
});

module.exports = mongoose.model('Products', productSchema);