import {
  createTodo,
  getTodoById,
  getAllTodos,
  updateTodo,
  deleteTodo,
} from "../controller/todoController";

interface createTodoInput {
  title: String;
  description: String;
}

interface argsForCreateTodo {
  todo: createTodoInput;
}

const resolvers = {
  Query: {
    getAllTodosFromDb: async () => await getAllTodos(),
    getTodoByIdFromDb: async (parent: object, args: { id: string }) => {
      const id = args.id;
      return await getTodoById(id);
    },
  },

  Mutation: {
    createTodoIntoDb: async (parent: object, args: argsForCreateTodo) =>
      await createTodo(args.todo),
  },
};

export default resolvers;
