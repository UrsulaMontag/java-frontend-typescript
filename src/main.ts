//Challenges 25.06.24
const age: number = 42;
let score: number = 0;
let username: string = "";
let isAdmin: boolean = false;

for (let i = 0; i <= age; i++) {
    console.log("Lifetime in console: " + i);
    i < 18 ? console.log("childhood") : console.log("adult");
}

score !== 0 && console.log("Score is available.");
score ? console.log("Score is considered truthy.") : console.log("Score is considered falsy.");

!username ? console.log("Username is considered falsy!") : console.log("Username is available." + username);

isAdmin ? console.log("isAdmin is evaluated as truthy.") : console.log("isAdmin is evaluated as falsy.");

!isAdmin && console.log("isAdmin is false.");

//Bonus
let n: number = 5;
if (n === 5) {
    console.log("     *     ");
    console.log("    ***    ");
    console.log("   *****   ");
    console.log("  *******  ");
    console.log(" ********* ");
    console.log("     *     ");
    console.log("     *     ");
    console.log("     *     ");
    console.log("     *     ");
    console.log("     *     ");
} else {
    console.log("It's not christmas time!")
}

//Challenges 26.06.24
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
const doubledNumbers: number[] = numbers.map((num: number) => num * 2);
console.log(`DoubledNumbers: ${doubledNumbers}`);

const words: string[] = ["Hello", "World", "tomorrow", "afternoon", "cat", "goose", "typescript"];
const longWords: string[] = words.filter(word => word.length > 5);
console.log(`Words with more than 5 letters: ${longWords}`);

const reducedNumber: number = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(`reducedNumber: ${reducedNumber}`);

numbers.push(12, 14, 16);
const isANumberGreaterThanTen: boolean = numbers.some(num => num > 10);
console.log(`Is at least one number greater than ten: ${isANumberGreaterThanTen}`);

//Bonus
