import Counter from './components/Counter';
import './App.css';
import Todo from './components/Todo';
import RenderComponent from "./components/RenderData"
import Login from './components/Login';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

function App() {
  return (
    <>
    <Login/>
    <AddTask/>
    <TaskList/>
    </>
  );
}

export default App;
