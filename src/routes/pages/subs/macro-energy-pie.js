import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Sector } from "recharts";

const macro_range = {
    碳水化合物: { min: 55, max: 65 },
    脂肪: { min: 20, max: 30 },
    蛋白质: { min: 10, max: 15 },
};
const summaryIt = macros => {
    const ins = []; // in range
    const lts = []; // less than
    const gts = []; // greater than
    for (const { name, value } of macros) {
        const { min, max } = macro_range[name];
        if (value < min) {
            lts.push({ name, detail: `（<${min}）` });
        } else if (max < value) {
            gts.push({ name, detail: `（>${max}）` });
        } else {
            ins.push(name);
        }
    }

    const ins_summary =
        ins.length > 0
            ? `${ins.join("和")}提供的能量<span class="status-info">合理；</span>`
            : "";
    const lts_summary =
        lts.length > 0
            ? lts
                  .map(
                      ({ name, detail }) =>
                          `${name}提供的能量<span class="status-warning">偏低</span>${detail}`
                  )
                  .join("，") + "；"
            : "";
    const gts_summary =
        gts.length > 0
            ? gts
                  .map(
                      ({ name, detail }) =>
                          `${name}提供的能量<span class="status-warning">偏高</span>${detail}`
                  )
                  .join("，") + "；"
            : "";

    return ins_summary + lts_summary + gts_summary;
};
const data = [
    { label: "碳水化合物", ratio: 56, color: "#6A8CF7" },
    { label: "脂肪", ratio: 27, color: "#F9B642" },
    { label: "蛋白质", ratio: 17, color: "#9D69E3" },
].map(({ label, ratio, color }) => ({ name: label, value: ratio, color }));

const summary = summaryIt(data);
export default function MacroEnergyPie({ label: dinner_label }) {
    return (
        <div className="pie-container">
            <p className="title">{dinner_label || "全天"}能量来源</p>
            <p className="content">
                {
                    "三种产能营养素在体内都有特定的生理功能，合理的摄入比例有助于学生的生长发育、生理及身体活动的需要。"
                }
            </p>
            <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={data}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                            label={renderLabel}>
                            {data.map(({ color, label }) => (
                                <Cell key={`cell-${label}`} fill={color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <p className="content" dangerouslySetInnerHTML={{ __html: summary }} />
        </div>
    );
}

function renderLabel(props) {
    const RADIAN = Math.PI / 180;
    const {
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                100%
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${
                payload.name
            }`}</text>
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                dy={18}
                textAnchor={textAnchor}
                fill="#999">
                {`${value.toFixed(2)}%`}
            </text>
        </g>
    );
}
