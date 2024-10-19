import React from "react";
import FailedTask from "./FailedTask";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompletedTask from "./CompleteTask";

const TaskList = ({data}) => {
  return (
    <div
      id="tasklist"
      className="h-[55%] flex items-center justify-start gap-5 flex-nowrap py-5 w-full  mt-10 overflow-x-auto"
    >

      {data.tasks.map((elem,index)=>{
          if(elem.active){
            return <AcceptTask key={index}/>
          }
          if(elem.completed){
            return <CompletedTask key={index}/>
          }
          if(elem.failed){
            return <FailedTask key={index}/>
          }
          if(elem.newtask){
            return <NewTask key={index}/>
          }
      })}

      

      
    </div>
  );
};

export default TaskList;
