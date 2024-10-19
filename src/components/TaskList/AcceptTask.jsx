import React from 'react'

const AcceptTask = () => {
  return (
    <div className="flex-shrink-0 relative w-[32vw] h-full bg-yellow-400 rounded-xl p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-xs">20 Feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iure
          accusamus laborum laudantium ut officia.
        </p>
        <div className='flex w-full justify-between mt-4'>
          <button className='bg-green-500 rounded-md py-1 px-2 text-sm'>Mark as Completed</button>
          <button className='bg-red-500 rounded-md py-1 px-2 text-sm'>Mark as Failed</button>
        </div>
      </div>
  )
}

export default AcceptTask
