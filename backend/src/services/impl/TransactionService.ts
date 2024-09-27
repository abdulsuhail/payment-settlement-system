// src/services/TransactionService.ts
import { Transaction } from '../../models/Transaction';
import { ITransactionRepository } from '../../repositories/ITransactionRepository';
import { ITransactionService } from '../ITransactionService';
import { TransactionStatus } from '../../types/TransactionStatus';

export class TransactionService implements ITransactionService {
  private repository: ITransactionRepository;

  constructor(repository: ITransactionRepository) {
    this.repository = repository;
  }

  async createTransaction(transaction: Omit<Transaction, 'id' | 'status' | 'createdAt'>): Promise<number> {
    return this.repository.create(transaction);
  }

  async getTransactions(filters: {
    startDate?: string;
    endDate?: string;
    minAmount?: number;
    maxAmount?: number;
  }): Promise<Transaction[]> {
    return this.repository.findAll(filters);
  }

  async updateTransactionStatus(id: number, status: TransactionStatus): Promise<void> {
    await this.repository.updateStatus(id, status);
  }

  async settleBalance(): Promise<void> {
    await this.repository.settleAll();
  }
}