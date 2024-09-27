import { TransactionStatus } from '../types/TransactionStatus';

export interface Transaction {
  id?: number;
  sender: string;
  recipient: string;
  amount: number;
  description: string;
  status: TransactionStatus;
  createdAt?: string;
}