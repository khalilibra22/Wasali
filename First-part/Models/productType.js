
class ProductTypeModel 
{
    constructor(id,name, created_at,attributes) {
        this.id = id;
        this.name = name;
        this.created_at = created_at;
        this.attributes = attributes;
    
    }
}

module.exports = {
    ProductType : ProductTypeModel
}

