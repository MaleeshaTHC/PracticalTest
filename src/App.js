import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' // Import Switch from react-router-dom

import addEmployeeForm from './addEmployeeForm'
import editEmployeeForm from './editEmployeeForm'
import employeeDetails from './employeeDetails'
import employeeList from './employeeList'
import searchEmployee from './searchEmployee'
import departmentList from './departmentList'

const App = () => {
  return (
    <Router>
      <Switch>
        {' '}
        {/* Use Switch from react-router-dom */}
        <Route exact path='/add-employee' component={addEmployeeForm} />
        <Route
          exact
          path='/edit-employee/:empNo'
          component={editEmployeeForm}
        />
        <Route exact path='/employee/:empNo' component={employeeDetails} />
        <Route exact path='/employee-list' component={employeeList} />
        <Route exact path='/search-employee' component={searchEmployee} />
        <Route exact path='/departments' component={departmentList} />
      </Switch>
    </Router>
  )
}

export default App
