import express from 'express';
import CategoryController from '../controller/category-controller.js';

const router = express.Router();

router.get('/', CategoryController.getCategories);
router.delete('/', CategoryController.deleteCategory);

export default router;
