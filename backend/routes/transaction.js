import express from 'express';
import TransactionController from '../controller/transaction-controller.js';

const router = express.Router();

router.get('/', TransactionController.getTransactions);
router.post('/', TransactionController.addTransaction);
router.patch('/', TransactionController.updateTransaction);
router.delete('/', TransactionController.deleteTransaction);

export default router;
