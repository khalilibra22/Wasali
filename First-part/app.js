const express = require('express');
const ProductService = require('./api/productService');
const ProductTypeService = require('./api/productTypeService');

const app = express();
app.use(express.json());

app.use('/api/product',ProductService);
app.use('/api/product-type',ProductTypeService);

const port = 3000;
app.listen(port, function () {
    console.log(`Server listening on port ${port}`);
  });

