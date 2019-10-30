import React from "react";
import Icon from "components/icon";

const iconOf = {
    能量: "nutrCalorie",
    碳水: "nutrCarbohydrate",
    脂肪: "nutrFat",
    蛋白: "nutrProtein",
    钠: "nutrSalt",
    膳食纤维: "nutrFiber",
    钙: "nutrCa",
    铁: "nutrFe",
    锌: "nutrZn",
    维生素A: "nutrVa",
    维生素E: "nutrVe",
    维生素B1: "nutrVb1",
    维生素D: "nutrVd",
    叶酸: "nutrFolicAcid",
    维生素C: "nutrVc",
};
const urlOf = {
    能量: "energy",
    碳水: "carbohydrate",
    脂肪: "fat",
    蛋白: "protein",
    钠: "na",
    膳食纤维: "fiber",
    钙: "ca",
    铁: "fe",
    锌: "zn",
    维生素A: "va",
    维生素E: "ve",
    维生素B1: "vb1",
    维生素D: "vd",
    叶酸: "folate",
    维生素C: "vc",
};

const colorOf = {
    合理: "#29CBB2",
    不足: "#FED205",
    过高: "#F7926A",
    略低: "#B98AF4",
};
const content =
    "人体需要的各种营养素都需要从每天的饮食中获得。不当的饮食习惯在短期内会造成如记忆力下降、免疫力降低、肥胖、贫血等问题，长期以往还会增加未来出现高血压、糖尿病、心血管疾病等疾病的风险。我们为您分析了最近一周平均每日营养素获取情况，结果如下：";
export default function NutrientCard({ data, goto }) {
    return (
        <div className="common-container">
            <p className="title">各项营养素获取情况</p>
            <p className="content">{content}</p>
            <div className="i-card-container">
                {data.map(({ name, value, unit, judge }) => (
                    <div key={name} className="i-card">
                        <div className="common-icon">
                            <Icon type={iconOf[name]} />
                        </div>
                        <p>{name}</p>
                        <p className="md-number">
                            <span>{(+value).toFixed(2)}</span>&nbsp;
                            {unit}
                        </p>
                        <p style={{ color: colorOf[judge] }}>{judge}</p>
                        <button data-url={`/de/recent/${urlOf[name]}`} onClick={goto}>
                            <Icon type="arrowRightCircle" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
