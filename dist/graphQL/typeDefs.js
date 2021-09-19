"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = (0, apollo_server_express_1.gql) `
  type Todo {
    title: String!
    description: String!
    createdAt: String!
    updatedAt: String!
  }

  input createTodoInput {
    title: String!
    description: String!
  }

  input updateTodoInput {
    id: ID!
    title: String!
    description: String!
  }

  type deleteResponse {
    msg: String!
    deletedTodo: Todo!
  }

  type Query {
    getAllTodosFromDb: [Todo]!
    getTodoByIdFromDb(id: ID): Todo!
  }

  type Mutation {
    createTodoIntoDb(todo: createTodoInput): Todo!
    updateTodoIntoDb(todo: updateTodoInput): Todo!
    deleteTodoIntoDb(id: ID): deleteResponse!
  }
`;
exports.default = typeDefs;
//# sourceMappingURL=typeDefs.js.map