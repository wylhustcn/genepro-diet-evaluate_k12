import React from "react";

import Banner from "components/banner";
import Footer from "components/footer";

import RecentNutrientProgress from "./subs/recent-nutrient-progress";
import DishPrefer from "./subs/dish-prefer";
import { top } from "./subs/format-dish";

import Carousel from "react-bootstrap/Carousel";

import i_banner from "./IMG/bg-img@2x.png";

const data = {
    name: "王嘉欣",
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

const nutrients_lack = data.nutrients
    .filter(foo => foo.label !== "energy" && foo.percent < 100)
    .sort((a, b) => a.percent - b.percent)
    .slice(0, 2);
const lack_nutrient = nutrients_lack.map(foo => foo.name).join("、");
const dish_suggestion = nutrients_lack.map(({ label }) => top(label)[0].name).join("、");
export default function MyAnalysis({ history }) {

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
                    <p className="sm-name">{data.name}</p>
                    <p className="sm-text">修改个人资料 &gt;</p>
                </Carousel.Caption>
            </Banner>
            <div className="common-container">
                <p className="title">近期营养建议</p>
                <p className="content">
                    您需要重点关注的营养为：{lack_nutrient}
                    <br />
                    为你推荐：
                    {dish_suggestion}
                </p>
            </div>

            <DishPrefer />
            <RecentNutrientProgress data={data.nutrients} goto={goto} />
            <Footer />
        </div>
    );
}
