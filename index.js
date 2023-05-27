const { ApolloServer, gql } = require("apollo-server");
require("./db");
const { resolvers } = require("./resolver");
const { typeDefs } = require("./schema");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(4000).then(({ url }) => {
  console.log(`Server berjalan pada URL ${url}`);
});
