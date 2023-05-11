const router = require('express').Router();
let {
    GetAllProductTypes,
    GetAttributes
} = require("../Data/database");

const { ProductType } = require('../Models/productType');

router.get('/',(req,res)=>{
    res.send(GetAllProductTypes);
});

router.post('/',(req,res)=>{
    const jsonBody = req.body;
        let attributes = [];
        jsonBody.attributesIds.forEach(id => {
            let attribute = GetAttributes.find(att => att.id === id);
            attributes.push(attribute);
        }); 
        const newProductType = 
                new ProductType(jsonBody.id,jsonBody.name,new Date(),attributes);
        GetAllProductTypes.push(newProductType);
        res.send(newProductType);
});

router.put('/',(req,res)=>{
    const jsonBody = req.body;
    let attributes = [];
    jsonBody.attributesIds.forEach(id => {
        let attribute = GetAttributes.find(att => att.id === id);
        attributes.push(attribute);
    }); 
        let productType = GetAllProductTypes.find((pt) => pt.id === jsonBody.id);
        const updatedProductType = 
                new ProductType(jsonBody.id,jsonBody.name,productType.created_at,attributes);
        const index = GetAllProductTypes.indexOf(productType);
        if(index != -1){
            GetAllProductTypes.splice(index, 1,updatedProductType);
        }                
        res.send(updatedProductType);
});

module.exports = router;