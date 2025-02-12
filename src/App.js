import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import Navbar from "./Navbar";
import LoginForm from "./LoginForm";

function App() {
  return (
    <div data-test="component-app">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LoginForm} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
