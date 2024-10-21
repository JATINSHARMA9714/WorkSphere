import React from "react";

const AcceptTask = ({ data }) => {
  return (
    <div className="e-card  playing flex-shrink-0">
      <div className="image"></div>

      <div className="wave" style={{ background: 'linear-gradient(744deg, #ffeb3b, #fbc02d 60%, #fff176)' }}></div>
      <div className="wave" style={{ background: 'linear-gradient(744deg, #ffeb3b, #fbc02d 60%, #fff176)' }}></div>
      <div className="wave" style={{ background: 'linear-gradient(744deg, #ffeb3b, #fbc02d 60%, #fff176)' }}></div>

      

      <div className="flex p-5 w-full h-full relative flex-col justify-between">
        <div className="infotop">
          <h3 className="text-xs w-fit px-2 rounded py-1 bg-[#afbe255b]">
            {data.date}
          </h3>
          <h2 className="mt-2">{data.title}</h2>
          <div className="name mt-4">{data.description}</div>
        </div>
        <div className="flex flex-wrap w-full justify-between mt-4 font-semibold">
          <button className="bg-[#746b022b] rounded-md py-2 px-2 text-xs hover:bg-[#50C878]">
            Mark as Completed
          </button>
          <button className="bg-[#746b022b] rounded-md py-2 px-3 text-xs hover:bg-[#FF033E]">
            Mark as Failed
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcceptTask;
