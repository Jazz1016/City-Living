import React from "react";
import { Switch, Route } from "react-router-dom";
import Compare from "./components/Compare/Compare";
import Landing from "./components/Landing/Landing";
import Search from "./components/Search/Search";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/compare" component={Compare} />
    <Route path="/search" component={Search} />
  </Switch>
);
