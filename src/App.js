import AddTask from './components/Addtask/AddTask';
import './App.css';
import './components/ListTask/ListTask.css'
import ListTask from './components/ListTask/ListTask';

function App() {
  return (
    <div className="App">
      <div className="ListTask">
        <ListTask />
        <AddTask />
        <footer> Design by Taissir © </footer>
      </div>
    </div>
  );
}

export default App;
