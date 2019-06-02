import React from "react";
// import ProgressBar from "react-bootstrap/ProgressBar";
import { Progress as ProgressBar } from "react-sweet-progress";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Icon from "components/icon"

const content =
    "人体需要的各种营养素都需要从每天的饮食中获得。不当的饮食习惯除了会影响短期内个人的健康状态之外，还会增加未来出现II型糖尿病、心血管疾病、结直肠癌等疾病的风险。因此科学地安排每日膳食，以提供数量及质量适宜的营养素，是避免人体产生营养不足或营养过量危害的关键。为您分析了最近一周平均每日的营养素获取情况，结果如下：";
const theme_template = {
    合理: {
        color: "#4773fc",
    },
    过高: {
        color: "#fd8360",
    },
    略低: {
        color: "#F9B642",
    },
    不足: {
        color: "#FF5722",
    },
};

const theme = (judge, percent) => {
    const template = { ...theme_template[judge], symbol: `${percent}%` };
    return { [judge]: template };
};

export default function RecentNutrientProgress({ data, goto }) {
    return (
        <div className="progress-container">
            <p className="title">营养素偏好</p>
            <p className="content">{content}</p>
            {data.map(({ name, percent, judge, label }) => (
                <Row key={name} className="row-progress">
                    <Col xs={3} as="label" style={{ color: theme_template[judge].color }}>
                        {name}
                    </Col>
                    <Col
                        xs={6}
                        as={ProgressBar}
                        percent={percent > 100 ? 100 : percent}
                        status={judge}
                        theme={theme(judge, percent)}
                    />
                    <Col xs={{ span: 1, offset: 1}}>
                        <button data-url={`/de/intro/${label}`} onClick={goto}>
                            <Icon type="arrowRightCircle" color={theme_template[judge].color} />
                        </button>
                    </Col>
                </Row>
            ))}
            <p className="notify" style={{ textAlign: "center" }}>
                {Object.keys(theme_template).map(judge => (
                    <span key={judge} style={{ color: theme_template[judge].color }}>
                        &bull;&nbsp;&nbsp;{judge}&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                ))}
            </p>
        </div>
    );
}
