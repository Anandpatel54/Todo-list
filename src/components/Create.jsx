import { useState } from "react";

const Create = (props) => {
  //const tasks = props.tasks;
  //const setTasks = props.setTasks;

  const {tasks, setTasks} = props;

    const [title, setTitle] = useState("");

    const TaskSubmitHandler = (e) => {
        e.preventDefault();
        setTasks([...tasks, { title: title, completed: false }]);
        setTitle("");
      };
  return (
    <form
        onSubmit={TaskSubmitHandler}
        className="w-[35%] flex justify-between px-5 my-[2%]"
      >
        <input
          className="px-5 py-3 text-yellow-100 outline-none w-[85%] rounded-xl bg-zinc-700"
          type="text"
          placeholder="write your next task"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button className="outline-none text-4xl  font-extrabold flex justify-center items-center w-[50px] h-[50px] rounded-full bg-orange-600">
          <i className="ri-add-fill"></i>
        </button>
      </form>
  )
}

export default Create