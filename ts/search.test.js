const { binarySearch } = require("./search.js");

let arr =[2,4,5,6,9,13,15];

test('have array of 2,4,5,6,9,13,15 find 13 should be 6 index',()=>{
    expect(binarySearch(arr,13)).toBe(5);
})