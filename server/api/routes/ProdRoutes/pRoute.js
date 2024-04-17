const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const path = require('path');
const multer = require('multer');
const mongoose = require('mongoose');
const productCtrl = require('../../controllers/product/productCtrl');
const musicCtrl = require('../../controllers/music/musicCtrl');
const storage = multer.diskStorage({
    destination: '../../../../files',
     filename: function (req, file, cb) {
       console.log(file);
      crypto.pseudoRandomBytes(16, function (err, raw) {
        if (err) return cb(err)
          cb(null, raw.toString('hex') + path.extname(file.originalname))
  
      });
    }
  });
  
  const upload = multer({storage});
//get all products
    router.get('/products', productCtrl.getProducts);

//post
    router.post('/products', upload.single('upl'), productCtrl.addProduct)

//put

//delete
router.delete('/products/:id', productCtrl.deleteProduct);


module.exports = router;