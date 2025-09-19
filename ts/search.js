var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var hashMap = {};
hashMap['apple'] = 5;
hashMap['banana'] = 8;
hashMap['cherry'] = 12;
hashMap['apple'] += 2;
// console.log("Number of Apples: ", hashMap['apple']);
var userMap = new Map();
userMap.set(1, "Alice");
userMap.set(2, "Bob");
userMap.set(3, "Charlie");
// console.log(userMap.get(3));
// console.log(userMap.has(5));
function sentinelLinearSearch(arr, target) {
    var arrCopy = __spreadArray([], arr, true);
    var n = arrCopy.length;
    var lastElement = arrCopy[n - 1];
    var i = 0;
    while (arrCopy[i] !== target) {
        i++;
    }
    arrCopy[n - 1] = lastElement;
    if (i < n - 1 || arrCopy[n - 1] === target) {
        return i;
    }
    else {
        return -1;
    }
}
var arr = [2, 4, 55, 11, 16, 13, 9, 90, 10, 12, 14];
var result = sentinelLinearSearch(arr, 9);
console.log("the target is on the ".concat(result + 1));
