import React from "react";
// import ProgressBar from "react-bootstrap/ProgressBar";
import { Progress as ProgressBar } from "react-sweet-progress";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const dinner_range = {
    早餐: { min: 20, max: 30 },
    午餐: { min: 35, max: 45 },
    晚餐: { min: 25, max: 35 },
};
const calculateTheme = (label, ratio) => {
    const { min, max } = dinner_range[label];
    if (min <= ratio && ratio <= max) {
        return {
            status: "info",
            mark: "合理",
            theme: {
                info: {
                    symbol: `${ratio}%`,
                    color: "#6A8CF7",
                },
            },
        };
    }

    return {
        status: "warning",
        mark: ratio < min ? "偏低" : "偏高",
        theme: {
            warning: {
                symbol: `${ratio}%`,
                color: "#F97E42",
            },
        },
    };
};

const data = [
    { label: "早餐", ratio: 22 },
    { label: "午餐", ratio: 41 },
    { label: "晚餐", ratio: 37 },
].map(({ label, ratio }) => ({ label, ratio, ...calculateTheme(label, ratio) }));
export default function DinnerEnergyProgress() {
    return (
        <div className="progress-container">
            <p className="title">各餐能量比</p>
            <p className="content">
                全天各餐食物分配的比例最好是午餐最多，早餐和晚餐
                较少，不当的三餐比例会增加肥胖、糖尿病等风险。 您本日各餐提供的能量为：
            </p>
            {data.map(({ label, ratio, theme, status, mark }) => (
                <Row key={label} className="row-progress">
                    <Col xs={2} as="label">
                        {label}
                    </Col>
                    <Col
                        xs={7}
                        as={ProgressBar}
                        percent={ratio * 2 > 100 ? 100 : ratio * 2}
                        status={status}
                        theme={theme}
                    />
                    <Col xs={3} className={`status-${status}`}>
                        {mark}
                    </Col>
                </Row>
            ))}
            <p className="notify">参考范围：早餐20%-30%，午餐35%-45%，晚餐25%-35%</p>
        </div>
    );
}
