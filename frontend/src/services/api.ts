// frontend/src/services/api.ts
import axios from 'axios';
import { Transaction } from '../types/Transaction';

const API_URL = 'http://localhost:8080';

export const createTransaction = async (transactionData: Partial<Transaction>) => {
  const response = await axios.post(`${API_URL}/transactions`, transactionData);
  return response.data;
};


// Need to fix logic for filters
export const getTransactions = async (filters: any) => {
  const response = await axios.get(`${API_URL}/transactions`);
  return response.data;
};

export const settleBalance = async () => {
  const response = await axios.post(`${API_URL}/transactions/settle`);
  return response.data;
};

export const simulateCallback = async (callbackData: { transactionId: string; status: string }) => {
  const response = await axios.post(`${API_URL}/transactions/callback`, callbackData);
  return response.data;
};