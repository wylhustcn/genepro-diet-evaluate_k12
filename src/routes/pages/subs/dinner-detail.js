import React, { useState, useEffect } from "react";
import Icon from "components/icon";

const iconOf = {
    早餐: "breakfast",
    午餐: "lunch",
    晚餐: "supper",
};
const colorOf = {
    碳水: "#6A8CF7",
    脂肪: "#F9B642",
    膳食纤维: "#29CBB2",
    蛋白质: "#C49ACA",
};
const data = [
    {
        label: "早餐",
        dishes: [
            { name: "迷你一口汤包", type: "包点", nutrs: ["碳水", "脂肪"] },
            { name: "油盐灼时蔬", type: "全素", nutrs: ["膳食纤维"] },
            { name: "瘦肉粥", type: "粥", nutrs: ["碳水", "脂肪"] },
        ],
    },
    {
        label: "午餐",
        dishes: [
            { name: "白玉馒头", type: "主食", nutrs: ["碳水"] },
            { name: "红烧肉", type: "全荤", nutrs: ["脂肪"] },
            { name: "西芹木耳炒肉片", type: "荤素", nutrs: ["膳食纤维", "脂肪"] },
            { name: "酸辣土豆丝", type: "全素", nutrs: ["碳水"] },
        ],
    },
    {
        label: "晚餐",
        dishes: [
            { name: "鸡蛋炒面", type: "主食", nutrs: ["碳水", "蛋白质"] },
            { name: "蚝油扒鲜蔬", type: "全素", nutrs: ["膳食纤维"] },
            { name: "香菇烩豆腐", type: "荤素", nutrs: ["蛋白质", "膳食纤维"] },
        ],
    },
];
export default function DinnerDetail({ label: dinner_label }) {
    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        setFilterData(!!dinner_label ? data.filter(({ label }) => label === dinner_label) : data);
    }, [dinner_label]);

    return (
        <div className="common-container">
            <p className="title">用餐明细</p>
            {!dinner_label && (
                <p className="content">
                    您本日就餐的食物如下，请根据近期营养素获取情况调整饮食：
                </p>
            )}
            {filterData.map(detail => (
                <Table key={detail.label} {...detail} />
            ))}
        </div>
    );
}

function Table({ label, dishes = [] }) {
    return (
        <div>
            <p className="sub-title">
                <Icon type={iconOf[label]} color="#6a8cf7" /> &nbsp;
                {label}
            </p>
            <div className="wx-table-container">
                <table>
                    <tbody>
                        {dishes.map(({ name, type, nutrs }) => (
                            <tr key={name}>
                                <td width="33%">{name}</td>
                                <td width="33%">{type}</td>
                                <td>
                                    {nutrs.map(nutr => (
                                        <span key={nutr} style={{ color: colorOf[nutr] }}>
                                            {nutr}&nbsp;&nbsp;
                                        </span>
                                    ))}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
