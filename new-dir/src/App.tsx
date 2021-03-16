import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Search from '@app/pages/Search';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Search />
      </Route>
    </Switch>
  );
}

export default App;
