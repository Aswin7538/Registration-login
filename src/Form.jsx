import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { registerSuccess } from './counterSlice';


export const Form = () => {
  
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [userType,setuserType] = useState('');


  const dispatch = useDispatch()

  const handlesubmit=()=>{
    dispatch(registerSuccess({username,password,userType}))
    alert("success")
  };

  return (
    <div className='mainbox'>
        <div className='box'>
        <h1>register</h1>
        <label>username: <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}  placeholder='username' /></label>
        <label>password: <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' /></label>
        <label>email: <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='email' /></label>
        <label >usertype:
          <select value={userType} onChange={(e)=>setuserType(e.target.value)}>
          <option>Student</option>
          <option >Teacher</option>
          <option>Admin</option>
          </select>
        </label>
        <button onClick={handlesubmit}>submit</button>
        </div>
    </div>
  )
}
