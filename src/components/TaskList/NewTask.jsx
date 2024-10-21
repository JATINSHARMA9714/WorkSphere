import React from "react";

const NewTask = ({ data }) => {
  return (
    <div className="e-card  playing flex-shrink-0">
      <div className="image"></div>

      <div className="wave" style={{ background: 'linear-gradient(744deg, #af40ff, #5b42f3 60%, #00ddeb)' }}></div>
      <div className="wave" style={{ background: 'linear-gradient(744deg, #af40ff, #5b42f3 60%, #00ddeb)' }}></div>
      <div className="wave" style={{ background: 'linear-gradient(744deg, #af40ff, #5b42f3 60%, #00ddeb)' }}></div>

      <div className="flex p-5 w-full h-full relative flex-col justify-between">
      <div className="infotop">
      <h3 className='text-xs w-fit px-2 rounded py-1 bg-[#4125be5b]'>{data.date}</h3>
          <h2 className='mt-2'>{data.title}</h2>
          <div className="name mt-4">{data.description}</div>
        </div>
        <div >
          <button className="w-full px-2 py-1 text-sm rounded-md bg-[#0243742b]  font-semibold hover:bg-[#02437457]">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
