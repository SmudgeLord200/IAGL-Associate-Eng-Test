
let nextId = 1;

let todoList = {
  todos: [
    {
      "id": 0,
      "task": "This is a todo example"
    }
  ]
};

module.exports = {
  // getTodos returns the whole list object as the frontend expects it.
  getTodos: () => Promise.resolve(todoList),

  // addTodo now assigns a unique ID and returns the newly created todo.
  addTodo: (todo) => {
    const newTodo = { ...todo, id: nextId++ };
    todoList.todos.push(newTodo);
    return Promise.resolve(newTodo);
  },

  // updateTodo finds the todo, updates it, and returns the updated todo.
  updateTodo: (updatedTodo) => {
    const todoIndex = todoList.todos.findIndex(todo => todo.id === updatedTodo.id);
    if (todoIndex === -1) return Promise.resolve(null);

    const newTodo = { ...todoList.todos[todoIndex], ...updatedTodo };
    todoList.todos[todoIndex] = newTodo;
    return Promise.resolve(newTodo);
  },

  // deleteTodo finds and removes the todo.
  deleteTodo: (id) => {
    const idToDelete = parseInt(id, 10);
    todoList.todos = todoList.todos.filter(todo => todo.id !== idToDelete);
    return Promise.resolve();
  }
};