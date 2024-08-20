import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema, root } from './schema';

const app = express();

// Middleware GraphQL
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/graphql`);
});
