const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({

    category_id:Number,
    category : String,
})

module.exports = mongoose.model('category',CategorySchema);