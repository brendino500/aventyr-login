import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import Navbar from "./Navbar";
import LoginForm from "./LoginForm";
import { Container, Typography } from "@material-ui/core";

function App() {
  return (
    <div data-test="component-app">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/loggain" component={LoginForm} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
