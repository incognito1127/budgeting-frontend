import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL;

const TransactionDetails = () => {
    //This defines a functional component named TransactionDetails.
  const [transaction, setTransaction] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  //A state variable transaction is declared with an initial value of null.
  //setTransaction is a function to update the transaction state.

  useEffect(() => {
    fetch(`${API}/transactions/${id}`)
      .then(res => res.json())
      .then(data => setTransaction(data))
      .catch(err => console.error(err));
  }, [id]);

  //useEffect runs when the component or when id changes.
  //A fetch request is made to get the transaction details using the id.

  //Any errors during the fetch are logged to the console.

  const handleDelete = () => {
    fetch(`${API}/transactions/${id}`, {
      method: 'DELETE'
    })
      .then(() => navigate('/transactions'))
      .catch(err => console.error(err));
  };
    // handleDelete function makes a DELETE request to delete the transaction with the given id.
    //On success, it navigates to the /transactions route.


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
