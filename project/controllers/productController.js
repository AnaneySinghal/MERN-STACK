const products =require("../moduls/productModule");

exports.getProducts= (req,res)=>{
    res.json(products);
};

exports.addProducts=(req,res)=>{
    const product=req.body;
    console.log("product:",products);
    res.json({
        message:"Product added",
        product,
    });
    
};