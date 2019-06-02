import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Icon from "components/icon";

const content = categories =>
    Array.isArray(categories)
        ? `由于您近期对于${categories.join(
              "、"
          )}食物的食用量不足，建议您在食堂优先选择含有以下食材的菜品：`
        : "建议您在食堂优先选择含有以下食材的菜品：";
const iconOf = {
    谷薯类: "grainsPotatoes",
    蔬菜类: "vegs",
    水果类: "fruits",
    水产类: "fishes",
    畜禽肉类: "meats",
    蛋类: "eggs",
    豆类: "beans",
};
const data = [
    { name: "谷薯类", suggestion: "红薯、土豆、紫薯、荞麦" },
    { name: "蔬菜类", suggestion: "油麦菜、大白菜、奶白菜、小白菜、油菜" },
    { name: "水果类", suggestion: "苹果、猕猴桃、梨、葡萄、圣女果" },
    { name: "水产类", suggestion: "三文鱼、海虾" },
    { name: "畜禽肉类", suggestion: "猪肉、牛肉、羊肉、鸡肉、鸭肉" },
    { name: "蛋类", suggestion: "鸡蛋、鸭蛋、鹌鹑蛋、鹅蛋" },
    { name: "豆类", suggestion: "大豆、豆腐、豆干、豆腐皮" },
];

export default function FoodSuggestion({ categories }) {
    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        setFilterData(
            Array.isArray(categories) ? data.filter(({ name }) => categories.includes(name)) : data
        );
    }, [categories]);

    return (
        <div className="progress-container">
            <p className="title">食物选择建议</p>
            <p className="content">{content(categories)}</p>
            {filterData.map(({ name, suggestion }, index) => (
                <Row key={name} className={`card-gradient gradient-${index + 1}`}>
                    <Col xs={3}>
                        <div className="circle-container">
                            <Icon type={iconOf[name]} size={36}/>
                        </div>
                    </Col>
                    <Col xs={6}>{suggestion}</Col>
                    <Col xs={3}>
                        <label>{name}</label>
                    </Col>
                </Row>
            ))}
        </div>
    );
}
