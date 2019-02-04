import React from "react";
import Layout from "./Components/Layout";
import Home from "./Components/Home/Home";
import { Switch, Route } from "react-router-dom";
import SignIn from "./Components/SignIn";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/the_matches" component={SignIn} />
      </Switch>
    </Layout>
  );
};

export default Routes;
