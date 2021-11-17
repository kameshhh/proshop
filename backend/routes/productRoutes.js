import express from 'express'
import { getProductById, getProducts } from '../controllers/productController.js';
const router = express.Router();

//get all products
router.route('/').get(getProducts)

//get product by id
router.route('/:id').get(getProductById)



export default router;