numbers = [1, 2, 2];

function squareSum(numbers) {
  let sum = 0;
  numbers.forEach((item) => (sum += item * item));
  //   console.log(sum);
  return sum;
}

squareSum(numbers);
