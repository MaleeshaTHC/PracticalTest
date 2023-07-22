// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import AddEmployeeForm from './components/AddEmployeeForm';
import EditEmployeeForm from './components/EditEmployeeForm';
import EmployeeDetails from './components/EmployeeDetails';
import EmployeeList from './components/EmployeeList';
import SearchEmployee from './components/SearchEmployee';
import DepartmentList from './components/DepartmentList';
import './style/homePage.css'; // Import the CSS file

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/add-employee' component={AddEmployeeForm} />
        <Route exact path='/edit-employee/:empNo' component={EditEmployeeForm} />
        <Route exact path='/employee/:empNo' component={EmployeeDetails} />
        <Route exact path='/employee-list' component={EmployeeList} />
        <Route exact path='/search-employee' component={SearchEmployee} />
        <Route exact path='/departments' component={DepartmentList} />
      </Switch>
    </Router>
  );
};

export default App;
