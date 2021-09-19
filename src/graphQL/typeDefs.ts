import { gql } from "apollo-server-express";

const typeDefs = gql`
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

export default typeDefs;
