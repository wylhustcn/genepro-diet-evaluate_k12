import React, { useState, useEffect } from "react";

import Banner from "components/banner";
import Footer from "components/footer";

import NutrientIntro from "./subs/nutrient-intro";
import SuggestDish from "./subs/suggest-dish";

import Carousel from "react-bootstrap/Carousel";

import i_banner_mineral from "./IMG/bg-img-mineral@2x.png";
import i_banner_macro from "./IMG/bg-img-macro@2x.png";
import i_banner_vitamin from "./IMG/bg-img-vitamin@2x.png";

const image = {
    mineral: i_banner_mineral,
    macro: i_banner_macro,
    vitamin: i_banner_vitamin
};
const category = ["宏量营养素", "维生素", "能量需求", "矿物质"];
const lookup = {
    energy: ["能量", 2, "macro"],
    fiber: ["膳食纤维", 0, "macro"],
    carbohydrate: ["碳水", 0, "macro"],
    fat: ["脂肪", 0, "macro"],
    protein: ["蛋白", 0, "macro"],
    va: ["维生素A", 1, "vitamin"],
    vb1: ["维生素B1", 1, "vitamin"],
    vc: ["维生素C", 1, "vitamin"],
    vd: ["维生素D", 1, "vitamin"],
    ve: ["维生素E", 1, "vitamin"],
    folate: ["叶酸", 1, "vitamin"],
    ca: ["钙", 3, "mineral"],
    fe: ["铁", 3, "mineral"],
    zn: ["锌", 3, "mineral"],
    na: ["钠", 3, "mineral"],
};
export default function IntroNutrient({ history, match = { params: { label: "protein" } } }) {
    const {
        params: { label },
    } = match;
    const [nutrient, setNutrient] = useState({});

    useEffect(() => {
        const [name, category_key, image_key] = lookup[label];
        setNutrient({ name, category: category[category_key], key: image_key, image: image[image_key] });
    }, [label]);

    return (
        <div>
            <Banner img={nutrient.image}>
                <Carousel.Caption>
                    <p className={`nutrient-intro category-${nutrient.key}`}>
                        <span className="name-en">{label}</span>
                        <span className="name-cn">{nutrient.name}</span><br />
                        <span className="category">{nutrient.category}</span>
                    </p>
                </Carousel.Caption>
            </Banner>
            <NutrientIntro label={label} />
            <SuggestDish nutrient={label} />
            <Footer />

        </div>
    );
}
