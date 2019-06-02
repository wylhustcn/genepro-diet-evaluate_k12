const date_fn = {
    get: {
        day: "getDate",
        days: "getDate",
        d: "getDate",
        D: "getDate",
        hour: "getHours",
        hours: "getHours",
        h: "getHours",
        H: "getHours",
        minute: "getMinutes",
        minutes: "getMinutes",
        m: "getMinutes",
        M: "getMinutes",
    },

    set: {
        day: "setDate",
        days: "setDate",
        d: "setDate",
        D: "setDate",
        hour: "setHours",
        hours: "setHours",
        h: "setHours",
        H: "setHours",
        minute: "setMinutes",
        minutes: "setMinutes",
        m: "setMinutes",
        M: "setMinutes",
    },
};

const i18n = {
    dayNames: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ],
    monthNames: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ],
};
const regexp = /"[^"]*"|'[^']*'|\b(?:d{1,4}|M{1,4}|yy(?:yy)?|([hHmstT])\1?|[lLZ])\b/g;

function zeroize(value, length = 2) {
    const delta = length - String(value).length;
    if (delta <= 0) return String(value);

    const zeros = new Array(delta).fill(0).join("");
    return zeros + value;
}
export const formatDate = function(d, fmt) {
    return fmt.replace(regexp, function($0) {
        switch ($0) {
            case "d":
                return d.getDate();

            case "dd":
                return zeroize(d.getDate());

            case "ddd":
                return i18n.dayNames[d.getDay()];

            case "dddd":
                return i18n.dayNames[d.getDay() + 7];

            case "M":
                return d.getMonth() + 1;

            case "MM":
                return zeroize(d.getMonth() + 1);

            case "MMM":
                return i18n.monthNames[d.getMonth()];

            case "MMMM":
                return i18n.monthNames[d.getMonth() + 12];

            case "yy":
                return String(d.getFullYear()).substr(2);

            case "yyyy":
                return d.getFullYear();

            case "h":
                return d.getHours() % 12 || 12;

            case "hh":
                return zeroize(d.getHours() % 12 || 12);

            case "H":
                return d.getHours();

            case "HH":
                return zeroize(d.getHours());

            case "m":
                return d.getMinutes();

            case "mm":
                return zeroize(d.getMinutes());

            case "s":
                return d.getSeconds();

            case "ss":
                return zeroize(d.getSeconds());

            case "l":
                return zeroize(d.getMilliseconds(), 3);

            case "L":
                const m = d.getMilliseconds();
                return zeroize(m > 99 ? Math.round(m / 10) : m);

            case "tt":
                return d.getHours() < 12 ? "am" : "pm";

            case "TT":
                return d.getHours() < 12 ? "AM" : "PM";

            case "Z":
                return d.toUTCString().match(/[A-Z]+$/);

            default:
                return $0.substr(1, $0.length - 2);
        }
    });
};

export const dateNow = (format = "yyyy-mm-DD") => formatDate(new Date(), format);

export const dateAfter = (time = 0, unit = "day", date = new Date()) => {
    const getter = date_fn.get[unit];
    const setter = date_fn.set[unit];

    const prev = date[getter]();
    date[setter](prev + time);

    return date;
};
