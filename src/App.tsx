import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { client } from './graphql'

import Index from './pages/Index'
import Search from './pages/Search'

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </ApolloProvider>
    </Router>
  );
}

export default App;
