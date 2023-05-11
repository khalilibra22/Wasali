class ProductModel {
    constructor(id ,name, created_at, productType, assignedAttributes) {
        this.id = id  
        this.name = name;
        this.created_at = created_at;
        this.productType = productType;
        this.assignedAttributes = assignedAttributes;
    }
    
}

module.exports = 
{
    Product : ProductModel
}



