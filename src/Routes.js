import {Route, Switch} from "react-router-dom";
import Default from "./Components/Default";
import TestStyledComponents from "./Components/TestStyledComponents";
import React from "react";
import Home from './Components/Home/Home';

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={ () => <Home content={'Ceci est l\'acceuil'}/>} />
            <Route path="/default">
                <Default/>
            </Route>
            <Route path="/test-styled">
                <TestStyledComponents/>
            </Route>
        </Switch>
    );
}

export default Routes;