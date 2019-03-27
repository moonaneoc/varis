console.log("\n\n\n");

let utils = require("./varis.min.js");

let str, num, bool, arr, vnull, vundefined, obj, reg, func, date;

let fn = "isObj";

str = "abc";
console.log(`\t"${str}"\t${fn}\t${utils[fn](str)}`);

num = "5.0";
console.log(`\t"${Number(num)}"\t${fn}\t${utils[fn](num)}`);
num = 3;
console.log(`\t${Number(num)}\t${fn}\t${utils[fn](num)}`);
num = 2.4;
console.log(`\t${Number(num)}\t${fn}\t${utils[fn](num)}`);
num = new Number(-3.0);
console.log(`Number\t${Number(num)}\t${fn}\t${utils[fn](num)}`);
num = new Number(3.0);
console.log(`Number\t${Number(num)}\t${fn}\t${utils[fn](num)}`);
num = new Number(3.5);
console.log(`Number\t${Number(num)}\t${fn}\t${utils[fn](num)}`);
num = NaN;
console.log(`\tNaN\t${fn}\t${utils[fn](num)}`);

bool = true;
console.log(`\ttrue\t${fn}\t${utils[fn](bool)}`);
bool = false;
console.log(`\tfalse\t${fn}\t${utils[fn](bool)}`);

arr = [];
console.log(`\t[]\t${fn}\t${utils[fn](arr)}`);
arr = new Array();
console.log(`Array\t[]\t${fn}\t${utils[fn](arr)}`);

vnull = null;
console.log(`\tnull\t${fn}\t${utils[fn](vnull)}`);

vundefined = undefined;
console.log(`undefined\t${fn}\t${utils[fn](vundefined)}`);

obj = {};
console.log(`\t{}\t${fn}\t${utils[fn](obj)}`);

reg = /abc/
console.log(`\t/abc/\t${fn}\t${utils[fn](reg)}`);
reg = new RegExp("abc");
console.log(`RegExp\t/abc/\t${fn}\t${utils[fn](reg)}`);

func = function () { };
console.log(`function\t${fn}\t${utils[fn](func)}`);

date = new Date();
console.log(`\tDate\t${fn}\t${utils[fn](date)}`);

console.log("")