import { gql, ApolloServer } from 'apollo-server';

// graphql schema
const typeDefs = gql`
    type Query {
        greeting: String
    }
`;

const resolvers = {
    Query: {
        greeting: () => 'Hello World!',
    }
}

const server = new ApolloServer({typeDefs, resolvers});

server.listen({port: 9000})
.then(res => console.log(`Server running at port:${res.url}`))
.catch(err => console.log(err));
