// DepartmentList.js (JSX file)
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/departmentList.css'; 

const DepartmentList = () => {
  const [departments, setDepartments] = useState([])

  useEffect(() => {
    axios
      .get('http://examination.24x7retail.com/api/v1.0/Departments', {
        headers: { 'API-Key': '?D(G+KbPeSgVkYp3s6v9y$B&E)H@McQf' },
      })
      .then((response) => {
        setDepartments(response.data)
      })
      .catch((error) => {
        console.error('Error:', error);
      })
  }, [])

  return (
    <div className="department-list-container"> 
      <h2>Department List</h2>
      {departments.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {departments.map((department) => (
            <li key={department.departmentId}>
              <strong>{department.name}</strong> - Department ID:{' '}
              {department.departmentId}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DepartmentList
