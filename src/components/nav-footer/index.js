import React from "react";
import cx from "classnames";

import { withRouter } from "react-router";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Icon from "components/icon";

const tabs = [
    {
        name: "首页",
        icon: "home",
        url: "/de/home",
    },
    {
        name: "膳食结构",
        icon: "dietStructure",
        url: "/de/diet-structure",
    },
    {
        name: "营养素",
        icon: "nutrient",
        url: "/de/nutrient",
    },
    {
        name: "我的分析",
        icon: "pieAnalysis",
        url: "/de/my-analysis",
    },
];
function NavFooter({ history }) {
    return (
        <div className="nav-footer d-flex flex-column">
            <ButtonGroup className="mt-3">
                {tabs.map(tab => (
                    <Button
                        variant="light"
                        key={tab.name}
                        className={cx({ "tab-hit": window.location.pathname === tab.url })}
                        onClick={() => history.push(tab.url)}>
                        <Icon
                            type={tab.icon}
                            color={window.location.pathname === tab.url ? "url(#Gradient)" : ""}
                        />
                        <br />
                        {tab.name}
                    </Button>
                ))}
            </ButtonGroup>
        </div>
    );
}

export default withRouter(NavFooter);
