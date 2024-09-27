// frontend/src/components/TransactionForm.tsx
import React, { useState } from 'react';
import { createTransaction } from '../services/api';

const TransactionForm: React.FC = () => {
  const [formData, setFormData] = useState({
    sender: '',
    recipient: '',
    amount: 0,
    description: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createTransaction(formData);
      alert('Transaction created successfully');
      setFormData({ sender: '', recipient: '', amount: 0, description: '' });
    } catch (error) {
      alert('Error creating transaction');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Transaction</h2>
      <input
        type="text"
        name="sender"
        value={formData.sender}
        onChange={handleChange}
        placeholder="Sender"
        required
      />
      <input
        type="text"
        name="recipient"
        value={formData.recipient}
        onChange={handleChange}
        placeholder="Recipient"
        required
      />
      <input
        type="number"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        placeholder="Amount"
        required
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <button type="submit">Create Transaction</button>
    </form>
  );
};

export default TransactionForm;