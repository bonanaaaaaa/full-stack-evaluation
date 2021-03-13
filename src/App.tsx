import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



import Search from './pages/Search'

function App() {
  return (
    <Switch>
      <Route path="/">
        <Search />
      </Route>
    </Switch>
  );
}

export default App;
