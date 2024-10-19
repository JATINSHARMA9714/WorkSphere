import React from "react";
import FailedTask from "./FailedTask";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompletedTask from "./CompleteTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[55%] flex items-center justify-start gap-5 flex-nowrap py-5 w-full  mt-10 overflow-x-auto"
    >
      {data.tasks.map((elem, index) => {
        if (elem.newtask) {
          return <NewTask data={elem} key={index} />;
        }
        if (elem.active) {
          return <AcceptTask data={elem} key={index} />;
        }
        if (elem.completed) {
          return <CompletedTask data={elem} key={index} />;
        }
        if (elem.failed) {
          return <FailedTask data={elem} key={index} />;
        }
      })}
    </div>
  );
};

export default TaskList;
