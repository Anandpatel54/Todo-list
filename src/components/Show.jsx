const Show = (props) => {
  
  const { tasks, setTasks } = props;

  const DeleteHandler = (i) => {
    let isValid = false;
    if (!tasks[i].completed) {
        isValid = confirm("Do you really Want to delete this Task ?");
    }

    if (isValid || tasks[i].completed) {
        setTasks(tasks.filter((task, index) => index !== i));
    }
};

  const completeTaskToggle = (i) => {
    // e.target.classList.toggle("bg-green-500");
    // e.target.classList.toggle("border");
    //  e.target.nextSibling.classList.toggle("line-through");

    const copyTask = [...tasks];
    copyTask[i].completed = !tasks[i].completed;
    setTasks(copyTask);
  };

  let tasksrander = (
    <h1 className="text-center font-extrabold text-2xl text-orange-500">
      No pending Task....
    </h1>
  );
  if (tasks.length > 0) {
    tasksrander = tasks.map((task, index) => {
      return (
        <li
          key={index}
          className="mb-5 flex justify-between items-center border rounded-xl p-5"
        >
          <div className="flex items-center">
            <div
              onClick={() => completeTaskToggle(index)}
              className={`${
                task.completed ? "bg-green-500" : "border"
              } cursor-pointer mr-4 rounded-full w-[30px] h-[30px] border border-orange-500`}
            ></div>
            <h1
              className={`${
                task.completed && "line-through"
              } cursor-pointer text-2xl font-extrabold text-yellow-100`}
            >
              {task.title}
            </h1>
          </div>
          <div className="flex gap-3 text-2xl text-yellow-100">
            <i className="cursor-pointer ri-file-edit-line"></i>
            <i
              onClick={() => DeleteHandler(index)}
              className="cursor-pointer ri-delete-bin-3-line"
            ></i>
          </div>
        </li>
      );
    });
  }
  return <ul className="list-none w-[35%]">{tasksrander}</ul>;
};

export default Show;
