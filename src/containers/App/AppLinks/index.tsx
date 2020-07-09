import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const Dashboard = lazy(() => import("../Dashboard"));
const AddClient = lazy(() => import("../AddClient"));
const ClientDetails = lazy(() => import("../ClientDetails"));
const EditClient = lazy(() => import("../EditClient"));

const AppLinks = () => {
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/client/add" exact component={AddClient} />
          <Route path="/client/edit/:id" exact component={EditClient} />
          <Route path="/client/:id" exact component={ClientDetails} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default AppLinks;
