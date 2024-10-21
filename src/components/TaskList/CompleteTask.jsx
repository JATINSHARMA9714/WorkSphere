import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className="e-card  playing flex-shrink-0">
      <div className="image"></div>

      <div className="wave" style={{ background: 'linear-gradient(744deg, #00ff80, #009933 60%, #00cc44)' }}></div>
      <div className="wave" style={{ background: 'linear-gradient(744deg, #00ff80, #009933 60%, #00cc44)' }}></div>
      <div className="wave" style={{ background: 'linear-gradient(744deg, #00ff80, #009933 60%, #00cc44)' }}></div>
      
      

      <div className="flex p-5 w-full h-full relative flex-col justify-between">
      <div className="infotop">
      <h3 className='text-xs w-fit px-2 rounded py-1 bg-[#25be285b]'>{data.date}</h3>
          <h2 className='mt-2'>{data.title}</h2>
          <div className="name mt-4">{data.description}</div>
        </div>
        <div >
          <button className="w-full px-2 py-1 rounded-md text-sm bg-[#02740a2b]  font-semibold ">
            Completed
          </button>
        </div>
      </div>
    </div>
  )
}

export default CompleteTask
