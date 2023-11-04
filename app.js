const express = require("express");
const bodyParser = require("body-parser");
const { graphqlHTTP } = require("express-graphql");
const rootGraphq = require("./graphql/rootGraphq");

const app = express();
app.use(bodyParser.json());

app.use("/graphql", graphqlHTTP(rootGraphq));

app.listen(7800);
