import {
  ADD_TASK,
  TOGGLE_IS_DONE,
  TOGGLE_DONE,
  EDIT_TASK,
} from "../Constants/action-types";



export  const addTask = (payload) => {
    
    return{
        type:"ADD_TASK",
        payload,
    }
}

export const toggleIsDone = (payload) => {
  return {
    type: "TOGGLE_IS_DONE",
    payload,
  };
};
export const toggleDone = (payload) => {
  return {
    type: "TOGGLE_DONE",
    payload,
  };
};
export const editTask = (payload) => {
  return {
    type: "EDIT_TASK",
    payload,
  };
};