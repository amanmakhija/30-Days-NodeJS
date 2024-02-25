// 25. Problem: Mongoose Indexing

// Problem Statement: Implement indexing on the "name"
// field of the "Product" collection to optimize query
// performance. Write a function to create the index.

// Solution:

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
const productSchema = new Schema({
    name: String,
    price: Number
});
const Product = mongoose.model('Product', productSchema);

/**
 * Creates an index on the "name" field of the "Product" collection in MongoDB
 */
function createProductNameIndex() {
    // Your implementation here
    Product.collection.createIndex({ name: 1 })
        .then((result) => {
            console.log('\nIndex created successfully');
        })
        .catch((error) => {
            console.log(error);
        });
}

// Call the function
createProductNameIndex();

// Expected Output:

// 1. The function should create an index on the "name"
// field of the "Product" collection.

// Test Cases:

// 1. Call the function and check the MongoDB database for
// the created index.

// Hint:

// Get access to your Mongoose Product model.

// Use the createIndex method on the name field of the
// Product collection.

// Provide a callback function to handle the result.