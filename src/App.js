import './App.css';
import TaskList from './components/TaskList/TaskList';
import AddTask from './components/AddTask/AddTask';

function App() {
  return (
    <div className="App app-container">
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
