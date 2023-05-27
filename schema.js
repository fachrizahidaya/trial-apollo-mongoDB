const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Article {
    id: ID!
    name: String!
    description: String!
  }

  type Query {
    users: [User]
    articles: [Article]
    getUserById(id: ID!): User
    getUserByEmail(email: String!): User
  }

  type Mutation {
    addUser(name: String!, email: String!): User
    updateUser(id: ID!, name: String!, email: String!): User
    deleteUser(id: ID!): User
  }
`;

module.exports = { typeDefs };
