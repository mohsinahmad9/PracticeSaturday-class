const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    product_id:Number,
    title:String,
    category_id:Number,
    price:Number,
    description:String,
})

module.exports = mongoose.model('product',ProductSchema);
