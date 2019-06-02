import React, { useState, useEffect } from "react";
import Banner from "components/banner";
import DietStructureProgress from "./subs/diet-structure-progress";
import FoodSuggestion from "./subs/food-suggestion";
import Footer from "components/footer";

import Carousel from "react-bootstrap/Carousel";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

import i_banner from "./IMG/bg-img@2x.png";

const defaultProps = {
    dates: ["最近一周", "最近半月", "最近一月", "最近三月"],
};
const data = {
    score: 77,
    rank: 68,
    diet_structure: [
        { name: "谷薯类", percent: 80.0, judge: "不达标", variant: "warning" },
        { name: "蔬菜类", percent: 85.71, judge: "不达标", variant: "warning" },
        { name: "水果类", percent: 0.0, judge: "不达标", variant: "warning" },
        { name: "水产类", percent: 0.0, judge: "不达标", variant: "warning" },
        { name: "畜禽肉类", percent: 100.0, judge: "达标", variant: "success" },
        { name: "蛋类", percent: 100.0, judge: "达标", variant: "success" },
        { name: "豆类", percent: 50.0, judge: "不达标", variant: "warning" },
    ],
};
export default function DietStructure({ history }) {
    const [date, setDate] = useState("最近一周");
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories(
            data.diet_structure
                .filter(({ variant }) => variant === "warning")
                .map(({ name }) => name)
        );
    }, [date]);

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
                    <p className="lg-score">
                        {data.score}
                        <span>分</span>
                    </p>
                    <p className="sm-text">
                        您{date}的膳食结构情况评分打败了 {data.rank}% 的人
                    </p>
                </Carousel.Caption>
            </Banner>
            <DietStructureProgress data={data.diet_structure} />
            <FoodSuggestion categories={categories} />
            <Footer />
        </div>
    );
}
