const express = require('express');
const cors = require('cors');
const repository = require('./repository/todo');
const todoService = require('./service/todo')(repository);

const server = () => {
  const server = express();
  server.use(express.json());
  server.use(cors());

  server.get('/api/todo', async (req, res) => {
    res.json(await todoService.getTodos());
  });

  server.post('/api/todo', async (req, res) => {
    const todo = req.body;
    res.json(await todoService.addTodo(todo));
  });

  server.put('/api/todo', async (req, res) => {
    const todo = req.body;
    res.json(await todoService.updateTodo(todo));
  });

  server.delete('/api/todo/:id', async (req, res) => {
    const id = req.params.id;
    res.json(await todoService.deleteTodo(id));
  });
  
  /**
  POST /api/todo
  {
   "task": "Some API"
  }

   {
    "todos": [
      {
        "task": "Some API"
      }
    ]
   }
  **/

  return server;
};
module.exports = server;