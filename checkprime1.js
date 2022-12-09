let count = 0;
let num = 7;
for (let i = 1; i <= num; i++) {
  if (num % 2 == 0) {
    count++
  }
}
(count == 0)?console.log("Prime number"):console.log("Not prime number");
