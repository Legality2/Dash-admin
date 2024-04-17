const musicSchema = require('../../models/products/music/musicModel');
const product = require('../../models/products/product');



//upload track by user
module.exports.uploadSingle = (d,f) => {
    var newMusic = new musicSchema({});
    var file = f
        newMusic.file = file;
        newMusic.metaInfo.trackName = d.trackName;
        newMusic.metaInfo.artist = d.artist;
        newMusic.metaInfo.ft = d.ft;  
        newMusic.metaInfo.path = '/files/' + file.filename;
        newMusic.save(function(err){
            if(err){console.log(err)}

            var newProd = new product({});

                newProd.name = newMusic.metaInfo.trackName;
                newProd.price = d.price;
                newProd.productType = 'Music';
                newProd.ref = newMusic._id;

                newProd.save(function(err){
                    if(err){console.log(err)}

                    console.log(newProd);
                    console.log(newMusic);
                });
        });
        return "music was created in db"
};

//list all tracks
module.exports.getAllTracks = async (req, res, next) => {
    musicSchema.find({}, function(err, tracks){
        if(err) {res.json(err)}
        var d = tracks;
        res.json({data: d});
    });
};

//list user tracks
module.exports.getUserTracks = async () => {

};

//remove track
module.exports.removeTrack = () => {

};
//edit track meta data info
module.exports.editTrack = () => {

};

