const fs = require('fs');
// const input = fs.readFileSync('./1003.txt', {encoding: "utf8"}).split("\n");
// console.log(fs.readFileSync("./1003.txt", {encoding: "utf8"}).trim().split("\n"));
const [t, ...arr] = fs.readFileSync("./1003.txt", {encoding: "utf8"}).trim().split("\n");

// let count0;
// let count1;
// console.log(n, arr);

// arr.forEach(i => {
//     resetCounter();
//     fibo(Number.parseInt(i));
//     console.log(count0, count1);
// })

// function fibo(n) {
//     if (n === 0) {
//         count0++
//         return 0;
//     } else if (n === 1) {
//         count1++
//         return 1;
//     } else {
//         return fibo(n-1) + fibo(n-2);
//         // return;
//     }
// }

// function resetCounter() {
//     count0 = 0;
//     count1 = 0;
// }

// 0~3
const fiboArray = [[1, 0], [0, 1], [1, 1], [1, 2]]

// 
for (let i = 4; i < 41; i++) {
    fiboArray.push([fiboArray[i-2][0] + fiboArray[i-1][0], fiboArray[i-2][1] + fiboArray[i-1][1]]);
}

for (const i of arr) {
    console.log(fiboArray[i][0], fiboArray[i][1]);
}