import React from "react";
import Layout from "./Components/Layout";
import Home from "./Components/Home/Home";
import { Switch, Route } from "react-router-dom";
import SignIn from "./Components/SignIn";
import Dashboard from "./Components/Admin/Dashboard";
import PrivateRoutes from "./Components/AuthRoutes/PrivateRoutes";

const Routes = props => {
  return (
    <Layout>
      <Switch>
        <PrivateRoutes
          {...props}
          exact
          path="/dashboard"
          component={Dashboard}
        />
        <Route exact path="/" component={Home} />
        <Route exact path="/sign_in" component={SignIn} />
      </Switch>
    </Layout>
  );
};

export default Routes;
