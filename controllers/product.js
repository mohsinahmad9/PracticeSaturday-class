
const ProductModel = require('../models/Productuct');


const handlerGetProduct = async(req,res)=>{
    let data = await ProductModel.find();
    return res.send(data)
}
const handlerSearchProduct = async(req,res)=>{

    let data = await ProductModel.find({category_id:req.params.catid});
    return res.send(data)
}


const handlerPostProduct =  async(req, res)=>{
    let data = ProductModel(req.body);
    let result  = await data.save();
    return res.send({'status':'posted', result:result})
}

module.exports = {
    handlerGetProduct,
    handlerPostProduct,
    handlerSearchProduct
}