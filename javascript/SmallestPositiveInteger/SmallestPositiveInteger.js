// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  let item = 1;

  let arr = new Set(A);

  while (arr.has(item)) {
    item++;
  }

  return item;
}

A = [-1, -3];
console.log("A1 = ", solution(A));

A = [1, 2, 3];
console.log("A2 = ", solution(A));

A = [1, 3, 6, 4, 1, 2];
console.log("A3 = ", solution(A));

A = [-1, -2, 7, 9, 10];
console.log("A3 = ", solution(A));
