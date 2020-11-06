import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import TaskList from "./pages/TaskList";
import TaskForm from "./pages/TaskForm";
import Navbar from "./Navbar";

export default function Routers() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/task-list" component={TaskList} />
        <Route exact path="/task-form" component={TaskForm} />
      </Switch>
    </BrowserRouter>
  );
}
