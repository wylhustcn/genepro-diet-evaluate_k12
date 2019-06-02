import React, { useState, useEffect } from "react";
import { data } from "./nutrient-intro.json";

export default function NutrientIntro({ label = "protein" }) {
    const [content, setContent] = useState(false);

    useEffect(() => {
        setContent(data.find(foo => foo.name === label));
    }, [label]);

    return (
        <div className="common-container">
            <p className="title">营养素简介</p>
            <p className="content" dangerouslySetInnerHTML={{ __html: content.intro }} />
        </div>
    );
}
