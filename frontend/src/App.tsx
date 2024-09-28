// src/App.tsx
import React, { useState } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionHistory from './components/TransactionHistory';
import SettlementView from './components/SettlementView';
import CallbackSimulator from './components/CallbackSimulator';

type Tab = 'create' | 'history' | 'settle' | 'callback';

const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<Tab>('create');

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  const headerStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '24px',
    textAlign: 'center',
    color: '#3366cc',
  };

  const navStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '16px',
    marginBottom: '24px',
  };

  const buttonStyle = (isActive: boolean): React.CSSProperties => ({
    padding: '8px 16px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: isActive ? '#3366cc' : '#e0e0e0',
    color: isActive ? 'white' : '#333',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.2s, color 0.2s',
  });

  const renderTabContent = () => {
    switch (currentTab) {
      case 'create':
        return <TransactionForm />;
      case 'history':
        return <TransactionHistory />;
      case 'settle':
        return <SettlementView />;
      case 'callback':
        return <CallbackSimulator />;
      default:
        return null;
    }
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Payment and Settlement System</h1>
      <div style={navStyle}>
        <button
          style={buttonStyle(currentTab === 'create')}
          onClick={() => setCurrentTab('create')}
        >
          Create Transaction
        </button>
        <button
          style={buttonStyle(currentTab === 'history')}
          onClick={() => setCurrentTab('history')}
        >
          Transaction History
        </button>
        <button
          style={buttonStyle(currentTab === 'settle')}
          onClick={() => setCurrentTab('settle')}
        >
          Settle Balance
        </button>
        <button
          style={buttonStyle(currentTab === 'callback')}
          onClick={() => setCurrentTab('callback')}
        >
          Callback Simulator
        </button>
      </div>
      {renderTabContent()}
    </div>
  );
};

export default App;