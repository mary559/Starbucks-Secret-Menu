import React from 'react';
import Header from './components/Header';
import ExpenseList from './components/ExpenseList';
import Receipt from './components/Receipt';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <ExpenseList />
        <Receipt />
      </main>
    </div>
  );
}

export default App;
