import express from 'express';
import CategoryController from '../controller/category-controller.js';

const router = express.Router();

// TODO post, patch, delete 라우터 추가하기
router.get('/', CategoryController.getCategories);

export default router;
