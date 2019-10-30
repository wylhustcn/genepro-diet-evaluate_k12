import React from "react";
// import ProgressBar from "react-bootstrap/ProgressBar";
import { Progress as ProgressBar } from "react-sweet-progress";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const content =
    "食物的多样性可以很好的保证营养的均衡，避免某些特定营养素的过量或缺乏，让营养素可以发挥协同作用，也有效地避免了能量的过量摄入，降低近视、肥胖、贫血等风险。为您分析了最近一周就餐的食物多样性情况，结果如下：";
const theme = {
    warning: {
        color: "#fd8360",
    },
    success: {
        color: "#4773fc",
    },
};

export default function DietStrutureProgress({ data }) {
    return (
        <div className="progress-container">
            <p className="title">食物多样性评价</p>
            <p className="content">{content}</p>
            {data.map(({ name, percent, variant }) => (
                <Row key={name} className="row-progress">
                    <Col xs={3} as="label" style={{ color: theme[variant].color }}>
                        {name}
                    </Col>
                    <Col xs={8} as={ProgressBar} percent={percent} status={variant} theme={theme} />
                </Row>
            ))}
            <p className="notify" style={{ textAlign: "center" }}>
                <span style={{ color: theme.success.color, marginRight: "1rem" }}>&bull;</span>
                摄入达标&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span style={{ color: theme.warning.color, marginRight: "1rem" }}>&bull;</span>
                摄入不够，请重点采购
            </p>
        </div>
    );
}
