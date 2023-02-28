import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/Actions/actions";
import './AddTask.css'

const AddTask = () => {
  const dispatch = useDispatch()
  const [newTask, setNewTask] = useState("");
  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit=() =>{
    dispatch(addTask(newTask));
    setNewTask("")

  }

  return (
    <div className="addTask">
      <label >New Todo</label>
      <input
        type="text"
        placeholder="What do you want to do?"
        name="Task"
        onChange={handleChange}
        value={newTask}
      />
      <Button variant="info" onClick={handleSubmit}>
        Add
      </Button>
    </div>
  );
};

export default AddTask;
