"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoController_1 = require("../controller/todoController");
const resolvers = {
    Query: {
        getAllTodosFromDb: async () => await (0, todoController_1.getAllTodos)(),
        getTodoByIdFromDb: async (parent, args) => {
            const id = args.id;
            return await (0, todoController_1.getTodoById)(id);
        },
    },
    Mutation: {
        createTodoIntoDb: async (parent, args) => await (0, todoController_1.createTodo)(args.todo),
    },
};
exports.default = resolvers;
//# sourceMappingURL=resolvers.js.map