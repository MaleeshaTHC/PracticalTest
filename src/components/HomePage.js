// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/homePage.css';

const HomePage = () => {
  return (
    <div className="home-page-container">
      <h1>Welcome to Employee Management System</h1>
      <div className="nav-links">
        <Link to="/add-employee">Add Employee</Link>
        <Link to="/employee-list">Employee List</Link>
        <Link to="/search-employee">Search Employee</Link>
        <Link to="/departments">Departments</Link>
      </div>
    </div>
  );
};

export default HomePage;
