const mongoose = require("mongoose");
const productModel = require('../../models/products/product');
const musicModel = require('../../models/products/music/musicModel');
const beatsModel = require('../../models/products/beats/beatsModel');
const clothingModel = require('../../models/products/clothing/clothingModal');
const productCtrl = {};


productCtrl.addProduct = async (req, res, next) => {
   
    console.log(req.body);
    try {
        let newProd = productModel({});
            newProd.product.productType = req.body.productType;
        switch (newProd.productType) {
            case 'Clothing':
                newProd.price = req.body.price;
                let newClothes = new clothingModel({})

                newClothes.save(function(err){
                    if(err) res.json(err);

                    res.json({msg:'new product clothes has been added'});
                })
                break;
            case 'Music':
                newProd.price = req.body.price;
                let newMusic = new musicModel({})


                newMusic.save(function(err){
                    if(err) res.json(err);

                    res.json({msg: 'new product music was added'});
                })
                break;
            case 'Beats':
                newProd.price = req.body.price;
                let newBeats = new beatsModel({})

                newBeats.save(function(err){
                    if(err) res.json(err);

                    res.json({msg: 'new beats product has been added'});
                })
                break;
            default:
                break;
        }
            
    } catch (e){
        console.log(e);
        next();
    }

};
productCtrl.getProducts = async (req, res, next) => {
    productModel.find({}, (err, prod) => {
        res.json(prod);
    })
};

productCtrl.deleteProduct = async (req, res, next) => {
    var id = req.query.id;
productModel.remove({ _id: id }, function (err) {
    if (err) {
        console.log(err);
        next();
    };
    // deleted at most one tank document
    console.log('product has beeen deleted');
    res.json({msg: 'product has been deleted succesfully'});
  });
};




module.exports = productCtrl;