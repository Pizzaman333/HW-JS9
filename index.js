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

// let input;
// const numbers = [];
// let total = 0;
// for (let i = 0; i <= 1000; i++) {
//   input = prompt("Введіть число:");
//   if (input === null) {
//     break;
//   }
//   input = Number.parseInt(input);
//   if (isNaN(input)) {
//     alert("Було введено не число, попробуйте ще раз");
//     continue;
//   }
//   numbers.push(input);
// }
// for (const number of numbers) {
//   total += number;
// }
// console.log(`Сумма введених чисел: ${total}`);

let logins = ["Pizzaman333", "Anton234", "Misha565", "SuperSnipper"];
const isLoginValid = function (login) {
  let message;
  if (login.length < 4 || login.length > 16) {
    message = false;
  } else {
    message = true;
  }
  return message;
};
let result;
const isLoginUnique = function (allLogins, login) {
  for (let i = 0; i <= allLogins.length; i++) {
    if (allLogins[i] === login) {
      result = false;
      return result;
    } else {
      result = true;
    }
  }
  return result;
};
const addLogin = function (allLogins, login) {
  if (isLoginValid(login) === false) {
    alert("Помилка! Логін повинен бути від 4 до 16 символів.");
    return;
  }
  if (isLoginUnique(allLogins, login) === false) {
    alert("Такий логін уже використовується!");
    return;
  }
  logins.push(login);
  alert("Логін успішно доданий!");
  return "ok";
};
let login;
for (let i = 0; i <= 1000; i++) {
  login = prompt("Введіть логін:");
  if (login === null) {
    alert("Скасовано користувачем.");
    break;
  }
  const result = addLogin(logins, login);
  if (result === "ok") {
    break;
  }
}
console.log(logins);
