import { v4 as uuidv4 } from "uuid";
import {
  ADD_TASK,
  TOGGLE_IS_DONE,
  TOGGLE_DONE,
  EDIT_TASK,
} from "../Constants/action-types";

const initialState = {
  listTodo: [
    { id: uuidv4(), description: "I want to buy clothes ", isDone: false },
    { id: uuidv4(), description: "I want to buy a playstation ", isDone: true },
    { id: uuidv4(), description: "I want to buy a car ", isDone: true },
    { id: uuidv4(), description: "I want to buy a house ", isDone: false },
  ],
};

function TodoReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_TASK:
      return {
        listTodo: [
          ...state.listTodo,
          {
            id: uuidv4(),
            description: payload,
            isDone: false,
          },
        ],
      };

    case TOGGLE_IS_DONE:
      return {
        listTodo: state.listTodo.map((task) =>
          task.id === payload ? { ...task, isDone: !task.isDone } : task
        ),
      };
    case TOGGLE_DONE:
      return {
        listTodo: state.listTodo.map((task) =>
          task.id === payload ? { ...task, isDone: false } : task
        ),
      };
    case EDIT_TASK:
      return {
        listTodo: state.listTodo.map((task) =>
          task.id === payload.id
            ? { ...task, description: payload.edited }
            : task
        ),
      };

    default:
      return state;
  }
}

export default TodoReducer;
