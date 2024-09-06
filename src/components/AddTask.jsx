import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../features/tasks/taskSlice';

const AddTask = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ id: Date.now(), title: task, description: task }));
    setTask("");
  };

  if (token) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form 
          onSubmit={handleSubmit} 
          className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
        >
          <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
          <input
            type="text"
            placeholder="Enter your task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 mb-4"
          />
          <button 
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Add Task
          </button>
        </form>
      </div>
    );
  }
  return null;
};

export default AddTask;
