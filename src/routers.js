import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import TaskList from './pages/TaskList';

export default function Routers() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/task-list" component={ TaskList } />
            </Switch>
        </BrowserRouter>
    )
}