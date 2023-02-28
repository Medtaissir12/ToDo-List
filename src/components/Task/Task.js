import React ,{useState} from 'react'
import { Button , Modal } from "react-bootstrap";
import "./Task.css";
import { useDispatch } from 'react-redux';
import {
  toggleIsDone,
  toggleDone,
  editTask,
} from "../../redux/Actions/actions";




const Task = ({ taskdetails , key }) => {

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleSave = () => {
    dispatch(editTask({edited,id: taskdetails.id}));
    handleClose()
};

const handleChange = (e) => {
  setEdited(e.target.value)
};



const handleShow = () => setShow(true);

const [edited, setEdited] = useState("");


  const dispatch=useDispatch()

  const handleIsDone=()=> {
    dispatch(toggleIsDone(taskdetails.id));
  }
  const handleDone = () => {
    dispatch(toggleDone(taskdetails.id));
  };
 

  

  




  return (
    <div className="task">
      <h2 className="task-todo"> {taskdetails.description} </h2>
      {taskdetails.isDone ? (
        <Button variant="outline-danger" onClick={handleDone}>
          Undo
        </Button>
      ) : (
        <Button variant="outline-success" onClick={handleIsDone}>
          Done
        </Button>
      ) }
      <Button variant="outline-warning" onClick={handleShow}>
        Edit
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        className="modal-container"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="task"
            placeholder="Edit Task"
            defaultValue={taskdetails.description}
            onChange={handleChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Task