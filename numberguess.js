function numberguess() {
const correctNumber = Math.floor(Math.random() * 10) + 1;
let guess;

while (guess !== correctNumber) {
    guess = parseInt(prompt("Guess a number between 1 and 10:"), 10);

    if (guess > correctNumber) {
        console.log("Your guess is too high. Try again.");
    } else if (guess < correctNumber) {
        console.log("Your guess is too low. Try again.");
    } else {
        console.log("Congratulations! You guessed the correct number: " + correctNumber);
    }
}
}