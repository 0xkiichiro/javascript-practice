function reverseString(word) {
  let reversedString = "";
  wordArray = Array.from(word);
  for (let i = 0; i < wordArray.length; i++) {
    let index = wordArray.length - i - 1;
    reversedString += wordArray[index];
  }
  // console.log(reversedString);
  return reversedString;
}

reverseString("hello");

//! apparently a much simpler solution was:

// function solution(str){
//   return str.split('').reverse().join('');
// }
