const express = require('express');

const {handlerGetProduct, handlerPostProduct, handlerSearchProduct} = require('../controllers/product')

const router = express.Router()

router.get('/', handlerGetProduct);
router.get('/search/:catid', handlerSearchProduct)
router.post('/', handlerPostProduct);




module.exports = router;