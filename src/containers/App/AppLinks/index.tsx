import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import {
  UserIsAuthenticated,
  UserIsNotAuthenticated,
} from "../../../shared/auth";

const Dashboard = lazy(() => import("../Dashboard"));
const AddClient = lazy(() => import("../AddClient"));
const ClientDetails = lazy(() => import("../ClientDetails"));
const EditClient = lazy(() => import("../EditClient"));
const Login = lazy(() => import("../../Auth/Login"));
const Settings = lazy(() => import("../Settings"));
const Register = lazy(() => import("../Register"));

const AppLinks = () => {
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact component={UserIsAuthenticated(Dashboard)} />
          <Route
            path="/client/add"
            exact
            component={UserIsAuthenticated(AddClient)}
          />
          <Route
            path="/client/edit/:id"
            exact
            component={UserIsAuthenticated(EditClient)}
          />
          <Route
            path="/client/:id"
            exact
            component={UserIsAuthenticated(ClientDetails)}
          />
          <Route
            path="/login"
            exact
            component={UserIsNotAuthenticated(Login)}
          />
          <Route
            path="/register"
            exact
            component={UserIsNotAuthenticated(Register)}
          />
          <Route
            path="/settings"
            exact
            component={UserIsAuthenticated(Settings)}
          />
        </Switch>
      </Suspense>
    </div>
  );
};

export default AppLinks;
