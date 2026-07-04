import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [theme, setTheme] = useState('light')
  const changeTheme = (newTheme) => {
    setTheme(newTheme)
  }

  return (
    <div className='app'>
            <h1>Your theme is {theme}.</h1>
      
      <Navbar changeTheme={changeTheme} />
      {/* <Navbar theme={theme} changeTheme={changeTheme} /> */}
    </div>
  )
}
export default App
