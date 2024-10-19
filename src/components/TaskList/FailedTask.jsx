import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-[40vh] w-[32vw] bg-red-400 rounded-xl p-5">
      <div className=' w-full flex h-full flex-col justify-between'>
      <div>
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-xs">{data.date}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
        <p className="text-sm mt-2">
          {data.description}
        </p>
        </div>
        <div>
        <div className='mt-4'>
          <button className='w-full px-2 py-1 rounded-md bg-[#C6011F] font-semibold'>Expired</button>
        </div>
        </div>
        </div>
      </div>
  )
}

export default FailedTask
