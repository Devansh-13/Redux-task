import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, removeTask ,editTask} from '../features/tasks/taskSlice';

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector(state => state.tasks);
  const { token } = useSelector(state => state.auth);
  const [editModeId,setEditModeId] = useState(null);
  const [edittedTask,setedittedTask] = useState('')

  useEffect(() => {
    if (token) dispatch(fetchTasks());
  }, [dispatch, token]);

  const handleEdit = (id)=>{
    setEditModeId(id);
  }

  const handleSave =(id)=>{
    dispatch(editTask({id:id,title:edittedTask,description:edittedTask}));
    setEditModeId(null);
    setedittedTask("")
  }


  if (loading) return <div className="text-center py-6">Loading tasks...</div>;
  if (error) return <div className="text-center text-red-500 py-6">{error}</div>;

  if(token) return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      {tasks.length === 0 ? (
        <div className="text-center text-gray-500">No tasks available</div>
      ) : (
        tasks.map(task => (
          <div key={task.id} className="bg-white p-4 mb-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                {editModeId===task.id && <div>
                  <input
                    type="text"
                    placeholder="Enter your task"
                    value={edittedTask}
                    onChange={(e) => setedittedTask(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 mb-4"
                  />
                  </div>}
                {editModeId!==task.id && 
                <>
                <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
                <p className="text-gray-600">{task.description}</p>
                </>
                }
              </div>
            <div>
              <button
                onClick={() => editModeId===task.id ? handleSave(task.id) : handleEdit(task.id)}
                className={editModeId===task.id ? 
                  "bg-green-500 text-white px-3 py-1 rounded-full hover:bg-green-600 transition duration-300"
                  :
                  "bg-orange-500 text-white px-3 py-1 rounded-full hover:bg-orange-600 transition duration-300"
                }
              >
               {editModeId===task.id ? "Save" : "Edit"}
              </button>

              <button
                onClick={()=>dispatch(removeTask(task.id))}
                className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition duration-300"
              >
                x
              </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
  return null;
};

export default TaskList;
