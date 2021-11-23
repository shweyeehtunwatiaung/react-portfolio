import React from "react";
import { Switch, Route } from "react-router-dom";
import Routes from "./route.config";

const AppRoute = () => {
  return (
    <Switch>
      {Routes.map((route, index) => (
        <Route
          path={route.path}
          component={route.component}
          key={index}
          exact
        />
      ))}
    </Switch>
  );
};

export default AppRoute;
