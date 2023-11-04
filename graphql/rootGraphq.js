const rootResolver = require("./rootResolver");
const { readFileSync } = require("fs");
const { buildSchema, print } = require("graphql");
const { join } = require("path");
const { gql } = require("graphql-tag");

const schemaFilePath = join(__dirname, "rootType.graphql");
const typeDefs = readFileSync(schemaFilePath, "utf8");
const parsedTypeDefs = gql(typeDefs);

module.exports = {
  schema: buildSchema(print(parsedTypeDefs)),
  rootValue: rootResolver,
  graphiql: true,
};
