import todoModel from "../model/todoModel";
interface createTodoInterface {
  title: String;
  description: String;
}
async function getAllTodos() {
  return await todoModel.find();
}

async function getTodoById(id: String) {
  return await todoModel.findById(id);
}

async function createTodo(todo: createTodoInterface) {
  return await todoModel.create(todo);
}

async function updateTodo(id: string, updatedTodo: createTodoInterface) {
  return await todoModel.findByIdAndUpdate(id, updatedTodo, { new: true });
}

async function deleteTodo(id: string) {
  const deletedTodo = await todoModel.findByIdAndDelete(id).exec();
  const response = {
    msg: "Deleted successfully",
    deleteData: deletedTodo,
  };
  return response;
}

export { getAllTodos, getTodoById, createTodo, updateTodo, deleteTodo };
