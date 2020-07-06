import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const Dashboard = lazy(() => import("../Dashboard"));

const AppLinks = () => {
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default AppLinks;
