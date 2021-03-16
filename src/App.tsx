import { Switch, Route } from "react-router-dom";

import Search from "pages/Search";

const ROOT_PATH = process.env.PUBLIC_URL || "";

function App() {
  return (
    <Switch>
      <Route path={`${ROOT_PATH}/`}>
        <Search />
      </Route>
    </Switch>
  );
}

export default App;
