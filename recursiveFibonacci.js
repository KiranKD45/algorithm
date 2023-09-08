function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }

  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(4)); // [0,1,1,2,3,5,8] => 3
console.log(recursiveFibonacci(0)); // 0
console.log(recursiveFibonacci(5)); // 5
