import React from "react";
import Card from "react-bootstrap/Card";

import Icon from "components/icon";

const data = [
    { name: "主食", count: "4", icon: "basicFood" },
    { name: "荤菜", count: "1", icon: "meatDish" },
    { name: "素菜", count: "3", icon: "vegDish" },
    { name: "荤素", count: "2", icon: "meatVegDish" },
    { name: "汤", count: "0", icon: "soup" },
];
export default function Summary() {
    return (
        <div className="common-container">
            <p className="title">总结</p>
            <div className="wx-card-container">
                {data.map(item => (
                    <MyCard key={item.name} {...item} />
                ))}
            </div>
        </div>
    );
}

function MyCard({ name, count, icon }) {
    return (
        <Card>
            <Card.Body>
                <div className="circle-container"><Icon type={icon} color="url(#Gradient)" size={36} /></div>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{count} 份</Card.Text>
            </Card.Body>
        </Card>
    );
}
