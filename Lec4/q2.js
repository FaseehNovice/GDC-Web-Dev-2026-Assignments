const prompt = require("prompt-sync")();

const dictionary = {
    Ephemeral: "Lasting for a very short time",
    Obfuscate: "To make something confusing or unclear",
    Ubiquitous: "Present everywhere",
    Pragmatic: "Practical and realistic",
    Cacophony: "A loud, unpleasant mix of sounds",
    Resilient: "Able to recover quickly from difficulties",
    Meticulous: "Very careful and detail-oriented",
    Ambiguous: "Having more than one possible meaning",
    Benevolent: "Kind and well-meaning",
    Conundrum: "A confusing problem or question",
};

let input;

do{
    console.log("\nPress 1 for dictionary");
    console.log("Press 2 to exit");

    input = Number(prompt("Choice: "));

    if (input === 1) {
        let word = prompt("Enter your word: ");


        word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

        if (dictionary[word]) {
            console.log(`${word}: ${dictionary[word]}`);
        } else {
            console.log("Could not find your word.");
        }
    }

} while (input !== 2);

console.log("Exited successfully.");
