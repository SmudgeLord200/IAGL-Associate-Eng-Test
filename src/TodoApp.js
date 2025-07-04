import TodoList from "./component/TodoList";
import AddTodo from "./component/AddTodo";
import "./styles.css";

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}