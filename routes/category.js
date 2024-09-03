const express = require('express');
const { handlerGatAllCategory, handlerPostCategory } = require('../controllers/category');


const router = express.Router();


router.get('/', handlerGatAllCategory);

router.post ('/',handlerPostCategory);

module.exports = router;
