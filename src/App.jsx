import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const [title, setTitle] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const newtasks = { title, completed: false };
    console.log(newtasks);

    const copytasks = [...tasks];
    copytasks.push(newtasks);
    setTasks(copytasks);
    setTitle("");

    // setTasks([...tasks, newtasks]);
  };

  let taskrender = <h1 className="text-white">No Task Present</h1>;
  if (tasks.length > 0) {
    taskrender = tasks.map((task, index) => {
      return (
        <li className="text-[#CDBEA4]" key={index}>
          {task.title}
          <i className="text-[#CDBEA4] ri-file-edit-line"></i>
          <i className="text-[#CDBEA4] ri-delete-bin-7-fill"></i>
        </li>
      );
    });
  }

  return (
    <div className="w-full h-screen bg-[#CDBEA4] flex justify-center items-center">
      <div className="w-[90%] h-[85%] bg-[#0D0D0D] rounded-xl">
        <div className="header w-full h-[10%] p-12">
          <div className="flex justify-between cursor-pointer">
            <h1 className="text-[#cdbea4] text-2xl">
              XERO<span className="text-[#FF5530]">TODO</span>
            </h1>
            <i className="text-[#cdbea4] text-2xl ri-file-transfer-line"></i>
          </div>
          <div className="flex justify-center gap-2 items-center w-[25%] h-[25%] absolute top-1/3 left-1/2 border-2 -translate-y-1/2 -translate-x-1/2 rounded-[25px] border-[#243c5a]">
            <h1 className="text-white ">
              <span className="text-[#CDBEA4] text-2xl font-semibold">
                Todo Done <br /> keep it up
              </span>
            </h1>
            <div className="w-32 h-32 bg-[#FF5631] rounded-full text-white">
              <h1 className="absolute top-[47.4%] left-[68%] -translate-y-1/2 -translate-x-1/2 text-black text-3xl font-semibold">
                1/3
              </h1>
            </div>
          </div>
          <form
            onSubmit={submitHandler}
            className="absolute top-1/2 left-[40%]"
          >
            <input
              className="p-1"
              type="text"
              placeholder="Enter Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <button className="bg-[#FF5530] ml-4 rounded-full">
              <i className="text-4xl ri-add-circle-fill"></i>
            </button>
          </form>
          <ul className="list-none absolute top-[58%] left-[45%]">
            {taskrender}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
