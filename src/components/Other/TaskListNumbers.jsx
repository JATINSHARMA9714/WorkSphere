import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-10 w-full justify-between gap-5 text-black'>
        <div className='rounded-xl w-[45%] px-9 py-8 bg-blue-400 '>
            <h2 className='text-3xl font-semibold'>{data.taskCount.newtask}</h2>
            <h3 className='text-xl font-medium mt-2'>New Task</h3>
        </div>
      
        <div className='rounded-xl w-[45%] px-9 py-8 bg-green-400'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
            <h3 className='text-xl font-medium mt-2'>Completed Task</h3>
        </div>

        <div className='rounded-xl w-[45%] px-9 py-8 bg-yellow-400 '>
            <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
            <h3 className='text-xl font-medium mt-2'>Accepted Task</h3>
        </div>

        <div className='rounded-xl w-[45%] px-9 py-8 bg-red-400'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
            <h3 className='text-xl font-medium mt-2'>Failed Task</h3>
        </div>

        
      
    </div>
  )
}

export default TaskListNumbers
