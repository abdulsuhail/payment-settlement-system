// frontend/src/components/TransactionHistory.tsx
import React, { useState, useEffect } from 'react';
import { getTransactions } from '../services/api';
import { Transaction } from '../types/Transaction';

const TransactionHistory: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filters, setFilters] = useState({
    startDate: '1990-01-01',
    endDate: '',
    minAmount: '',
    maxAmount: ''
  });

  useEffect(() => {
    fetchTransactions();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchTransactions = async () => {
    try {
        const validFilters = removeEmptyFilters(filters);
      const data = await getTransactions(validFilters);
      setTransactions(data);
    } catch (error) {
      alert('Error fetching transactions');
    }
  };

  const removeEmptyFilters = (filterObj: any) => {
    const filteredObj = Object.fromEntries(
      Object.entries(filterObj).filter(([_, v]) => v != null && v !== '')
    );
    return filteredObj;
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleFilterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchTransactions();
  };

  return (
    <div>
      <h2>Transaction History</h2>
      <form onSubmit={handleFilterSubmit}>
        <input
          type="date"
          name="startDate"
          value={filters.startDate}
          onChange={handleFilterChange}
          placeholder="Start Date"
        />
        <input
          type="date"
          name="endDate"
          value={filters.endDate}
          onChange={handleFilterChange}
          placeholder="End Date"
        />
        <input
          type="number"
          name="minAmount"
          value={filters.minAmount}
          onChange={handleFilterChange}
          placeholder="Min Amount"
        />
        <input
          type="number"
          name="maxAmount"
          value={filters.maxAmount}
          onChange={handleFilterChange}
          placeholder="Max Amount"
        />
        <button type="submit">Apply Filters</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Sender</th>
            <th>Recipient</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Status</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.sender}</td>
              <td>{transaction.recipient}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.description}</td>
              <td>{transaction.status}</td>
              <td>{transaction.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;