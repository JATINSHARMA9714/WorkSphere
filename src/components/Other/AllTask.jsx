import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const authData = useContext(AuthContext);

  const [employeeData,setEmployeeData] = useState('');

  useEffect(()=>{
    setEmployeeData(authData.employees);
  },[localStorage.getItem('employees')])
  
  

  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-[40vh]'>
      <div className='font-semibold mb-2 py-2 px-4 flex justify-between items-center rounded'>
        <h2 className='w-1/5'>Employee Name</h2>
        <h3 className='w-1/5'>New Task</h3>
        <h5 className='w-1/5'>Active Task</h5>
        <h5 className='w-1/5'>Completed Task</h5>
        <h5 className='w-1/5'>Failed Task</h5>
      </div>
      <div id='verticleScroll' className='h-[80%] overflow-auto'>
      {employeeData && employeeData.map((elem,index)=>{
        return <div key={index} className='border-2 border-zinc-600 mb-2 py-2 px-4 flex justify-between items-center rounded'>
        <h2 className='w-1/5 font-medium'>{elem.name}</h2>
        <h3 className='w-1/5 text-blue-600'>{elem.taskCount.newtask}</h3>
        <h5 className='w-1/5 text-yellow-600'>{elem.taskCount.active}</h5>
        <h5 className='w-1/5 text-green-600'>{elem.taskCount.completed}</h5>
        <h5 className='w-1/5 text-red-600'>{elem.taskCount.failed}</h5>
      </div>
      })}
      </div>

    </div>
  )
}

export default AllTask
 