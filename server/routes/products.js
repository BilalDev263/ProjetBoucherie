const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Route pour récupérer tous les produits
router.get('/', productController.getAllProducts);

// Route pour ajouter un produit
router.post('/', productController.addProduct);

// Route pour mettre à jour un produit
router.put('/:id', productController.updateProduct);

// Route pour supprimer un produit
router.delete('/:id', productController.deleteProduct);

module.exports = router;
