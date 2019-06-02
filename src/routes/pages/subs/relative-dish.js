import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { top } from "./format-dish";

const lookup = {
    energy: { name: "能量", value: "2246.6824", judge: "合理", unit: "kcal" },
    carbohydrate: { name: "碳水", value: "61.47126091", judge: "合理", unit: "%" },
    fat: { name: "脂肪", value: "20.51685588", judge: "合理", unit: "%" },
    protein: { name: "蛋白", value: "19.56610334", judge: "过高", unit: "%" },
    na: { name: "钠", value: "2195.3698", judge: "过高", unit: "mg" },
    fiber: { name: "膳食纤维", value: "9.26752", judge: "不足", unit: "g" },
    ca: { name: "钙", value: "407.49", judge: "略低", unit: "mg" },
    fe: { name: "铁", value: "21.1886", judge: "过高", unit: "mg" },
    zn: { name: "锌", value: "11.484604", judge: "合理", unit: "mg" },
    va: { name: "维生素A", value: "305.2474", judge: "不足", unit: "μg RAE" },
    ve: { name: "维生素E", value: "8.461659", judge: "略低", unit: "mg α-TE" },
    vb1: { name: "维生素B1", value: "2.34443", judge: "过高", unit: "mg" },
    vd: { name: "维生素D", value: "2.2858728", judge: "不足", unit: "μg" },
    folate: { name: "叶酸", value: "404.1341", judge: "合理", unit: "μg DFE" },
    vc: { name: "维生素C", value: "70.6232", judge: "略低", unit: "mg" },
};
export default function RelativeDish({ nutrient }) {
    const [filterData, setFilterData] = useState([]);
    const [expand, setExpand] = useState(false);

    useEffect(() => {
        setFilterData(top(nutrient));
    }, [nutrient]);

    return (
        <div className="common-container">
            <p className="title">相关菜品</p>
            <Table data={filterData.slice(0, expand ? 5 : 3)} nutrient={nutrient} />
            <Button onClick={() => setExpand(!expand)} variant="light" block>
                {expand ? "折叠" : "点击查看更多"}
            </Button>
        </div>
    );
}

function Table({ data = [], nutrient }) {
    return (
        <div>
            <div className="wx-table-container">
                <table>
                    <thead>
                        <tr>
                            <th width="10%">名称</th>
                            <th width="50%">{""}</th>
                            <th>富含程度</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(({ name, content }) => (
                            <tr key={name}>
                                <td>
                                    <div className="md-circle-font">{name[0]}</div>
                                </td>
                                <td>
                                    <span className="status-info">{name}</span>（每份）
                                    <br />含&nbsp;
                                    {content}&nbsp;
                                    {lookup[nutrient].unit}&nbsp;
                                    {lookup[nutrient].name}&nbsp;
                                </td>
                                <td>{content}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
