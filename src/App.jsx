import React, { useEffect, useState } from 'react'
import Login from './components/Authentication/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'

const App = () => {

  const [user,setUser] = useState(null);

  const handleLogin = (email,password) =>{
    if(email=='admin@example.com' && password=='123'
    ){
      setUser('admin')
    }
    else if(email=='employee@example.com' && password=='1234'){
      setUser('employee')
      
    }
    else{
      alert("Invalid Credentials")
    }
  }
  
  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> : ''}
    {user=='admin'? <AdminDashboard/> : ''}
    {user=='employee'? <EmployeeDashboard/> : ''}
    </>
  )
}



export default App
