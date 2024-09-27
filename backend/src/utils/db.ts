// src/utils/db.ts
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { TransactionStatus } from '../types/TransactionStatus';

export async function openDb() {
  return open({
    filename: './database.sqlite',
    driver: sqlite3.Database
  });
}

export async function initDb() {
  const db = await openDb();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS transactions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      sender TEXT,
      recipient TEXT,
      amount REAL,
      description TEXT,
      status TEXT CHECK(status IN ('${TransactionStatus.PENDING}', '${TransactionStatus.COMPLETED}', '${TransactionStatus.FAILED}', '${TransactionStatus.SETTLED}')),
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
}