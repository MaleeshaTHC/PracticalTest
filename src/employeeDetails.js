import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './employeeDetails.css'; // Import the CSS file

const EmployeeDetails = ({ match }) => {
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    // Fetch the single employee record using HTTP GET.
    axios
      .get(
        `http://examination.24x7retail.com/api/v1.0/Employee/${match.params.empNo}`,
        {
          headers: { 'API-Key': '?D(G+KbPeSgVkYp3s6v9y$B&E)H@McQf' },
        }
      )
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((error) => {
        // Handle error
      });
  }, [match.params.empNo]);

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <div className="employee-details-container">
      <h2>Employee Details</h2>
      <p>
        <strong>Employee Number:</strong> {employee.empNo}
      </p>
      <p>
        <strong>Name:</strong> {employee.empName}
      </p>
      <p>
        <strong>Address Line 1:</strong> {employee.empAddressLine1}
      </p>
      <p>
        <strong>Address Line 2:</strong> {employee.empAddressLine2}
      </p>
      <p>
        <strong>Address Line 3:</strong> {employee.empAddressLine3}
      </p>
      <p>
        <strong>Department Code:</strong> {employee.departmentCode}
      </p>
      <p>
        <strong>Date of Join:</strong> {employee.dateOfJoin}
      </p>
      <p>
        <strong>Date of Birth:</strong> {employee.dateOfBirth}
      </p>
      <p>
        <strong>Basic Salary:</strong> {employee.basicSalary}
      </p>
      <p>
        <strong>Is Active:</strong>
        <span className={employee.isActive ? 'isActive-true' : 'isActive-false'}>
          {employee.isActive ? 'Active' : 'Inactive'}
        </span>
      </p>
    </div>
  );
}

export default EmployeeDetails;
