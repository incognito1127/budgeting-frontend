import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL;

const TransactionDetails = () => {
  const [transaction, setTransaction] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/transactions/${id}`)
      .then(res => res.json())
      .then(data => setTransaction(data))
      .catch(err => console.error(err));
  }, [id]);

  const handleDelete = () => {
    fetch(`${API}/transactions/${id}`, {
      method: 'DELETE'
    })
      .then(() => navigate('/transactions'))
      .catch(err => console.error(err));
  };

  if (!transaction) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{transaction.item_name}</h1>
      <p>Amount: ${transaction.amount}</p>
      <p>Date: {transaction.date}</p>
      <p>From: {transaction.from}</p>
      <p>Category: {transaction.category}</p>
      <button onClick={() => navigate(`/transactions/${id}/edit`)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TransactionDetails;
