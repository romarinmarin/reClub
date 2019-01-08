import React from "react";
import Layout from "./Components/Layout";
import Home from "./Components/Home/Home";
import { Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout>
  );
};

export default Routes;
