"use strict";
// once there was provided only one test case it is impossible for me to find any pattern
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatString2 = exports.formatString = void 0;
exports.formatString = (str) => {
    const arr = str.split('0').filter(el => el !== '');
    if (arr.length < 3) {
        throw new Error("Request body format is not correct");
    }
    let temp = arr[2].split('');
    temp.splice(3, 0, '-');
    arr[2] = temp.join('');
    return arr;
};
exports.formatString2 = (str) => {
    const indexes = [];
    const arr = [];
    str.split('').forEach((el, index) => {
        if (el === "0" && str[index + 1] !== "0") {
            indexes.push(index + 1);
        }
        return indexes;
    });
    arr.push(str.slice(0, indexes[0]));
    arr.push(str.slice(indexes[0], indexes[1]));
    arr.push(str.slice(indexes[1], str.length));
    return arr;
};
//# sourceMappingURL=utils.js.map