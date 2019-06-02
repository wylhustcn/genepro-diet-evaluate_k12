import React from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "react-sweet-progress/lib/style.css";
import "styles/index.scss";
// import SideSheet from "components/side-sheet";

import Home from "./pages/home";
import Dinner from "./pages/dinner";
import DietStructure from "./pages/diet-structure";
import Nutrient from "./pages/nutrient";
import RecentNutrient from "./pages/recent-nutrient";
import MyAnalysis from "./pages/my-analysis";
import IntroNutrient from "./pages/intro-nutrient";

import NavFooter from "components/nav-footer";
const NotFound = () => "Not Found";

export default () => (
    <div className="App">
        <div style={{ height: 0 }}>
            <svg>
                <defs>
                    <linearGradient id="Gradient" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor="#4D46EF" />
                        <stop offset="100%" stopColor="#336AD3" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/de" component={Home} />
            <Route exact path="/de/" component={Home} />
            <Route exact path="/de/home" component={Home} />
            <Route exact path="/de/dinner" component={Dinner} />
            <Route exact path="/de/diet-structure" component={DietStructure} />
            <Route exact path="/de/nutrient" component={Nutrient} />
            <Route exact path="/de/recent/:label" component={RecentNutrient} />
            <Route exact path="/de/my-analysis" component={MyAnalysis} />
            <Route exact path="/de/intro/:label" component={IntroNutrient} />

            <Route component={NotFound} />
        </Switch>
        <NavFooter />
    </div>
);
