"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortLongShort = shortLongShort;
// https://www.codewars.com/kata/50654ddff44f800200000007/train/typescript
function shortLongShort(a, b) {
    // your code here
    //   check the length of strings and compare them
    //   if a is greater then concantenate them
    return a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`;
}
console.log(shortLongShort("11", "2"));
