import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './employeeList.css'; // Import the CSS file

const EmployeeList = () => {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    // Fetch all employee records using HTTP GET
    axios
      .get('http://examination.24x7retail.com/api/v1.0/Employees', {
        headers: { 'API-Key': '?D(G+KbPeSgVkYp3s6v9y$B&E)H@McQf' },
      })
      .then((response) => {
        setEmployees(response.data)
      })
      .catch((error) => {
        // Handle error
      })
  }, [])

  return (
    <div>
      <h2>Employee List</h2>
      {employees.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {employees.map((employee) => (
            <li key={employee.empNo}>
              <strong>{employee.empName}</strong> - Employee Number:{' '}
              {employee.empNo}
              {employee.empName}
              {employee.empAddressLine1}
              {employee.empAddressLine2}
              {employee.empAddressLine3}
              {employee.departmentCode}
              {employee.dateOfJoin}
              {employee.dateOfBirth}
              {employee.basicSalary}
              {employee.isActive}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default EmployeeList
