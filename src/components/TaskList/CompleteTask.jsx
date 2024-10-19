import React from 'react'

const CompleteTask = () => {
  return (
    <div className="flex-shrink-0 h-full w-[32vw] bg-green-400 rounded-xl p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-xs">20 Feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iure
          accusamus laborum laudantium ut officia.
        </p>
        <div className='mt-4'>
          <button className='w-full px-2 py-1 rounded-md bg-[#17B169] font-semibold'>Completed</button>
        </div>
      </div>
  )
}

export default CompleteTask
