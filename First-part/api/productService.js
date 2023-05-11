const router = require('express').Router();
let {
    GetAllProducts,
    GetAllProductTypes,
    GetAssignedAttributes,
} = require("../Data/database");
const { Product } = require('../Models/product');

router.get('/',(req,res)=>{
    res.send(GetAllProducts);
});

router.post('/',(req,res)=>{
    const jsonBody = req.body;
    const productType = GetAllProductTypes.find(pt => pt.id === jsonBody.productTypeId);
        let assignedAttributes = [];
        jsonBody.assignedAttributesIds.forEach(id => {
            let assignedAttribute = GetAssignedAttributes.find(pt => pt.id === id);
            assignedAttributes.push(assignedAttribute);
        }); 
        const newProduct = 
                new Product(jsonBody.id,jsonBody.name,new Date(),productType,assignedAttributes);
        GetAllProducts.push(newProduct);
        res.send(newProduct);
});

router.put('/',(req,res)=>{
    const jsonBody = req.body;
    const id = req.body.id;
    const productType = GetAllProductTypes.find(pt => pt.id === jsonBody.productTypeId);
        let assignedAttributes = [];
        jsonBody.assignedAttributesIds.forEach(id => {
            let assignedAttribute = GetAssignedAttributes.find(pt => pt.id === id);
            assignedAttributes.push(assignedAttribute);
        });
        let product = GetAllProducts.find((p) => p.id == id);
        const updatedProduct = 
                new Product(id,jsonBody.name,product.created_at,productType,assignedAttributes);
        const index = GetAllProducts.indexOf(product);
        if(index != -1){
            GetAllProducts.splice(index, 1,updatedProduct);
        }                
        res.send(updatedProduct);
});

module.exports = router;