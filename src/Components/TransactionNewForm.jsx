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
    <div className="container">
      <h1>Add a new item</h1>
      <form className="card" onSubmit={handleSubmit}>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" value={transaction.date} onChange={handleChange} required />

        <label htmlFor="item_name">Name</label>
        <input id="item_name" value={transaction.item_name} onChange={handleChange} required />

        <label htmlFor="amount">Amount</label>
        <input id="amount" type="number" value={transaction.amount} onChange={handleChange} required />

        <label htmlFor="from">From</label>
        <input id="from" value={transaction.from} onChange={handleChange} required />

        <label htmlFor="category">Category</label>
        <input id="category" value={transaction.category} onChange={handleChange} required />

        <input className="button" type="submit" value="Create New Item" />
      </form>
    </div>
  );
};
export default TransactionNewForm;

