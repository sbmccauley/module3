// function askUser() {
// let make = prompt("What make is your car?");
// let model = prompt("What model is your car?");
// let year = prompt("What year is your car?");
// document.write("You own a " + year + " " + make + " " + model);
// };

// askUser();

//BASIC IF STATEMENT
// let num = int32parse(prompt('Enter a number between 1 and 10'));
// let num = (prompt('Enter a number between 1 and 10'));
// if (num === '5') {
//     console.log('You guessed the right number!');
// }


//BASIC IF/ELSE STATEMENT
// let num = (prompt('Enter a number between 1 and 10'));
// if (num === '5') {
//     console.log('You guessed the right number!');
// } else {
//     console.log('You guessed the wrong number!');
// }

//SINGLE STATEMENT SUITE
// let num = Number(prompt('Enter a number between 1 and 10')); (num === 5) ? console.log('Correct!') : console.log('Wrong!');


//  IF ELSE IF STATEMENTS

// alert('Let\'s play rock, paper, scissors.');
// let choice = prompt('Enter your choice: rock, paper, or scissors.');
// if (choice === 'paper') {
//     console.log('You chose paper')
// } else if (choice === 'scissors') {
//     console.log('YOu chose scissors');
// } else if (choice === 'rock') {
//     console.log('You chose scissors.')
// } else {
//     console.log('You didn\'t make a valid choice');
// }


//SWITCH STATEMENT

alert('Let\'s play rock, paper, scissors.');
let choice = prompt('Enter your choice: rock, paper, or scissors.');

switch (choice) {
    case 'rock':
        console.log('You chose rock');
        break
    case 'paper':
    break
    case 'scissors':
    break
    default
}