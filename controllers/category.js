const CategoryModel = require('../models/Category');


const handlerGatAllCategory = async (req,res)=>{
    let data = await CategoryModel.find();
    return res.send(data)
}

const handlerPostCategory = async (req,res)=>{

    let data = CategoryModel(req.body);
    let result = await data.save();
    return res.send({status : result});
}


module.exports = {
    handlerGatAllCategory,
    handlerPostCategory,
}