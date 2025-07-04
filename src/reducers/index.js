import { ADD_TODO, UPDATE_TODO, FETCH_TODOS, DELETE_TODO } from "../actions/types";

const initialState = {
  data: {
    todos: []
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return { ...state, data: action.payload };
    case ADD_TODO:
      return {
        ...state,
        data: {
          ...state.data,
          todos: [...state.data.todos, action.payload]
        }
      };
    case UPDATE_TODO:
      return {
        ...state,
        data: {
          ...state.data,
          todos: state.data.todos.map(todo =>
            todo.id === action.payload.id ? action.payload : todo
          )
        }
      };
    case DELETE_TODO:
      return {
        ...state,
        data: {
          ...state.data,
          todos: state.data.todos.filter(todo => todo.id !== action.payload)
        }
      };
    default:
      return state;
  }
}