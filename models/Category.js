const mongoose = require('mongoose');

let categorySchema = mongoose.Schema({
    _id: {
      type: String
    },
    name: {
        type: String
    }
});

var Category = module.exports = mongoose.model('Category', categorySchema);

// Temporary test data
var categoriesTestDataArray = [
    new Category({
        _id: "t-shirt",
        name: "T-Shirts Collection"
    }),
    new Category({
        _id: "jeans",
        name: "Jeans Collection"
    }),
    new Category({
        _id: "sweatshirt",
        name: "Sweatshirt Collection"
    }),
    new Category({
        _id: "shoes",
        name: "Shoes Collection"
    }),
    new Category({
        _id: "hoodie",
        name: "Hoodie Collection"
    }),
    new Category({
        _id: "accessories",
        name: "Accessories Collection"
    }),
];

module.exports.getAllCategories = function (callback) {
    Category.find(callback);
};

// Add test data array to DB
// Category.insertMany(categoriesTestDataArray, (err, categories) => {
//     if (err) throw err;
//
//     console.log(categories);
// });

// Find all categories
// Category.find({}, function(err, categories) {
//     if (err) throw err;
//
//     console.log(categories);
// });
