import { ApolloProvider } from '@apollo/client';
import { client } from './graphql'

import Index from './pages/Index'

function App() {
  return (
    <ApolloProvider client={client}>
      <Index />
    </ApolloProvider>
  );
}

export default App;
