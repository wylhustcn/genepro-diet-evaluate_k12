import React, { useState } from "react";
import Banner from "components/banner";
import Footer from "components/footer";

import MacroEnergyPie from "./subs/macro-energy-pie";
import DinnerDetail from "./subs/dinner-detail";

import Carousel from "react-bootstrap/Carousel";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Progress as ProgressCircle } from "react-sweet-progress";

import i_banner from "./IMG/bg-img@2x.png";

const defaultProps = {
    dinners: ["全天", "早餐"],
    dates: ["03-05"],
};

const data = {
    score: 77,
    energy: { value: 600, min: 600, max: 720 },
};
export default function Dinner({ history }) {
    const [date, setDate] = useState("03-05");
    const [dinner, setDinner] = useState("早餐");

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
            history.push("/de/home");
        }
    };

    return (
        <div className="h-160">
            <Banner img={i_banner}>
                <Carousel.Caption style={{ top: 0 }}>
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
                                    disabled={dinner === _dinner}>
                                    {_dinner}
                                </Dropdown.Item>
                            ))}
                        </DropdownButton>
                    </ButtonToolbar>
                </Carousel.Caption>
            </Banner>
            <Row className="dinner-summary-box">
                <Col xs={5} style={{ margin: "0 0.3rem 0 -0.3rem", textAlign: "center" }}>
                    <ProgressCircle
                        type="circle"
                        strokeWidth={3}
                        percent={data.score}
                        status="default"
                        width={100}
                        theme={{
                            default: {
                                symbol: (
                                    <p className="dinner-score">
                                        本餐评分
                                        <br />
                                        <span className="md-score">{data.score}</span>
                                        <span className="xs-unit">分</span>
                                    </p>
                                ),
                                trailColor: "#E4EAFD",
                                color: "#5774F4",
                            },
                        }}
                    />
                </Col>
                <Col xs={7} style={{ margin: "0 -0.3rem 0 0.3rem", padding: "3rem 0 0 1rem" }}>
                    <p className="sm-text">本餐能量 <span>{data.energy.value} Kcal</span></p>
                    <p className="sm-text">能量需求 <span>{data.energy.min} ~ {data.energy.max} Kcal</span></p>
                </Col>
            </Row>
            <MacroEnergyPie label={dinner}/>
            <DinnerDetail label={dinner} />
            <Footer />
        </div>
    );
}
