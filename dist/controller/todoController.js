"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.createTodo = exports.getTodoById = exports.getAllTodos = void 0;
const todoModel_1 = __importDefault(require("../model/todoModel"));
async function getAllTodos() {
    return await todoModel_1.default.find();
}
exports.getAllTodos = getAllTodos;
async function getTodoById(id) {
    return await todoModel_1.default.findById(id);
}
exports.getTodoById = getTodoById;
async function createTodo(todo) {
    return await todoModel_1.default.create(todo);
}
exports.createTodo = createTodo;
async function updateTodo(id, updatedTodo) {
    return await todoModel_1.default.findByIdAndUpdate(id, updatedTodo, { new: true });
}
exports.updateTodo = updateTodo;
async function deleteTodo(id) {
    const deletedTodo = await todoModel_1.default.findByIdAndDelete(id).exec();
    const response = {
        msg: "Deleted successfully",
        deleteData: deletedTodo,
    };
    return response;
}
exports.deleteTodo = deleteTodo;
//# sourceMappingURL=todoController.js.map