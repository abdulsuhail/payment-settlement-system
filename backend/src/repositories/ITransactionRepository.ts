import { Transaction } from '../models/Transaction';
import { TransactionStatus } from '../types/TransactionStatus';

export interface ITransactionRepository {
  create(transaction: Omit<Transaction, 'id' | 'status' | 'createdAt'>): Promise<number>;
  findAll(filters: {
    startDate?: string;
    endDate?: string;
    minAmount?: number;
    maxAmount?: number;
  }): Promise<Transaction[]>;
  updateStatus(id: number, status: TransactionStatus): Promise<void>;
  settleAll(): Promise<void>;
}