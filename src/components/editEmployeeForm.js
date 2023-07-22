import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../style/editEmployeeForm.css'; // Import the CSS file

const EditEmployeeForm = ({ match }) => {
  const [employee, setEmployee] = useState({
    empNo: '',
    empName: '',
    empAddressLine1: '',
    empAddressLine2: '',
    empAddressLine3: '',
    departmentCode: '',
    dateOfJoin: '',
    dateOfBirth: '',
    basicSalary: '',
    isActive: '',
  })

  useEffect(() => {
    // Fetch the existing employee details using HTTP GET
    axios
      .get(
        `http://examination.24x7retail.com/api/v1.0/Employee/${match.params.empNo}`,
        {
          headers: { 'API-Key': '?D(G+KbPeSgVkYp3s6v9y$B&E)H@McQf' },
        }
      )
      .then((response) => {
        setEmployee(response.data)
      })
      .catch((error) => {
        // Handle error
      })
  }, [match.params.empNo])

  const handleChange = (e) => {
    const { name, value } = e.target
    setEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .put(
        `http://examination.24x7retail.com/api/v1.0/Employee/${match.params.empNo}`,
        employee,
        {
          headers: { 'API-Key': '?D(G+KbPeSgVkYp3s6v9y$B&E)H@McQf' },
        }
      )
      .then((response) => {
        // Handle successful employee update
      })
      .catch((error) => {
        // Handle error
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Employee Number:</label>
        <input
          type='String'
          name='empNo'
          value={employee.empNo}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Name:</label>
        <input
          type='String'
          name='empName'
          value={employee.empName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Address Line 1:</label>
        <input
          type='String'
          name='empAddressLine1'
          value={employee.empAddressLine1}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Address Line 2:</label>
        <input
          type='String'
          name='empAddressLine2'
          value={employee.empAddressLine2}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Address Line 3:</label>
        <input
          type='String'
          name='empAddressLine3'
          value={employee.empAddressLine3}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Department Code:</label>
        <input
          type='String'
          name='departmentCode'
          value={employee.departmentCode}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Date of Join:</label>
        <input
          type='date'
          name='dateOfJoin'
          value={employee.dateOfJoin}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Date of Birth:</label>
        <input
          type='date'
          name='dateOfBirth'
          value={employee.dateOfBirth}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Basic Salary:</label>
        <input
          type='Number'
          name='basicSalary'
          value={employee.basicSalary}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Is Active:</label>
        <input
          type='checkbox'
          name='basicSalary'
          value={employee.basicSalary}
          onChange={handleChange}
          required
        />
      </div>
      <button type='submit'>Update Employee</button>
    </form>
  )
}

export default EditEmployeeForm
