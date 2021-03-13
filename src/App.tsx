import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { client } from './graphql'

import Search from './pages/Search'

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Switch>
          <Route path="/">
            <Search />
          </Route>
        </Switch>
      </ApolloProvider>
    </Router>
  );
}

export default App;
