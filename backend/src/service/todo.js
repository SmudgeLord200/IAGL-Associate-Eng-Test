const todoService = (repository) => {
  return {
    getTodos: async () => {
      return await repository.getTodos()
    },
    addTodo: async (todo) => {
      return await repository.addTodo(todo)
    },
    updateTodo: async (todo) => {
      return await repository.updateTodo(todo)
    },
    deleteTodo: async (id) => {
      return await repository.deleteTodo(id)
    },
  };
};

module.exports = todoService;