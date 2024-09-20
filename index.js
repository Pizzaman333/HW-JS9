const logItems = function (array) {
  let j;
  for (let i = 0; i <= array.length - 1; i++) {
    j = i + 1;
    console.log(j + " - " + array[i]);
  }
  return;
};
logItems(["Mango", "Poly", "Ajax"]);

const calculateEngravingPrice = function (message, pricePerWord) {
  const words = message.split(" ");
  const price = pricePerWord * words.length;
  return price;
};
console.log(calculateEngravingPrice("Hello it's nice to meet you!", 100));

const findLongestWord = function (string) {
  const words = string.split(" ");
  let lonegstWord;
  let numberOfLetters = 0;
  for (let word of words) {
    if (word.length > numberOfLetters) {
      lonegstWord = word;
      numberOfLetters = word.length;
    }
  }
  return lonegstWord;
};
console.log(findLongestWord("Hello it's nice to meet you!"));

const formatString = function (string) {
  let result = string;
  if (string.length > 40) {
    result = string.slice(0, 40) + "...";
  }
  return result;
};
console.log(formatString("There are less then 40 symbols here."));
console.log(formatString("There are more then 40 symbols in this string."));

const checkForSpam = function (message) {
  let result;
  if (
    message.toLowerCase().includes("spam") === true ||
    message.toLowerCase().includes("sale") === true
  ) {
    result = true;
  } else {
    result = false;
  }
  return result;
};
console.log(checkForSpam("SaLe"));
console.log(checkForSpam("SpAm"));
console.log(checkForSpam("No S-word"));

let input;
const numbers = [];
let total = 0;
for (let i = 0; i <= 1000; i++) {
  input = prompt("Введіть число:");
  if (input === null) {
    break;
  }
  input = Number.parseInt(input);
  if (isNaN(input)) {
    alert("Було введено не число, попробуйте ще раз");
    continue;
  }
  numbers.push(input);
  console.log(numbers);
}
for (const number of numbers) {
  total += number;
}
console.log(`Сумма введених чисел: ${total}`);

