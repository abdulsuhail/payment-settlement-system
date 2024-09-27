// frontend/src/App.tsx
import React from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionHistory from './components/TransactionHistory';
import SettlementView from './components/SettlementView';
import CallbackSimulator from './components/CallbackSimulator';

function App() {
  return (
    <div className="App">
      <h1>Payment and Settlement System</h1>
      <TransactionForm />
      <TransactionHistory />
      <SettlementView />
      <CallbackSimulator />
    </div>
  );
}

export default App;