First Part
Node js application
To launch the app : 
npm install =====> to install dependencies
node app.js ======> to launch the app
port : 3000
Localhost : http://localhost:3000
_____________________________________________________
get all product : (Get) http://localhost:3000/api/product
add new product : (Post) http://localhost:3000/api/product
    exemple ==> json body ==>
    {
    "id" : 7,
    "name" : "new prod",
    "productTypeId" : 2,
    "assignedAttributesIds" : [1,2]
     }
     
update product : (Put) http://localhost:3000/api/product
    exemple ==> json body ==>
    {
    "id" : 1    ,
    "name" : "upadated prod",
    "productTypeId" : 1,
    "assignedAttributesIds" : [2]
    }
________________________________________________________________________________________________________
get all product types : (Get) http://localhost:3000/api/product-type
add new product types : (Post) http://localhost:3000/api/product-type
    exemple ==>  json body ==>
     {
    "id" : 4,
    "name" : "new type",
    "attributesIds" : [1,2]
    }
     
update product type : (Put) http://localhost:3000/api/product-type
    exemple ==> json body ==>
    {
    "id" : 1,
    "name" : "updated type",
    "attributesIds" : [2]
    }
