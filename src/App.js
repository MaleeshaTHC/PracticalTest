import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddEmployeeForm from './components/addEmployeeForm';
import EditEmployeeForm from './components/editEmployeeForm';
import EmployeeDetails from './components/employeeDetails';
import EmployeeList from './components/employeeList';
import SearchEmployee from './components/searchEmployee';
import DepartmentList from './components/departmentList';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path='/'
          render={(props) => <AddEmployeeForm {...props} />}
        />
        <Route
          exact
          path='/edit-employee/:empNo'
          render={(props) => <EditEmployeeForm {...props} />}
        />
        <Route
          exact
          path='/employee/:empNo'
          render={(props) => <EmployeeDetails {...props} />}
        />
        <Route
          exact
          path='/employee-list'
          render={(props) => <EmployeeList {...props} />}
        />
        <Route
          exact
          path='/search-employee'
          render={(props) => <SearchEmployee {...props} />}
        />
        <Route
          exact
          path='/departments'
          render={(props) => <DepartmentList {...props} />}
        />
      </Switch>
    </Router>
  );
};

export default App;
