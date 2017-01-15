const toDoListSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: String,
  completed: String
})

const ToDoMongModel = mongoose.model('ToDo', toDoListSchema)
module.exports = ToDoMongModel
