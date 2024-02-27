import React from 'react'
import { useState,useEffect } from 'react';
import { listEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';
const ListEmployeesComponent = () => {
    const navigator=useNavigate();
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch((error) => {
            console.error("Error fetching data: ", error);
        });
    });
    function addNewEmployee(){
        navigator('/add-Employee')
    }
    return (
    <div>
      <h2>List of Employees</h2>
      <button onClick={addNewEmployee}>Add employee</button>
      <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {
                employees.map((employee) =>
                    <tr key={employee.id}> 
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                    </tr>
                )
            } 
        </tbody>
      </table>
    </div>
  )
}

export default ListEmployeesComponent

