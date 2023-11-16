// Prompt the user for a list of froyo flavors separated by commas.
const userInputString = prompt(
  "Please enter some froyo flavors separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");


// count the amount of flavors typed in
const counts = {}
for (const key of stringArray){
  counts[key] = counts [key] ? counts [key] + 1 : 1
}
console.table(counts)





