import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

const data = [
    { name: "能量", ratio: "112.33%", judge: "合理" },
    { name: "碳水", ratio: "102.45%", judge: "合理" },
    { name: "脂肪", ratio: "82.07%", judge: "合理" },
    { name: "蛋白", ratio: "156.53%", judge: "过高" },
    { name: "钠", ratio: "146.36%", judge: "过高" },
    { name: "膳食纤维", ratio: "33.70%", judge: "不足" },
    { name: "钙", ratio: "50.94%", judge: "略低" },
    { name: "铁", ratio: "132.43%", judge: "过高" },
    { name: "锌", ratio: "114.85%", judge: "合理" },
    { name: "维生素A", ratio: "40.70%", judge: "不足" },
    { name: "维生素E", ratio: "60.44%", judge: "略低" },
    { name: "维生素", ratio: "180.34%", judge: "过高" },
    { name: "维生素D", ratio: "22.86%", judge: "不足" },
    { name: "叶酸", ratio: "101.03%", judge: "合理" },
    { name: "维生素C", ratio: "70.62%", judge: "略低" },
];
export default function NutrientDetail() {
    const [expand, setExpand] = useState(false);
    const [filterData, setFilterData] = useState([]);
    useEffect(() => {
        setFilterData(expand ? data : data.slice(0, 6));
    }, [expand]);
    return (
        <div className="common-container">
            <p className="title">营养素获取情况</p>
            <p className="content">
                充足的营养是中小学生生理、情绪以及行为健康发展的基础。营养素缺乏或不均衡会引起如贫血、精力不济、注意力不集中、记忆力下降、近视风险增加、肥胖等，因此营养素的摄入情况需要重点关注。
您本日各项营养素的获取情况为：
            </p>
            <Table data={filterData} />
            <Button onClick={() => setExpand(!expand)} variant="light" block>
                {expand ? "折叠" : "点击查看更多"}
            </Button>
        </div>
    );
}

function Table({ data = [] }) {
    return (
        <div>
            <div className="wx-table-container">
                <table>
                    <thead>
                        <tr>
                            <th width="33%">营养素</th>
                            <th width="33%">实际占比</th>
                            <th>评估</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(({ name, ratio, judge }) => (
                            <tr key={name}>
                                <td>{name}</td>
                                <td>{ratio}</td>
                                <td className={judge === "合理" ? "status-info" : "status-warning"}>
                                    {judge}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
