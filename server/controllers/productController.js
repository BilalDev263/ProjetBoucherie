const Product = require('../models/product');

// Obtenez tous les produits
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Ajouter un produit
exports.addProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Mettre à jour un produit
exports.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Supprimer un produit
exports.deleteProduct = async (req, res) => {
    try {
        await Product.fidByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Product deleted' });
    }
};
