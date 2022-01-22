import React, { useState } from 'react';
import { Navbar, Welcome, Services, Transactions, Footer } from './components/Index'

const App = () => {

  const [theme, setTheme] = useState('light');


  const toggleTheme = () => {
    console.log(theme)
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark')

      setTheme('light')
      localStorage.theme = 'dark'
    } else {

      document.documentElement.classList.add('dark')
      setTheme('dark')
      localStorage.theme = 'light'
    }




  }


  return (
    <div className="min-h-screen">
      <div className={`gradient-bg-welcome-${theme}`}>
        <Navbar theme={toggleTheme} />
        <Welcome theme={toggleTheme} />

      </div>
      <div className={`gradient-bg-services-${theme}`} >
        <Services />
      </div>
      <div className={`gradient-bg-transactions-${theme}`} >
        <Transactions />
      </div>
      <div className={`gradient-bg-footer-${theme}`}>
        <Footer />

      </div>




    </div>
  )
}

export default App;
