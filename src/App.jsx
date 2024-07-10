import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import TransactionDetails from './Components/TransactionDetails';
import TransactionEditForm from './Components/TransactionEditForm';
import TransactionNewForm from './Components/TransactionNewForm';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transactions/:id" element={<TransactionDetails />} />
        <Route path="/transactions/:id/edit" element={<TransactionEditForm />} />
        <Route path="/new" element={<TransactionNewForm />} />
      </Routes>
    </Router>
  );
};

export default App;
