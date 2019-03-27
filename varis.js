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
    return Object.prototype.toString.call(v) === '[object Array]'
}

export function isFunc(v) {
    return typeof v === "function";
}

export function isBool(v) {
    return v === false || v === true;
}

export function isNull(v) {
    return v === null;
}

export function isObj(v) {
    return Object.prototype.toString.call(v) === '[object Object]'
}

export function isUndef(v) {
    return typeof v === "undefined";
}

export function isDate(v) {
    return v instanceof Date;
}

export function isFormatDate(v) {
    let reg = /^[1-9][0-9]{3}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2][0-9])|(3[0-1])) ((0[0-9])|(1[0-9])|(2[0-3])):[0-5][0-9]:[0-5][0-9](\.[0-9]{3})?$/;
    return isStr(v) && reg.test(v);
}