import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import Order from './containers/Orders'

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/order" component={Order}></Route>
            </Switch>
        </Router>
    )
}

export default Routes;