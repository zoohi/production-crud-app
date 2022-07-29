import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addTask, editTask } from "../features/tasks/tasksSlice";
import { v4 as uuid } from "uuid";

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
    image : "" ,
    price : "" ,
    url :    "" ,
    inventoryDate : ""
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
      [e.target.price] :e.target.value,
      [e.target.url] :e.target.value ,
    });
  };

  const handleChangeUrl = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      dispatch(editTask({ ...task, id: params.id }));
    } else {
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    }

    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, [params, tasks]);

  return (
    <div className="bg-gray-800 h-screen m-12">
      <form onSubmit={handleSubmit} className=" max-w-sm  p-4">
      <label className="block text-sm font-bold">Product:</label>
      <input
        type="text"
        name="title"
        onChange={handleChangeUrl}
        value={task.title}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        placeholder="Write a title"
        autoFocus
      />
      <label className="text-lg font-normal text-white" > product price </label>
      <input
        type="number"
        name="price"
        onChange={handleChange}
        value={task.price}
        className="w-full p-2 rounded-md text-white bg-zinc-600 mb-2"
        placeholder="Enter Price"
        autoFocus
      />
      <label>
        Description:
        <textarea
          type="text"
          name="description"
          onChange={handleChange}
          value={task.description}
          className="w-full p-2 rounded-md bg-zinc-600 mb-2"
          placeholder="Write a description"
        />
      </label>
      <input
          type="text"
          name="url"
          onChange={handleChange}
          value={task.url}
          className="w-full p-2 rounded-md text-white bg-zinc-600 mb-2"
          placeholder="Enter image url"
        />
      
      <button type="submit" className="bg-indigo-600 px-2 py-1">Submit</button>
    </form>

    </div>
  );
}

export default TaskForm;
