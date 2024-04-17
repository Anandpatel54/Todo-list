
const Header = (props) => {

  //const tasks = props;
  const { tasks } = props;

  return (
    <div className="mt-[7%] w-[35%] h-[30vh] border rounded-3xl flex justify-around items-center">
      <div className="text-yellow-100">
        <h1 className="text-3xl font-bold">LETS TODO</h1>
        <p>Keeps doing things</p>
      </div>
      <div className="text-4xl font- extrabold w-[150px] h-[150px] bg-orange-600 rounded-full flex items-center justify-center">
        {tasks.filter((t) => t.completed === true).length}/{tasks.length}
      </div>
    </div>
  );
};

export default Header;
