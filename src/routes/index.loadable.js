import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";

const Loading = <div>Loading...</div>;

const Home = Loadable({
    loader: () => import(/* webpackChunkName: "home" */"./pages/home"),
    loading: Loading,
    modules: ["home"]
});


const NotFound = () => "Not Found";

export default props => (
    <div className="App">
        <Switch>
            <Route exact path="/" component={Home} />

            <Route component={NotFound} />
        </Switch>
    </div>
);
