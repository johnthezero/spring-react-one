
import { createEmployee } from '../services/EmployeeService';
import '../static/Employee.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Employee = () => {

    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [email,setEmail]=useState('');
    const [errors,setErrors]=useState({
      firstName:'',
      lastName:'',
      email:''
    })

    const navigator=useNavigate();
    const handleFirstName =(event)=>setFirstName(event.target.value);
    const handleLastName=(event)=>setLastName(event.target.value);
    const handleEmail=(event)=>setEmail(event.target.value);
    const saveEmployee=(event)=>{
        event.preventDefault();
        if(validateForm()){
          const employee={firstName,lastName,email};
          console.log(employee);
          createEmployee(employee)
            .then( (response)=>{
              console.log(response.data);
              navigator('/employees');
            })
        }
        
    }
function validateForm(){
  let valid=true;
  const errorsCopy= {... errors}
  if(firstName.trim()){
    errorsCopy.firstName=''
  }else{
    errorsCopy.firstName='First name is required';
    valid=false;
  }
  if(lastName.trim()){
    errorsCopy.lastName=''
  }else{
    errorsCopy.lastName='Last name is required';
    valid=false;
  }
  if(email.trim()){
    errorsCopy.email=''
  }else{
    errorsCopy.email='Email is required';
    valid=false;
  }
  setErrors(errorsCopy);
  return valid;
}
  return (
    
    <div className='employee-container'>
        <h1>Add</h1>
        <form action="">
            <label htmlFor="firstname">First name</label>
            <input id='firstname' type="text" placeholder='Enter the first name' name='firstName' value={firstName} onChange={handleFirstName} required/>
            <label htmlFor="lastname">First name</label>
            <input id='lastname' type="text" placeholder='Enter the last name' name='lastName' value={lastName} onChange={handleLastName} required/>
            <label htmlFor="email" placeholder='Enter the email' name='email' >First name</label>
            <input id='email' type="text" value={email} onChange={handleEmail} required/>
            <button onClick={saveEmployee}>Send</button>
        </form>
      
    </div>
  )
}

export default Employee
