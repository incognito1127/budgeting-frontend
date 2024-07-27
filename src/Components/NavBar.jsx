// src/components/NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div>
        <Link to="/">Home</Link>
        <Link to="/TransactionNewForm">New Transaction</Link>
        <Link to="/transactions">Transactions</Link>
      </div>
    </nav>
  );
};

export default NavBar;
