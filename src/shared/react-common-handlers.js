import update from "immutability-helper";

export const handleChange = (entity, target) => {
    const { name, type } = target;
    let value;
    switch (type) {
        case "checkbox":
            value = target.checked;
            break;
        case "text":
            if (!target.validity || (target.validity && target.validity.valid)) {
                value = target.value;
            } else {
                value = entity[name];
            }
            break;
        case "number":
            if (!target.validity || (target.validity && target.validity.valid)) {
                value = target.value.match(".")
                    ? parseFloat(target.value)
                    : parseInt(target.value, 10);
                if (isNaN(value)) value = "";
            } else {
                value = entity[name];
            }
            break;
        default:
            throw new Error(`[500] unknown input type: ${type}`);
    }
    return update(entity, { [name]: { $set: value } });
};
