import React from "react";
import Layout from "./Components/Layout";
import Home from "./Components/Home/Home";
import { Switch, Route } from "react-router-dom";
import SignIn from "./Components/SignIn";
import Dashboard from "./Components/Admin/Dashboard";
import PublicRoutes from "./Components/AuthRoutes/PublicRoutes";

const Routes = props => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <PublicRoutes
          restricted={false}
          {...props}
          exact
          path="/"
          component={Home}
        />
        <PublicRoutes
          restricted={true}
          {...props}
          exact
          path="/sign_in"
          component={SignIn}
        />
      </Switch>
    </Layout>
  );
};

export default Routes;
