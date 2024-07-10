import React from 'react';
import { Link } from 'react-router-dom';

const Transaction = ({ transaction }) => {
  return (
    <tr>
      <td>{transaction.date}</td>
      <td>
        <Link to={`/transactions/${transaction.id}`}>{transaction.item_name}</Link>
      </td>
      <td>{transaction.amount}</td>
      <td>{transaction.from}</td>
    </tr>
  );
};

export default Transaction;
