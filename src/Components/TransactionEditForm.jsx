import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL;

const TransactionEditForm = () => {
  const [transaction, setTransaction] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: ""
  });
  const { id } = useParams();
  //This uses the useParams hook from react-router-dom to extract the id parameter from the URL.

  const navigate = useNavigate();
  //This uses the useNavigate hook from react-router-dom to get a function navigate that can be used to programmatically navigate to different routes.


  useEffect(() => {
    fetch(`${API}/transactions/${id}`)
    //Inside the useEffect, it fetches data for the transaction with the given id from the API.
      .then((res) => res.json())
    //fetch(${API}/transactions/${id}) makes a GET request to the API.
      .then((data) => setTransaction(data))
    //.then((res) => res.json()) processes the response to JSON.
      .catch(() => navigate('/notfound'));
    //.catch(() => navigate('/notfound')) navigates to a '/notfound' route if there is an error.
  }, [id, navigate]);

  const handleChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  //creates a new object with the current transaction properties and updates the property corresponding to the input that changed.

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${API}/transactions/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(transaction)
    })

    
    .then(() => navigate(`/transactions/${id}`))
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
      <button type="submit">Update Transaction</button>
    </form>
  );
};

export default TransactionEditForm;
