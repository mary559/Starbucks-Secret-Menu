import React from 'react';

function ExpenseList() {
  const expenses = [
    { id: 1, title: 'Coffee', amount: 5 },
    { id: 2, title: 'Snack', amount: 3 }
  ];

  return (
    <ul className="expense-list">
      {expenses.map((expense) => (
        <li key={expense.id} className="expense-item">
          {expense.title}: ${expense.amount}
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
