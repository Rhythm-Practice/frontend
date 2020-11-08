import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./scss/style.scss";
import Principal from "./components/Principal/Principal";
import Header from "./components/Header";
import Login from "./components/Login";
import Exit from "./components/Exit";
import Info from "./components/Info";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Info} />
          <Route path="/principal" component={Principal} />
          <Route path="/exit" component={Exit} />
          <Route path="/info" component={Info} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
