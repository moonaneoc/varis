export function isStr(v) {
    return typeof v === "string" || v instanceof String;
}

export function isNum(v) {
    return (typeof v === "number" || v instanceof Number) && !isNaN(v);
}

export function isInt(v) {
    return isNum(v) && parseInt(v) === Number(v);
}

export function isArr(v) {
    return v instanceof Array;
}

export function isFunc(v) {
    return typeof v === "function";
}