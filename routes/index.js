var express = require('express');
var router = express.Router();
var Product = require('../models/Product');
var Category = require('../models/Category');

/* GET all products */
router.get('/products', function(req, res, next) {
  Product.getAllProducts(function (err, products) {
    if (err) next(err);

    if (products.length < 1) {
      return res.status(404).json({ message: "Products not found" })
    }

    res.json(products);
  });
});

/* GET all categories */
router.get('/categories', function(req, res, next) {
  Category.getAllCategories(function (err, categories) {
    if (err) next(err);

    if (categories.length < 1) {
      return res.status(404).json({ message: "Categories not found" })
    }

    res.json(categories);
  });
});

module.exports = router;
