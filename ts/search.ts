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
// let arr = [2,4,55,11,16,13,9,90, 10, 12,14]
// let result = sentinelLinearSearch(arr, 9);

// console.log(`the target is on the ${result+1}`);

function binarySearch(arr:number[],target:number){
    let left = 0;
    let right = arr.length -1;

    while(left <= right){
        let mid = Math.floor((left+right)/2)
        if(arr[mid]=== target){
            return `${target} has been found at index ${mid}`
        }else if(arr[mid]<target){
            left = mid+1
        }else if(arr[mid]>target){
            right = mid-1;
        }
    }

    return "target not found in the list";
}

let sortedArray = [4,9,11,17,23,36,48,49,51,52,66,67,68,69,73,75,78,83,85,86,87,91,100];

let binarySortIndex = binarySearch(sortedArray,86);

console.log(`number 86 is located at ${binarySortIndex}`);