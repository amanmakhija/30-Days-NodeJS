// 24. Problem: Express Route for Product CRUD Operations

// Problem Statement: Create Express routes for handling CRUD operations
// on products using MongoDB and Mongoose. Implement routes for creating,
// reading, updating, and deleting products.

// Solution:

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/products', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number
});
const Product = mongoose.model('Product', productSchema);
app.post('/products', createProductRoute);
app.get('/products', getAllProductsRoute);
app.put('/products/:id', updateProductRoute);
app.delete('/products/:id', deleteProductRoute);
app.listen(port, async () => {
    console.log(`Server is running at http://localhost:${port}`);
    await Product.deleteMany({});
});

/**
 * Express route to create a new product
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
async function createProductRoute(req, res) {
    // Your implementation here
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

/**
 * Express route to retrieve all products
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
async function getAllProductsRoute(req, res) {
    // Your implementation here
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

/**
 * Express route to update a product
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
async function updateProductRoute(req, res) {
    // Your implementation here
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            product.name = req.body.name || product.name;
            product.description = req.body.description || product.description;
            product.price = req.body.price || product.price;
            await product.save();
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

/**
 * Express route to delete a product
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
async function deleteProductRoute(req, res) {
    // Your implementation here
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            await product.remove();
            res.status(200).json({ message: 'Product deleted' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Expected Output:

// 1. The routes should perform the respective CRUD operations on the "Product" collection in MongoDB.

// Test Cases:

// 1. Use tools like Postman to send HTTP requests to each route and check the MongoDB database for the expected changes.

// Hint: Schema Definition: Use the mongoose.Schema constructor to define a schema with fields like name, description, price, etc. Use appropriate data types and validation as needed.

// Model Creation: Use the mongoose.model method to create a model for the products collection based on the schema defined in step 1.

// Route Handlers: Implement route handlers that use the Mongoose model to perform CRUD operations on the products collection. For example, the handler for creating a product would create a new instance of the model with the request body and then save it to the database.

// MongoDB Connection: Use the mongoose.connect method to connect to your MongoDB database. You can specify the connection URI as a parameter to this method.

// Express Routes: Use the app.post, app.get, app.put, and app.delete methods of the Express app object to define routes for creating, reading, updating, and deleting products, respectively. Map these routes to the appropriate route handlers.

// Testing: Use Postman or a similar tool to send HTTP requests to your Express routes and verify that they perform the expected CRUD operations on the MongoDB database.