import React from "react";
import Layout from "./Components/Layout";
import Home from "./Components/Home/Home";
import { Switch } from "react-router-dom";
import SignIn from "./Components/SignIn";
import Dashboard from "./Components/Admin/Dashboard";
import PrivateRoutes from "./Components/AuthRoutes/PrivateRoutes";
import PublicRoutes from "./Components/AuthRoutes/PublicRoutes";
import AdminMatches from "./Components/Admin/AdminMatches";
import EditMatches from "./Components/Admin/AdminMatches/EditMatches";

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
        <PrivateRoutes
          {...props}
          exact
          path="/admin_matches"
          component={AdminMatches}
        />

        <PrivateRoutes
          {...props}
          exact
          path="/admin_matches/edit_match"
          component={EditMatches}
        />

        <PrivateRoutes
          {...props}
          exact
          path="/admin_matches/edit_match/:id"
          component={EditMatches}
        />
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
