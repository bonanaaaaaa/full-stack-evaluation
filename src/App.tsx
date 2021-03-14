import { Switch, Route } from "react-router-dom";

import Search from "./pages/Search";

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
