import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import ExplainationContainer from "./ExplainationContainer/TodoHooks";
import Todo from "./ExplainationContainer/Todo";
import List from "./components/Todo/List";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TodoContainer from "./components/Todo/TodoContainer";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <BrowserRouter>
          <Switch>
            <Route exact path="/todos">
              <TodoContainer />
            </Route>
            <Route path="/">
              <ExplainationContainer />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
