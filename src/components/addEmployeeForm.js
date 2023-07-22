import React, { useState } from 'react';
import axios from 'axios';
import '../style/addEmployeeForm.css';

const AddEmployeeForm = () => {
  const [employee, setEmployee] = useState({
    empNo: '',
    empName: '',
    empAddressLine1: '',
    empAddressLine2: '',
    empAddressLine3: '',
    departmentCode: '',
    dateOfJoin: '',
    dateOfBirth: '',
    basicSalary: 0,
    isActive: true,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }))
  }

  const [successMessage, setSuccessMessage] = useState('');
const [errorMessage, setErrorMessage] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  axios
    .post('http://examination.24x7retail.com/api/v1.0/Employee', employee, {
      headers: { 'API-Key': '?D(G+KbPeSgVkYp3s6v9y$B&E)H@McQf' },
    })
    .then((response) => {
      console.log('Employee added successfully:', response.data);
      setSuccessMessage('Employee added successfully!');
      setErrorMessage('');
    })
    .catch((error) => {
      console.error('Error adding employee:', error);
      setSuccessMessage('');
      setErrorMessage('Failed to add employee.');
    });
};


  return (
    <form  className="form-container" onSubmit={handleSubmit}>
      <h2>Employee Registration Form</h2>
      <div>
        <label>Employee Number:</label>
        <input
          type='text'
          name='empNo'
          value={employee.empNo}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Name:</label>
        <input
          type='text'
          name='empName'
          value={employee.empName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Address Line 1:</label>
        <input
          type='text'
          name='empAddressLine1'
          value={employee.empAddressLine1}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Address Line 2:</label>
        <input
          type='text'
          name='empAddressLine2'
          value={employee.empAddressLine2}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Address Line 3:</label>
        <input
          type='text'
          name='empAddressLine3'
          value={employee.empAddressLine3}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Department Code:</label>
        <input
          type='text'
          name='departmentCode'
          value={employee.departmentCode}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Date of Join:</label>
        <input
          type='date'
          name='dateOfJoin'
          value={employee.dateOfJoin}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Date of Birth:</label>
        <input
          type='date'
          name='dateOfBirth'
          value={employee.dateOfBirth}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Basic Salary:</label>
        <input
          type='number'
          name='basicSalary'
          value={employee.basicSalary}
          onChange={handleChange}
        />
      </div>

      <div className="checkbox-container">
        <label>Active:</label>
        <input
          type='checkbox'
          name='isActive'
          checked={employee.isActive}
          onChange={(e) =>
            setEmployee((prevEmployee) => ({
              ...prevEmployee,
              isActive: e.target.checked,
            }))
          }
        />
      </div>
      <div>
        <button type='submit' className="submit-button">Add Employee</button>
      </div>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  )
}

export default AddEmployeeForm
