import React, { useState }  from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { loginSuccess } from './counterSlice'
import { Student } from './Student'
import { Teacher } from './Teacher'
import { Admin } from './Admin'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


export const Login = () => {
const navigate=useNavigate()
  const [username,setUsername]= useState('')
  const [password,setPassword]= useState('')

  const users = useSelector((state)=> state.auth.users);

  const handleLogin = ()=> {
    if(users.username==username && users.password==password)
    {
    if(users.userType=='Teacher'){
      navigate('/teacher')
      toast('teacher')
    }
    else if (users.userType=='Student') {
      navigate('/student')
    }
    else if(users.userType=='Admin'){
      navigate('/admin')
    }
    else{
      alert("invalid user")
    }
    }

  };

  
  return (
    <div className='mainbox'>
      <ToastContainer/>
      <div className='box'>
        <h1>Login</h1>
        <label>username: <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}  placeholder='username' /></label>
        <label>password: <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder='password' /></label>
        <button onClick={handleLogin}>Login</button>
      </div>



    </div>    
  )
}
