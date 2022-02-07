import express from 'express';
import MethodController from '../controller/method-controller.js';

const router = express.Router();

router.get('/', MethodController.getMethods);

export default router;
