import React, { useContext } from 'react'


import { ThemeContext } from './Themeprovider'

const Theme = () => {
const value=useContext(ThemeContext)

const {theme,toggleTheme}=value


  return (
    <div style={{backgroundColor:theme=='light'?'white':'black',color:theme=='light'?'black':'white'}}>
      Theme
      <button onClick={toggleTheme}>toggle theme</button>
      </div>
  )
}

export default Theme