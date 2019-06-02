import { data as dishes } from "./dish.json";

const LABEL = {
    name: "name",
    energy: "energy_kcal",
    fiber: "ext$$fiber",
    carbohydrate: "macro$$carbohydrate",
    fat: "macro$$fat",
    protein: "macro$$protein",
    va: "micro$$VA",
    vb1: "micro$$VB1",
    vc: "micro$$VC",
    vd: "micro$$VD",
    ve: "micro$$VE",
    folate: "micro$$Folate",
    ca: "micro$$Ca",
    fe: "micro$$Fe",
    zn: "micro$$Zn",
    na: "micro$$Na",
};
const store = {};
export function top(label = "protein", N = 5) {
    if (store[label]) return store[label];

    const db_label = LABEL[label];
    const tops = dishes
        .sort((dish1, dish2) => dish2[db_label] - dish1[db_label])
        .slice(0, N)
        .map(dish => ({
            name: dish.name,
            content: dish[db_label],
        }));

    store[label] = tops;
    return tops;
}
