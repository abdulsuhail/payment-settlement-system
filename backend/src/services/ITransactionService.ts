import { Transaction } from '../models/Transaction';
import { TransactionStatus } from '../types/TransactionStatus';

export interface ITransactionService {
  createTransaction(transaction: Omit<Transaction, 'id' | 'status' | 'createdAt'>): Promise<number>;
  getTransactions(filters: {
    startDate?: string;
    endDate?: string;
    minAmount?: number;
    maxAmount?: number;
  }): Promise<Transaction[]>;
  updateTransactionStatus(id: number, status: TransactionStatus): Promise<void>;
  settleBalance(): Promise<void>;
}