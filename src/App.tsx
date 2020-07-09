import React from "react";
import { Switch, Route } from "react-router-dom";
import AppLinks from "./containers/App/AppLinks";

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" component={AppLinks} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
