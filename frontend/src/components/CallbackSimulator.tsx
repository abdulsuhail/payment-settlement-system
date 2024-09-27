import React, { useState } from 'react';
import { simulateCallback } from '../services/api';

const CallbackSimulator: React.FC = () => {
  const [callbackData, setCallbackData] = useState({
    transactionId: '',
    status: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await simulateCallback(callbackData);
      alert('Callback simulated successfully');
      setCallbackData({ transactionId: '', status: '' });
    } catch (error) {
      alert('Error simulating callback');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setCallbackData({ ...callbackData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Callback Simulator</h2>
      <input
        type="text"
        name="transactionId"
        value={callbackData.transactionId}
        onChange={handleChange}
        placeholder="Transaction ID"
        required
      />
      <select
        name="status"
        value={callbackData.status}
        onChange={handleChange}
        required
      >
        <option value="">Select Status</option>
        <option value="completed">Completed</option>
        <option value="failed">Failed</option>
      </select>
      <button type="submit">Simulate Callback</button>
    </form>
  );
};

export default CallbackSimulator;