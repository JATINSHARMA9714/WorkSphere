import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-[40vh] relative w-[32vw]  bg-yellow-400 rounded-xl p-5">
      <div className=' w-full flex h-full flex-col justify-between'>
      <div>
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 font-semibold text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-xs">{data.date}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
        <p className="text-sm mt-2">
          {data.description}
        </p>
        </div>
        <div>
        <div className='flex flex-wrap w-full justify-between mt-4 font-semibold'>
          <button className='bg-green-500 rounded-md py-2 px-3 text-sm hover:bg-green-600'>Mark as Completed</button>
          <button className='bg-red-500 rounded-md py-2 px-3 text-sm hover:bg-red-600'>Mark as Failed</button>
        </div>
        </div>
        </div>
      </div>
  )
}

export default AcceptTask
