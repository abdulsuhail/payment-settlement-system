// src/controllers/TransactionController.ts
import { Request, Response } from 'express';
import { ITransactionService } from '../services/ITransactionService';
import { TransactionStatus } from '../types/TransactionStatus';
import { validateTransaction, validateFilters, validateCallback } from '../utils/validators';
import logger from '../utils/logger'; 

export class TransactionController {
  private service: ITransactionService;

  constructor(service: ITransactionService) {
    this.service = service;
  }

  async createTransaction(req: Request, res: Response) {
    const { error, value } = validateTransaction(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    try {
      const id = await this.service.createTransaction(value);
      res.status(201).json({ id, message: 'Transaction created successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error creating transaction' });
    }
  }

  async getTransactions(req: Request, res: Response) {
    const { error, value } = validateFilters(req.query);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    logger.info(JSON.stringify(value));
    try {
      const transactions = await this.service.getTransactions(value);
      res.json(transactions);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching transactions' });
    }
  }

  async settleBalance(req: Request, res: Response) {
    try {
      await this.service.settleBalance();
      res.json({ message: 'Balance settled successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error settling balance' });
    }
  }

  async handleCallback(req: Request, res: Response) {
    const { error, value } = validateCallback(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    try {
      await this.service.updateTransactionStatus(value.transactionId, value.status as TransactionStatus);
      res.json({ message: 'Transaction status updated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error updating transaction status' });
    }
  }
}