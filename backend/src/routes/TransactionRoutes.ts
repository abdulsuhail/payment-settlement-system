// src/routes/transactionRoutes.ts
import express from 'express';
import { TransactionController } from '../controllers/TransactionController';
import { TransactionService } from '../services/impl/TransactionService';
import { TransactionRepository } from '../repositories/impl/TransactionRepository';

const router = express.Router();

// Below dependency injection can be in separate facade based design for maintainability
const repository = new TransactionRepository();
const service = new TransactionService(repository);
const controller = new TransactionController(service);


router.post('/', controller.createTransaction.bind(controller));
router.get('/', controller.getTransactions.bind(controller));
router.post('/settle', controller.settleBalance.bind(controller));
router.post('/callback', controller.handleCallback.bind(controller));

export default router;