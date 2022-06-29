
import React from 'react'
import './App.css'
import Login from './components/Login'
import Logout from './components/Logout'
import Profile from './components/Profile'




function App() {
  return (
   <>
   <h1 className="text-3xl font-bold underline text-cyan-800" align='center'>
   Welcome to Popular Universities 
  </h1>
  
   
    <Login />
    <Logout />
    <Profile />
  
   </>
  )
}

export default App