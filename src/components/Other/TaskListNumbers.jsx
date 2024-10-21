import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-10 w-full justify-between gap-5 text-black'>
        <div style={{ background: 'linear-gradient(220deg, #4776E6, #8E54E9)' }} className='rounded-xl w-[45%] px-9 py-8  '>
            <h2 className='text-3xl font-semibold'>{data.taskCount.newtask}</h2>
            <h3 className='text-xl font-medium mt-2'>New Task</h3>
        </div>
      
        <div style={{ background: 'linear-gradient(220deg, #009933 60%, #00cc44)' }} className='rounded-xl w-[45%] px-9 py-8'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
            <h3 className='text-xl font-medium mt-2'>Completed Task</h3>
        </div>

        <div style={{ background: 'linear-gradient(220deg, #FFD200, #F7971E)' }} className='rounded-xl w-[45%] px-9 py-8'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
            <h3 className='text-xl font-medium mt-2'>Accepted Task</h3>
        </div>

        <div style={{ background: 'linear-gradient(220deg, #93291E, #ED213A)' }} className='rounded-xl w-[45%] px-9 py-8 bg-red-400'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
            <h3 className='text-xl font-medium mt-2'>Failed Task</h3>
        </div>

        
      
    </div>
  )
}

export default TaskListNumbers
