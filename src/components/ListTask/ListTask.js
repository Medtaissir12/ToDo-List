import React, { useState , useEffect } from "react";
import Task from "../Task/Task";
import { useSelector } from "react-redux";
import './ListTask.css'
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toggleDone } from "../../redux/Actions/actions";

const ListTask = () => {
  const toDoList = useSelector((state) => state.TodoReducer.listTodo);
  const dispatch = useDispatch()
  const [showDone, setShowDone] = useState(false);
  const [showNotDone, setShowNotDone] = useState(false);
  const [List, setList] = useState([]);

  const handleShowDone = () => {
    setShowDone(true);
  };
  const handleShowNotDone = () => {
    setShowNotDone(true);
    setShowDone(false);
    
  };
  const handleReset = () => {
    setShowDone(false);
    setShowNotDone(false);
    dispatch(toggleDone()) ;
    
  };

  useEffect(() => {
    setList(toDoList);
    if (showDone === true) {
      setList(toDoList.filter((task) => task.isDone === true));
    } else if (showNotDone === true) {
      setList(toDoList.filter((task) => task.isDone === false));
    }
  }, [showDone, showNotDone, toDoList]);

  return (
    <div className="ListTask">
      <h1>
        Get To Work! <span> Todo List Made With Redux.</span>
      </h1>
      <div className="fiterbtn">
        <Button variant="success" onClick={handleShowDone}>
          filter by Done
        </Button>{" "}
        <Button variant="danger" onClick={handleShowNotDone}>
          filter by not done
        </Button>{" "}
        <Button variant="light" onClick={handleReset}>
          Reset
        </Button>
      </div>

      {List.map((taskdetails) => (
        <Task taskdetails={taskdetails} />
      ))}
    </div>
  );
};

export default ListTask;
