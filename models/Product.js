const mongoose = require('mongoose');

let productSchema = mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number
    },
    color: {
        type: String
    },
    size: {
        type: String
    },
    imagesrc: {
        type: String
    }
});

let Product = module.exports = mongoose.model('Product', productSchema);

// Temporary test data
const productsTestDataArray = [
    new Product({
        name: 'Heavy Cotton T-Shirt',
        description: 'This is awesome Heavy Cotton T-Shirt',
        category: 't-shirt',
        price: 65,
        quantity: 15,
        color: "red",
        size: "xl",
        imagesrc: "/public/images/test-image.png"
    }),
    new Product({
        name: 'Ringer T-Shirt',
        description: 'This is awesome Ringer T-Shirt',
        category: 't-shirt',
        price: 40,
        quantity: 60,
        color: "red",
        size: "xl",
        imagesrc: "/public/images/test-image.png"
    }),
    new Product({
        name: 'Short Sleeve Baseball T-Shirt',
        description: 'This is awesome Short Sleeve Baseball T-Shirt',
        category: 't-shirt',
        price: 20,
        quantity: 80,
        color: "red",
        size: "xl",
        imagesrc: "/public/images/test-image.png"
    }),
    new Product({
        name: 'Raglan Sweatshirt',
        description: 'This is awesome Raglan Sweatshirt',
        category: 'sweatshirt',
        price: 30,
        quantity: 70,
        color: "red",
        size: "xl",
        imagesrc: "/public/images/test-image.png"
    }),
    new Product({
        name: 'Set-In Sweatshirt',
        description: 'This is awesome Set-In Sweatshirt',
        category: 'sweatshirt',
        price: 55,
        quantity: 80,
        color: "red",
        size: "xl",
        imagesrc: "/public/images/test-image.png"
    }),
    new Product({
        name: 'Zip Neck Sweat',
        description: 'This is awesome Zip Neck Sweat',
        category: 'sweatshirt',
        price: 10,
        quantity: 99,
        color: "red",
        size: "xl",
        imagesrc: "/public/images/test-image.png"
    })
];

module.exports.getAllProducts = function (callback) {
    Product.find(callback);
};

// Add test data array to DB
// Product.insertMany(productsTestDataArray, (err, products) => {
//     if (err) throw err;
//
//     console.log(products);
// });

// Find all products
// Product.find({}, function(err, products) {
//     if (err) throw err;
//
//     console.log(products);
// });
