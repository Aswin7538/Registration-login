import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './App.css'
import { ThemeContext } from './Themeprovider'

export const Navigation = () => {
  const value=useContext(ThemeContext)
  const {theme,toggleTheme}=value

  let themestyle={
    backgroundColor:theme=='light'?'white':'black',
    color:theme=='light'?'black':'white'
  }
  return (
    <>
    <div className=' nav '>
        <Link to={'/form'}><div>Register</div></Link>
        <Link to={'/login'}><div>Login</div></Link>
        <Link to={'/theme'}><div>theme</div></Link>

        <button onClick={toggleTheme}>toggle theme</button>
    </div>
    <div style={themestyle}>
    <Outlet/>
    </div>
    </>
  )
}
