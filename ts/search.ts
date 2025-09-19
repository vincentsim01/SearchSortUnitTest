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


console.log(userMap.get(3));
console.log(userMap.has(5));