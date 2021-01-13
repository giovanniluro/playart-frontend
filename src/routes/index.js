import React from "react";
import Home from '../pages/Home'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

export default function Routes() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Home}>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}