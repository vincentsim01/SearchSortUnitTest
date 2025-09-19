let hashMap = {};

hashMap['apple'] = 5;
hashMap['banana'] = 8;
hashMap['cherry'] = 12;

hashMap['apple'] += 2;

// console.log("Number of Apples: ", hashMap['apple']);


const userMap = new Map<number, string>();
userMap.set(1,"Alice");
userMap.set(2,"Bob");
userMap.set(3, "Charlie");


// console.log(userMap.get(3));
// console.log(userMap.has(5));

function sentinelLinearSearch(arr: number[],target:number){
    const arrCopy = [...arr];
    const n = arrCopy.length;
    const lastElement = arrCopy[n-1];

    let i = 0;

    while(arrCopy[i] !== target){
        i++;
    }

    arrCopy[n-1] = lastElement;

    if(i<n-1 || arrCopy[n-1] === target){
        return i;
    }else{
        return -1;
    }
}
let arr = [2,4,55,11,16,13,9,90, 10, 12,14]
let result = sentinelLinearSearch(arr, 9);

console.log(`the target is on the ${result+1}`);