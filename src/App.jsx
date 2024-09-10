import React from 'react';
import FinancialChart from './components/FinancialChart';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Financial Chart Dashboard</h1>
      <FinancialChart />
    </div>
  );
}

export default App;
