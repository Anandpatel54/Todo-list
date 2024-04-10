import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const submitHandlar = (e) => {
    e.preventDefault();
    const newTasks = { title, completed: false };
    console.log(newTasks);

    const copyTasks = [...tasks];
    copyTasks.push(newTasks);
    setTasks(copyTasks);
    setTitle("");
  };
  let taskRender = <h1 className="font-semibold text-">No Task Present</h1>;
  if (tasks.length > 0) {
    taskRender = tasks.map((task, index) => {
      return (
        <li key={index} className="bg-gray-100 p-3 rounded-md my-2 flex justify-between">
          {task.title}
          <div className="">
          <i className="gap-6 cursor-pointer ri-edit-fill"></i>
          <i className="cursor-pointer text-[#FF5635] text-1xl ri-delete-bin-7-fill"></i>
          </div>
        </li>
      );
    });
  }
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="w-[30%] shadow-lg shadow-gray-500/50 flex items-center justify-center gap-6 rounded-[35px]">
        <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Todo list
        </h1>
        <div className="w-[10vw] h-[10vw] rounded-full shadow-lg shadow-gray-500/50 ml-12">
          <h2 className="text-center mt-12">Write task</h2>
        </div>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={submitHandlar} className="flex">
            <input
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Enter the title"
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button className="bg-red-100 ml-8 p-2 rounded-md"><i className="bg-[#FF5631] text-white ri-add-line"></i></button>
          </form>
          <ul className="mt-8 divide-y divide-gray-200">{taskRender}</ul>
        </div>
      </div>
    </div>
  );
};

export default App;
