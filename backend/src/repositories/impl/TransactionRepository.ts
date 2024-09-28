// src/repositories/TransactionRepository.ts
import { Database } from "sqlite";
import { Transaction } from "../../models/Transaction";
import { TransactionStatus } from "../../types/TransactionStatus";
import { openDb } from "../../utils/db";
import { ITransactionRepository } from "../ITransactionRepository";
import logger from "../../utils/logger";

export class TransactionRepository implements ITransactionRepository {
  private db!: Database;

  constructor() {
    this.initDb();
  }

  private async initDb() {
    this.db = await openDb();
  }

  private formatDateForSQLite(date: string) {
    const d = new Date(date);
    
    return `${d.getFullYear()}-${(d.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${d.getDate().toString().padStart(2, "0")} ${d
      .getHours()
      .toString()
      .padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}:${d
      .getSeconds()
      .toString()
      .padStart(2, "0")}`;
  }

  async create(
    transaction: Omit<Transaction, "id" | "status" | "createdAt">
  ): Promise<number> {
    const result = await this.db.run(
      "INSERT INTO transactions (sender, recipient, amount, description, status) VALUES (?, ?, ?, ?, ?)",
      [
        transaction.sender,
        transaction.recipient,
        transaction.amount,
        transaction.description,
        TransactionStatus.INITIATED,
      ]
    );
    return result.lastID!;
  }

  async findAll(filters: {
    startDate?: string;
    endDate?: string;
    minAmount?: number;
    maxAmount?: number;
    status?: Transaction;
  }): Promise<Transaction[]> {

    let query = "SELECT * FROM transactions WHERE 1=1";
    const params: any[] = [];

    if (filters.startDate && filters.endDate) {
      filters.startDate = this.formatDateForSQLite(filters.startDate);
      filters.endDate = this.formatDateForSQLite(filters.endDate);
      query += ` AND createdAt BETWEEN ? AND ?`;
      params.push(filters.startDate, filters.endDate);
    }

    if (filters.minAmount) {
      query += " AND amount >= ?";
      params.push(filters.minAmount);
    }

    if (filters.maxAmount) {
      query += " AND amount <= ?";
      params.push(filters.maxAmount);
    }

    if (filters.status) {
      query += " AND status = ?";
      params.push(filters.status);
    }

    let data = this.db.all<Transaction[]>(query, params);
    return data;
  }

  async updateStatus(id: number, status: TransactionStatus): Promise<void> {
    await this.db.run("UPDATE transactions SET status = ? WHERE id = ?", [
      status,
      id,
    ]);
  }

  async settleAll(): Promise<void> {
    await this.db.run("UPDATE transactions SET status = ? WHERE status = ?", [
      TransactionStatus.COMPLETED,
      TransactionStatus.PROCESSING,
    ]);
  }
}
