const mongoose = require('mongoose');

const todosSchema = new mongoose.Schema({
  todoTask: String,
});

module.exports = mongoose.model('Todos', todosSchema);
