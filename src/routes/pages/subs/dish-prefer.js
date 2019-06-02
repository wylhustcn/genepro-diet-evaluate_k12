import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

const data = {
    dishes: [
        { name: "白玉馒头", rate: 28.6, nutrs: ["碳水"] },
        { name: "红烧肉", rate: 19.0, nutrs: ["脂肪"] },
        { name: "西芹木耳炒肉片", rate: 14.3, nutrs: ["膳食纤维", "脂肪"] },
        { name: "酸辣土豆丝", rate: 10.1, nutrs: ["碳水"] },
    ],
};
const colorOf = {
    碳水: "#6A8CF7",
    脂肪: "#F9B642",
    膳食纤维: "#29CBB2",
    蛋白质: "#C49ACA",
};
const content =
    "饮食偏好的分析是全面了解和评价个人营养状况的重要方式。同时，这也能够帮助个人降低因为营养缺乏或过剩引发的各种疾病的风险（如肥胖病、糖尿病、肾脏疾病、心脑血管疾病等）。根据您近期的用餐情况，对您的饮食偏好情况进行了统计，结果如下：";
export default function DishPrefer() {
    const [filterData, setFilterData] = useState([]);
    const [expand, setExpand] = useState(false);

    useEffect(() => {
        setFilterData(expand ? data.dishes : data.dishes.slice(0, 3));
    }, [expand]);

    return (
        <div className="common-container">
            <p className="title">饮食偏好</p>
            <p className="content">{content}</p>
            <Table dishes={filterData} />
            <Button onClick={() => setExpand(!expand)} variant="light" block>
                {expand ? "折叠" : "点击查看更多"}
            </Button>
        </div>
    );
}

function Table({ dishes = [] }) {
    return (
        <div>
            <div className="wx-table-container">
                <table>
                    <thead>
                        <tr>
                            <th width="33%">名称</th>
                            <th width="33%">出现频率</th>
                            <th>优势营养</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dishes.map(({ name, rate, nutrs }) => (
                            <tr key={name}>
                                <td>{name}</td>
                                <td>{rate}%</td>
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
