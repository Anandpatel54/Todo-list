import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([
    { title: "Task 1", completed: false },
    { title: "Task 2", completed: true },

  ]);

  const completeTaskToggle = (e, i) =>{
   e.target.classList.toggle("bg-green-500")
   e.target.classList.toggle("border")
   e.target.nextSibling.classList.toggle("line-through")
   
  }

  let tasksrander = (
    <h1 className="text-center font-extrabold text-2xl text-orange-500">No pending Task....</h1>
  )
  if(tasks.length > 0){
    tasksrander = tasks.map((task, index)=>{
      return(
        <li key={index} className="mb-5 flex justify-between items-center border rounded-xl p-5">
        <div className="flex items-center">
          <div onClick={(e) => completeTaskToggle(e, index)} className="cursor-pointer mr-4 rounded-full w-[30px] h-[30px] border border-orange-500"></div>
          <h1 className="cursor-pointer text-2xl font-extrabold text-yellow-100">
            {task.title}
          </h1>
        </div>
        <div className="flex gap-3 text-2xl text-yellow-100">
          <i className="cursor-pointer ri-file-edit-line"></i>
          <i className="cursor-pointer ri-delete-bin-3-line"></i>
        </div>
      </li>
      
      )

    })
  }

  return (
    <div className="border-t-2 w-screen h-screen bg-zinc-800 flex items-center flex-col">
      <div className="mt-[7%] w-[35%] h-[25%] border rounded-3xl flex justify-around items-center">
        <div className="text-yellow-100">
          <h1 className="text-3xl font-bold">LETS TODO</h1>
          <p>Keeps doing things</p>
        </div>
        <div className="text-4xl font- extrabold w-[150px] h-[150px] bg-orange-600 rounded-full flex items-center justify-center">
          1/3
        </div>
      </div>
      {/*  */}
      <form className="w-[35%] flex justify-between px-5 my-[2%]">
        <input
          className="px-5 py-3 text-yellow-100 outline-none w-[85%] rounded-xl bg-zinc-700"
          type="text"
          placeholder="write your next task"
        />
        <button className="outline-none text-4xl  font-extrabold flex justify-center items-center w-[50px] h-[50px] rounded-full bg-orange-600">
          <i className="ri-add-fill"></i>
        </button>
      </form>
      {/*  */}
      <ul className="list-none w-[35%]">{tasksrander}</ul> 
    </div>
  );
};

export default App;
