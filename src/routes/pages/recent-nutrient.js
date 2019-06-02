import React, { useState, useEffect } from "react";

import Banner from "components/banner";
import Footer from "components/footer";

import NutrientIntro from "./subs/nutrient-intro";
import RelativeDish from "./subs/relative-dish";

import Carousel from "react-bootstrap/Carousel";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Progress as ProgressCircle } from "react-sweet-progress";

import i_banner from "./IMG/bg-img@2x.png";

const defaultProps = {
    dates: ["最近一周", "最近半月", "最近一月", "最近三月"],
};
const data = {
    nutrients: [
        { name: "能量", label: "energy", percent: 112.33, judge: "合理" },
        { name: "碳水", label: "carbohydrate", percent: 102.45, judge: "合理" },
        { name: "脂肪", label: "fat", percent: 82.07, judge: "合理" },
        { name: "蛋白", label: "protein", percent: 156.53, judge: "过高" },
        { name: "钠", label: "na", percent: 146.36, judge: "过高" },
        { name: "膳食纤维", label: "fiber", percent: 33.7, judge: "不足" },
        { name: "钙", label: "ca", percent: 50.94, judge: "略低" },
        { name: "铁", label: "fe", percent: 132.43, judge: "过高" },
        { name: "锌", label: "zn", percent: 114.85, judge: "合理" },
        { name: "维生素A", label: "va", percent: 40.7, judge: "不足" },
        { name: "维生素E", label: "ve", percent: 60.44, judge: "略低" },
        { name: "维生素B1", label: "vb1", percent: 180.34, judge: "过高" },
        { name: "维生素D", label: "vd", percent: 22.86, judge: "不足" },
        { name: "叶酸", label: "folate", percent: 101.03, judge: "合理" },
        { name: "维生素C", label: "vc", percent: 70.62, judge: "略低" },
    ],
};
const colorOf = {
    合理: "#29CBB2",
    不足: "#FED205",
    过高: "#F7926A",
    略低: "#B98AF4",
};
export default function RecentNutrient({ history, match = { params: { label: "protein" } } }) {
    const {
        params: { label },
    } = match;
    const [date, setDate] = useState("最近一周");
    const [nutrient, setNutrient] = useState({});

    useEffect(() => {
        setNutrient(data.nutrients.find(foo => foo.label === label));
    }, [label]);
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
                                    active={date === _date}>
                                    {_date}
                                </Dropdown.Item>
                            ))}
                        </DropdownButton>
                    </ButtonToolbar>
                    <ProgressCircle
                        type="circle"
                        strokeWidth={2}
                        percent={nutrient.percent}
                        status="default"
                        width={100}
                        theme={{
                            default: {
                                symbol: (
                                    <p className="nutrient-percent">
                                        <span className="md-score">{nutrient.percent}</span>
                                        <span className="xs-unit">%</span>
                                    </p>
                                ),
                                trailColor: "#E4EAFD",
                                color: "#03FDA2",
                            },
                        }}
                    />
                    <p className="sm-text" style={{ marginTop: "1rem" }}>
                        您最近一周所摄入的{nutrient.name}是推荐值的{nutrient.percent}%
                    </p>
                    <p style={{ marginBottom: 0, color: colorOf[nutrient.judge] }}>
                        <span className="md-judge">{nutrient.judge}</span>
                    </p>
                </Carousel.Caption>
            </Banner>
            <NutrientIntro label={nutrient.label} />
            <RelativeDish nutrient={nutrient.label} />
            <Footer />
        </div>
    );
}
