import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./scss/style.scss";
import Principal from "./components/Principal/Principal";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Principal} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
