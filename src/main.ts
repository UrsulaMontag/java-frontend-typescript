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
