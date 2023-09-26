const input = "I love coding";

const vowels = ['a', 'e', 'i', 'o', 'u'];

const resultArray = [];

for (let i = 0; i < input.length; i++) {
 const char = input[i].toLowerCase();

  if (vowels.includes(char)) {
  resultArray.push(char);
  }

 for (let v = 0; v < vowels.length; v++) {
  if (char === vowels[v]) {
    resultArray.push(char);
    break;
  }
 }
}

const resultString = resultArray.join('').toUpperCase();
console.log(resultString);
