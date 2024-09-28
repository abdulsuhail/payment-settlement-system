// frontend/src/components/SettlementView.tsx
import React, { useState, useEffect } from 'react';
import { getTransactions, settleBalance } from '../services/api';

const SettlementView: React.FC = () => {
  const [outstandingBalance, setOutstandingBalance] = useState(0);

  useEffect(() => {
    fetchOutstandingBalance();
  }, []);

  const fetchOutstandingBalance = async () => {
    try {
      const transactions = await getTransactions({ status: 'Processing' });
      const balance = transactions.reduce((sum: any, t: { amount: any; }) => sum + t.amount, 0);
      setOutstandingBalance(balance);
    } catch (error) {
      alert('Error fetching outstanding balance');
    }
  };

  const handleSettle = async () => {
    try {
      await settleBalance();
      alert('Balance settled successfully');
      fetchOutstandingBalance();
    } catch (error) {
      alert('Error settling balance');
    }
  };

  return (
    <div>
      <h2>Settlement View</h2>
      <p>Outstanding Balance: ${outstandingBalance.toFixed(2)}</p>
      <button onClick={handleSettle}>Settle Balance</button>
    </div>
  );
};

export default SettlementView;