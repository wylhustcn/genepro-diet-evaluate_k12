import React from "react";
import {
    IconArrowDown,
    IconArrowRightCircle,
    IconBasicFood,
    IconBeans,
    IconBreakfast,
    IconCaretDown,
    IconDietStructure,
    IconEggs,
    IconFishes,
    IconFruits,
    IconGrainsPotatoes,
    IconHome,
    IconList,
    IconListNew,
    IconLunch,
    IconMeatDish,
    IconMeatVegDish,
    IconMeats,
    IconNutrCa,
    IconNutrCalorie,
    IconNutrCarbohydrate,
    IconNutrFat,
    IconNutrFe,
    IconNutrFiber,
    IconNutrFolicAcid,
    IconNutrProtein,
    IconNutrSalt,
    IconNutrVa,
    IconNutrVb1,
    IconNutrVc,
    IconNutrVd,
    IconNutrVe,
    IconNutrZn,
    IconNutrient,
    IconPieAnalysis,
    IconProfile,
    IconSoup,
    IconStar,
    IconSupper,
    IconSwitch,
    IconTurnOff,
    IconVegDish,
    IconVegs,
} from "./lib";

function Unknown() {
    return (
        <svg version="1.1" x="0px" y="0px" viewBox="0 0 612 792" height="24" width="24">
            <text style={{ fontSize: "480px" }} transform="matrix(0.8382 0 0 1 190.5005 490.9326)">?</text>
        </svg>
    );
}
const handler = {
    get: function(obj, prop) {
        if (prop in obj) return obj[prop];
        return Unknown;
    },
};
const icon = new Proxy(
    {
        arrowDown: IconArrowDown,
        arrowRightCircle: IconArrowRightCircle,
        basicFood: IconBasicFood,
        beans: IconBeans,
        breakfast: IconBreakfast,
        caretDown: IconCaretDown,
        dietStructure: IconDietStructure,
        eggs: IconEggs,
        fishes: IconFishes,
        fruits: IconFruits,
        grainsPotatoes: IconGrainsPotatoes,
        home: IconHome,
        list: IconList,
        listNew: IconListNew,
        lunch: IconLunch,
        meatDish: IconMeatDish,
        meatVegDish: IconMeatVegDish,
        meats: IconMeats,
        nutrCa: IconNutrCa,
        nutrCalorie: IconNutrCalorie,
        nutrCarbohydrate: IconNutrCarbohydrate,
        nutrFat: IconNutrFat,
        nutrFe: IconNutrFe,
        nutrFiber: IconNutrFiber,
        nutrFolicAcid: IconNutrFolicAcid,
        nutrProtein: IconNutrProtein,
        nutrSalt: IconNutrSalt,
        nutrVa: IconNutrVa,
        nutrVb1: IconNutrVb1,
        nutrVc: IconNutrVc,
        nutrVd: IconNutrVd,
        nutrVe: IconNutrVe,
        nutrZn: IconNutrZn,
        nutrient: IconNutrient,
        pieAnalysis: IconPieAnalysis,
        profile: IconProfile,
        soup: IconSoup,
        star: IconStar,
        supper: IconSupper,
        switch: IconSwitch,
        turnOff: IconTurnOff,
        vegDish: IconVegDish,
        vegs: IconVegs,
    },
    handler
);

export default function Icon({ type = "test", ...props }) {
    const Component = icon[type];

    return <Component {...props} />;
}
