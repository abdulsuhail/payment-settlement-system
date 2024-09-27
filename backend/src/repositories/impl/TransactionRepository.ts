// src/repositories/TransactionRepository.ts
import { Database } from 'sqlite';
import { Transaction } from '../../models/Transaction';
import { TransactionStatus } from '../../types/TransactionStatus';
import { openDb } from '../../utils/db';
import { ITransactionRepository } from '../ITransactionRepository';

export class TransactionRepository implements ITransactionRepository {
  private db: Database;

  constructor() {
    this.initDb();
  }

  private async initDb() {
    this.db = await openDb();
  }

  async create(transaction: Omit<Transaction, 'id' | 'status' | 'createdAt'>): Promise<number> {
    const result = await this.db.run(
      'INSERT INTO transactions (sender, recipient, amount, description, status) VALUES (?, ?, ?, ?, ?)',
      [transaction.sender, transaction.recipient, transaction.amount, transaction.description, TransactionStatus.PENDING]
    );
    return result.lastID!;
  }

  async findAll(filters: {
    startDate?: string;
    endDate?: string;
    minAmount?: number;
    maxAmount?: number;
  }): Promise<Transaction[]> {
    let query = 'SELECT * FROM transactions WHERE 1=1';
    const params: any[] = [];

    if (filters.startDate && filters.endDate) {
      query += ' AND createdAt BETWEEN ? AND ?';
      params.push(filters.startDate, filters.endDate);
    }

    if (filters.minAmount) {
      query += ' AND amount >= ?';
      params.push(filters.minAmount);
    }

    if (filters.maxAmount) {
      query += ' AND amount <= ?';
      params.push(filters.maxAmount);
    }

    return this.db.all<Transaction[]>(query, params);
  }

  async updateStatus(id: number, status: TransactionStatus): Promise<void> {
    await this.db.run('UPDATE transactions SET status = ? WHERE id = ?', [status, id]);
  }

  async settleAll(): Promise<void> {
    await this.db.run('UPDATE transactions SET status = ? WHERE status = ?', [TransactionStatus.SETTLED, TransactionStatus.PENDING]);
  }
}