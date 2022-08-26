numbers = "8 3 -5 42 -1 0 0 -9 4 7 4 -4";

// function highAndLow(numbers) {
//   let high = 0;
//   let low = 0;

//   numbers = numbers.split(" ").map(Number);
//   console.log(numbers);

//   for (let i = 0; i < numbers.length; i++) {
//     numbers[i] > high && (high = numbers[i]);
//     numbers[i] < low && (low = numbers[i]);
//   }
//   console.log(`${high} ${low}`);
// }

//! best answer below

function highAndLow(numbers) {
  numbers = numbers.split(" ").map(Number);
  console.log(numbers);
  return Math.max.apply(0, numbers) + " " + Math.min.apply(0, numbers);
}

highAndLow(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");
