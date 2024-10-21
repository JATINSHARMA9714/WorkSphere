import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { json } from "react-router-dom";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const employeeData = JSON.parse(localStorage.getItem("employees"));

    const task = {
      title: taskTitle,
      active: false,
      category,
      completed: false,
      date: taskDate,
      description: taskDescription,
      failed: false,
      newtask: true,
    };

    employeeData.forEach((elem) => {
      if (elem.name == assignTo) {
        elem.tasks.push(task);
        elem.taskCount.newtask += 1;
        localStorage.setItem("employees", JSON.stringify(employeeData));
      }
    });

    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={submitHandler}
        className="flex flex-wrap w-full  items-start justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-md text-gray-200 font-semibold tracking-wider mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-md py-2 px-3 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Make a Ui Design"
            />
          </div>
          <div className="relative">
            <h3 className="text-md text-gray-200 tracking-wider font-semibold mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-md py-2  px-3 w-4/5  rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
            />
          </div>

          <div>
            <h3 className="text-md text-gray-200 tracking-wider font-semibold mb-0.5">Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="text-md py-2  px-3 w-4/5  rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Employee Name"
            />
          </div>

          <div>
            <h3 className="text-md text-gray-200 tracking-wider font-semibold mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-md py-2  px-3 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Design,Dev,etc"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-md text-gray-200 tracking-wider font-semibold mb-0.5">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-44 text-md py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button className="bg-emerald-500 py-3 font-semibold tracking-wide hover:bg-emerald-600 px-5 rounded text-md mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
