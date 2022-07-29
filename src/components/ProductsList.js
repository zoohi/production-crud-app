import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "../features/tasks/tasksSlice";

function ProductsList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };
  const [item ,setItem] =useState ('');
  return (
    <div className="w-4/6">
      <div className="my-8">
      <input type="text" onChange={(e)=> setItem(e.target.value)}  placeholder='search products on title base' className='mb-2 text-white pl-4 py-2 rounded-md outline  bg-gray-700 w-full border-2 border-gray-200'  />
        </div>
      <header className="flex justify-between items-center py-4">
        <h1>Products ({tasks.length})</h1>

        <Link
          to="/create-task"
          className="bg-indigo-600 px-2 py-1 rounded-sm text-sm shadow-sm"
        >
          Add Product
        </Link>
      </header>

      <div className="grid grid-cols-2 gap-3">
        {tasks.filter((task) => {
          return item.toLowerCase()==='' ?task :task.title.toLowerCase().includes(item);
        }).map((task) => (
          <div className="bg-neutral-800 p-4 rounded-md" key={task.id}>
            <header className="flex justify-between">
              <h3 className="text-lg font-bold"><span className="text-sm text-white pr-4 ">
                product Name:
                </span>{task.title}</h3>
                
              <div className="flex gap-x-2">
                <Link
                  to={`/edit-task/${task.id}`}
                  className="bg-zinc-600 px-2 py-1 text-xs rounded-md self-center"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="bg-red-500 px-2 py-1 text-xs rounded-md"
                >
                  delete
                </button>
              </div>
            </header>
            <div className="flex space-x-5 py-4">
              <span>product image:</span>
                  <img className="w-20 h-12  rounded-lg" src={task.url} alt="" />
                 </div>
            <p> <span className="text-sm text-white pr-4" > Description:</span> {task.description}</p>
            <p className="text-sm text-slate-200 "><span className="pr-4">product Price:</span>$ {task.price}</p>
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
