import { ApolloClient, InMemoryCache } from '@apollo/client';

const uri = 'https://graphql-pokemon2.vercel.app';

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});

export default client;
