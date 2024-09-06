import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Todo = () => {
  const todos = useSelector((state) => state.todos.tasks);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    dispatch({
      type: "ADD_TASK",
      payload: { id: new Date().toISOString(), title: newTask, completed: false },
    });
    setNewTask("");
  };

  const handleRemoveTask=(id)=>{
    dispatch({
        type: "REMOVE_TASK",
        payload:{id},
      });
     
  }

  const handleToggleTask=(id)=>{
    dispatch({
        type: "TOGGLE_TASK",
        payload:{id},
      });
     
  }

  return (
    <>
      <div>
        <input type="text" name="" id="" value={newTask} onChange={(e)=>setNewTask(e.target.value)}/>
        <button onClick={handleAddTask}>ADD TASK</button>
      </div>

      <div style={{border:"1px solid red",padding :"10px",margin:"10px"}}>
        {todos.map((todo) => (
          <>
          <div>{todo.id}</div>
            <div>{todo.title}</div>
            <div>{todo.completed ===true ? "Done" : "Incomplete"}</div>
            <button onClick={()=>handleToggleTask(todo.id)}>Toggle</button>
            <button onClick={()=>handleRemoveTask(todo.id)}>Remove</button>
          </>
        ))}
      </div>
    </>
  );
};

export default Todo;
