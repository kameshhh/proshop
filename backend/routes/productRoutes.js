import express from 'express'
import { getProductById, deleteProduct, getProducts, createProduct, updateProduct } from '../controllers/productController.js';
const router = express.Router();
import { protect, admin } from '../middleware/authMiddleware.js'


//get all products
router.route('/').get(getProducts).post(protect, admin, createProduct)

//get product by id
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct)
    .put(protect, admin, updateProduct)



export default router;