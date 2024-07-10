import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL;

const TransactionNewForm = () => {
  const [transaction, setTransaction] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${API}/transactions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(transaction)
    })
    .then(() => navigate("/"))
    .catch((error) => console.log(error));
  };

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <label>Date:</label>
      <input type="date" name="date" value={transaction.date} onChange={handleChange} required />
      <label>Name:</label>
      <input type="text" name="item_name" value={transaction.item_name} onChange={handleChange} required />
      <label>Amount:</label>
      <input type="number" name="amount" value={transaction.amount} onChange={handleChange} required />
      <label>From:</label>
      <input type="text" name="from" value={transaction.from} onChange={handleChange} required />
      <label>Category:</label>
      <input type="text" name="category" value={transaction.category} onChange={handleChange} required />
      <button type="submit">Create Transaction</button>
    </form>
  );
};

export default TransactionNewForm;

