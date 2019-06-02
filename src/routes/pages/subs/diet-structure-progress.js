import React from "react";
// import ProgressBar from "react-bootstrap/ProgressBar";
import { Progress as ProgressBar } from "react-sweet-progress";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const content =
    "食物的多样化的膳食有助于最大程度的满足人体正常生长发育及各种生理活动的需要，并且可以降低包括高血压、心血管疾病等多种疾病的发病风险。为您分析了最近一周就餐的食物多样性情况，结果如下：";
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
