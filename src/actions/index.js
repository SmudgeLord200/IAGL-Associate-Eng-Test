import axios from "axios";
import { FETCH_TODOS, ADD_TODO, UPDATE_TODO, DELETE_TODO } from "./types";

export function fetchTodos() {
  return async function (dispatch) {
    const { data } = await axios.get("http://localhost:9091/api/todo");
    dispatch(_setTodos(data));
  };
}

export function addTodo(todo) {
  return async function (dispatch) {
    const { data } = await axios.post("http://localhost:9091/api/todo", todo);
    dispatch(_addTodo(data));
  };
}

export function updateTodo(todo) {
  return async function (dispatch) {
    const { data } = await axios.put("http://localhost:9091/api/todo", todo);
    dispatch(_updateTodo(data));
  };
}

export function deleteTodo(id) {
  return async function (dispatch) {
    await axios.delete(`http://localhost:9091/api/todo/${id}`);
    dispatch(_deleteTodo(id));
  };
}

function _setTodos(data) {
  return {
    type: FETCH_TODOS,
    payload: data,
  };
}

function _addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}

function _updateTodo(todo) {
  return {
    type: UPDATE_TODO,
    payload: todo,
  };
}

function _deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: id,
  };
}