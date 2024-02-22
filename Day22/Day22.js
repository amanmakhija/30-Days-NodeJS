// 22. Problem: MongoDB CRUD Operations

// Problem Statement: Implement a set of CRUD(Create, Read,
// Update, Delete) operations for a "Product" entity using
// MongoDB and Mongoose. Define a Mongoose schema for the
// product with properties like "name," "price," and
// "quantity." Implement functions to create, read, update,
// and delete products.

// Solution:

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/products', { useNewUrlParser: true, useUnifiedTopology: true });
const productSchema = new mongoose.Schema({
    product_id: Number,
    name: String,
    price: Number,
    quantity: Number
});
const Product = mongoose.model('Product', productSchema);
/**
 * Creates a new product in MongoDB
 * @param {Object} product - Product object with properties name, price, and quantity
 */
function createProduct(product) {
    // Your implementation here
    const newProduct = new Product(product);
    newProduct.save().
        then(() => {
            console.log('\nProduct created successfully\n');
        }).
        catch((error) => {
            console.error('Error creating product:', error);
        });
}

/**
 * Retrieves all products from MongoDB
 * @returns {Array} - Array of product objects
 */
function getAllProducts() {
    // Your implementation here
    Product.find({}).
        then((products) => {
            console.log('\nAll products:\n', products, '\n');
        }).
        catch((error) => {
            console.error('Error retrieving products:', error);
        });
}

/**
 * Updates a product in MongoDB
 * @param {string} productId - ID of the product to update
 * @param {Object} updatedProduct - Updated product object
 */
function updateProduct(productId, updatedProduct) {
    // Your implementation here
    Product.findByIdAndUpdate(productId, updatedProduct).
        then(() => {
            console.log('\nProduct updated successfully\n');
        }).
        catch((error) => {
            console.error('Error updating product:', error);
        });
}

/**
 * Deletes a product from MongoDB
 * @param {string} productId - ID of the product to delete
 */
function deleteProduct(productId) {
    // Your implementation here
    Product.findByIdAndDelete(productId).
        then(() => {
            console.log('\nProduct deleted successfully\n');
        }).
        catch((error) => {
            console.error('Error deleting product:', error);
        });
}

// Test cases
createProduct({ product_id: 1, name: 'Product 1', price: 100, quantity: 10 });
createProduct({ product_id: 2, name: 'Product 2', price: 200, quantity: 20 });
getAllProducts();
updateProduct(1, { name: 'Product 1 Updated', price: 150, quantity: 15 });
getAllProducts();
deleteProduct(2);
getAllProducts();

// Expected Output:

// 1. The functions should perform the respective CRUD operations
// on the "Product" collection in MongoDB.

// Test Cases:

// 1. Create a product, retrieve all products, update a product,
// and then delete the product.

// hint: To solve this problem, you can follow these steps:

// 1. Define a Mongoose schema for the "Product" entity with
// properties like "name," "price," and "quantity."

// 2. Create a Mongoose model using the schema.

// 3. Implement the createProduct function to create a new product
// in MongoDB.

// 4. Implement the getAllProducts function to retrieve all products
// from MongoDB.

// 5. Implement the updateProduct function to update a product in
// MongoDB.

// 6. Implement the deleteProduct function to delete a product from
// MongoDB.

// 7. You can use Mongoose methods like save, find, findByIdAndUpdate,
// and findByIdAndDelete to perform the CRUD operations.