// Prompt the user for a list of froyo flavors separated by commas.
const userInputString = prompt(
  "Please enter some froyo flavors separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

// Convert the array of strings into an array of numbers.
/*const numbers = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const number = parseInt(str);
  numbers.push(number);
}*/

// count the amount of flavors typed in
const counts = {}
for (const key of stringArray){
  counts[key] = counts [key] ? counts [key] + 1 : 1
}
console.table(counts)





/*const vanilla = []
const strawberry = []
const coffee = []
while (stringArray) {
  if (stringArray === "vanilla") {
    vanilla++
  }
  else if (stringArray === "strawberry") {
    strawberry++
  }
  else if (stringArray === "coffee") {
    coffee++
  }

}*/
