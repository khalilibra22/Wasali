
//this file simulate a database

const {AttributeValue } = require("../Models/attributeValue");
const { AssignedAttribute } = require("../Models/assignedAttribute");
const { Attribute } = require("../Models/attribute");
const {Product } = require("../Models/product");
const {ProductType } = require("../Models/productType");

const attributeValue1 = new AttributeValue(1,'Assigned Attribute 1' , true ,new Date());
const attributeValue2 = new AttributeValue(2,'Assigned Attribute 2' , false ,new Date());

const attribute1 = new Attribute(1,"att1","t1",attributeValue1);
const attribute2 = new Attribute(2,"att2","t2",attributeValue1);
const attribute3 = new Attribute(3,"att3","t3",attributeValue2);

const productType1 = new ProductType(1,'food',new Date(),[attribute1,attribute2]);
const productType2 = new ProductType(2,'Tech',new Date(),[attribute3]);

const assignedAttribute1 = new AssignedAttribute(1,attributeValue1);
const assignedAttribute2 = new AssignedAttribute(2,attributeValue2);

const product1 = new Product (1,"prod1",new Date(),productType1,[assignedAttribute1,assignedAttribute2]);
const product2 = new Product (2,"prod2",new Date(),productType2,[assignedAttribute2]);

let productTypes = [productType1,productType2];
let products = [product1,product2];
let assignedAttributes = [assignedAttribute1,assignedAttribute2];
let attributes = [attribute1,attribute2,attribute3];
let attributeValues = [attributeValue1,attributeValue2]

module.exports = 
{
    GetAllProducts : products,
    GetAllProductTypes : productTypes,
    GetAssignedAttributes : assignedAttributes,
    GetAttributes : attributes,
    GetAttributeValues : attributeValues   
}