import React from 'react';

function Receipt() {
  const total = 8; // Example total amount

  return (
    <div className="receipt">
      <h2>Total</h2>
      <p>${total}</p>
    </div>
  );
}

export default Receipt;
