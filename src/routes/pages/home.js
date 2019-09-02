import React, { useState } from "react";

import Banner from "components/banner";
import Footer from "components/footer";

import DinnerEnergyRatio from "./subs/dinner-energy-progress";
import MacroEnergyPie from "./subs/macro-energy-pie";
import DinnerDetail from "./subs/dinner-detail";
import NutrientDetail from "./subs/nutrient-detail";
import Summary from "./subs/summary";

import Carousel from "react-bootstrap/Carousel";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

import i_banner from "./IMG/bg-img@2x.png";

const defaultProps = {
    // dinners: ["全天", "早餐", "午餐", "晚餐"],
    dinners: ["全天", "早餐"],
    dates: ["03-05"],
};
export default function Home({ history }) {
    const [date, setDate] = useState("03-05");
    const [dinner, setDinner] = useState("全天");

    /* const handler = {
        go: e => {
            const {
                currentTarget: {
                    dataset: { href },
                },
            } = e;
            history.push(href);
        },
    }; */

    const handleSwitch = (eventKey, e) => {
        const {
            target: { name },
        } = e;
        if (name === "date") setDate(eventKey);
        if (name === "dinner") {
            setDinner(eventKey);
            history.push("/de/dinner");
        }
    };

    return (
        <div>
            <Banner img={i_banner}>
                <Carousel.Caption>
                    <ButtonToolbar>
                        <DropdownButton
                            style={{ marginLeft: "10px" }}
                            title={date}
                            variant="light"
                            id="dropdown-date">
                            {defaultProps.dates.map(_date => (
                                <Dropdown.Item
                                    onSelect={handleSwitch}
                                    name="date"
                                    key={_date}
                                    eventKey={_date}
                                    disabled={date === _date}
                                    >
                                    {_date}
                                </Dropdown.Item>
                            ))}
                        </DropdownButton>
                        <DropdownButton
                            style={{ position: "absolute", right: "25px" }}
                            title={dinner}
                            variant="light"
                            id="dropdown-dinner">
                            {defaultProps.dinners.map(_dinner => (
                                <Dropdown.Item
                                    name="dinner"
                                    onSelect={handleSwitch}
                                    key={_dinner}
                                    eventKey={_dinner}
                                    disabled={dinner === _dinner}
                                    >
                                    {_dinner}
                                </Dropdown.Item>
                            ))}
                        </DropdownButton>
                    </ButtonToolbar>
                    <p className="lg-score">
                        58<span>分</span>
                    </p>
                    <p className="sm-text">您的综合分数打败了52%的人，数据完整性为100%</p>
                </Carousel.Caption>
            </Banner>
            <DinnerEnergyRatio />
            <MacroEnergyPie />
            <NutrientDetail />
            <DinnerDetail />
            <Summary />
            <Footer />
        </div>
    );
}
