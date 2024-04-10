import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim()) return; // Prevent submitting empty task
    const newTask = { id: Date.now(), title, completed: false };
    setTasks([...tasks, newTask]);
    setTitle("");
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const taskRender = tasks.length > 0 ? (
    tasks.map(task => (
      <li key={task.id} className={`flex items-center justify-between border-b border-gray-200 py-3 px-4 ${task.completed ? 'line-through text-gray-400' : 'text-gray-900'}`}>
        <span>{task.title}</span>
        <div>
          <button className="text-sm text-red-600 mr-2" onClick={() => deleteTask(task.id)}><i className="ri-delete-bin-7-fill"></i></button>
          <button className="text-sm text-blue-600" onClick={() => toggleTaskCompletion(task.id)}><i className="ri-edit-fill"></i></button>
        </div>
      </li>
    ))
  ) : (
    <li className="text-gray-500 py-3 px-4">No tasks present</li>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Todo List</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={submitHandler}>
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
              <div className="mt-1">
                <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
              </div>
            </div>

            <div className="mt-6">
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Add Task
              </button>
            </div>
          </form>

          <ul className="mt-8 divide-y divide-gray-200">
            {taskRender}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
