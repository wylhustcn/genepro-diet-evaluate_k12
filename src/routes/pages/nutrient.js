import React, { useState } from "react";

import Banner from "components/banner";
import Footer from "components/footer";

import NutrientCards from "./subs/nutrient-cards";

import Carousel from "react-bootstrap/Carousel";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

import i_banner from "./IMG/bg-img@2x.png";

const defaultProps = {
    dates: ["最近一周", "最近半月", "最近一月", "最近三月"],
};
const data = {
    score: 52,
    rank: 45,
    nutrients: [
        { name: "能量", value: "2246.6824", judge: "合理", unit: "kcal" },
        { name: "碳水", value: "61.47126091", judge: "合理", unit: "%" },
        { name: "脂肪", value: "20.51685588", judge: "合理", unit: "%" },
        { name: "蛋白", value: "19.56610334", judge: "过高", unit: "%" },
        { name: "钠", value: "2195.3698", judge: "过高", unit: "mg" },
        { name: "膳食纤维", value: "9.26752", judge: "不足", unit: "g" },
        { name: "钙", value: "407.49", judge: "略低", unit: "mg" },
        { name: "铁", value: "21.1886", judge: "过高", unit: "mg" },
        { name: "锌", value: "11.484604", judge: "合理", unit: "mg" },
        { name: "维生素A", value: "305.2474", judge: "不足", unit: "μg RAE" },
        { name: "维生素E", value: "8.461659", judge: "略低", unit: "mg α-TE" },
        { name: "维生素B1", value: "2.34443", judge: "过高", unit: "mg" },
        { name: "维生素D", value: "2.2858728", judge: "不足", unit: "μg" },
        { name: "叶酸", value: "404.1341", judge: "合理", unit: "μg DFE" },
        { name: "维生素C", value: "70.6232", judge: "略低", unit: "mg" },
    ],
};
export default function Nutrient({ history }) {
    const [date, setDate] = useState("最近一周");

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

    const goto = e => {
        const {
            currentTarget: {
                dataset: { url },
            },
        } = e;
        history.push(url);
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
                    <p className="sm-text">您最近一周的营养素获取评分打败了 {data.rank}% 的人</p>
                </Carousel.Caption>
            </Banner>
            <NutrientCards data={data.nutrients} goto={goto} />
            <Footer />
        </div>
    );
}
