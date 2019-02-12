import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoutes = ({ user, Tttt, component: Comp, ...rest }) => {
  return (
    <Route
      component={props =>
        user ? <Comp {...props} user={user} /> : <Redirect to="/sign_in" />
      }
    />
  );
};

export default PrivateRoutes;
