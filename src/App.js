import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' // Import Switch from react-router-dom

import AddEmployeeForm from './addEmployeeForm'
import EditEmployeeForm from './editEmployeeForm'
import EmployeeDetails from './employeeDetails'
import EmployeeList from './employeeList'
import SearchEmployee from './searchEmployee'
import DepartmentList from './departmentList'

const App = () => {
  return (
    <Router>
      <Switch>
        {' '}
        {/* Use Switch from react-router-dom */}
        <Route exact path='/add-employee' component={AddEmployeeForm} />
        <Route
          exact
          path='/edit-employee/:empNo'
          component={EditEmployeeForm}
        />
        <Route exact path='/employee/:empNo' component={EmployeeDetails} />
        <Route exact path='/employee-list' component={EmployeeList} />
        <Route exact path='/search-employee' component={SearchEmployee} />
        <Route exact path='/departments' component={DepartmentList} />
      </Switch>
    </Router>
  )
}

export default App
