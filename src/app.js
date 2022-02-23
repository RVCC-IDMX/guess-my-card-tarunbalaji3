/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */

/* app.js */

/*
  DO NOT FORGET
Edit random.js so getRandomInt(max)
will return a random number from
0 to the value of max (inclusively)

*/
import getRandomInt from './random';
import './style.css';

const farewell = document.querySelector('.farewell');
const suits = ['hearts', 'spades', 'diamonds', 'clubs'];

while (confirm('Would you like to play the game?')) {
  // Put your code in this while loop
  // Remember to use prompt and alert
  alert("Prepare to guess a suit")
  const rand = getRandomInt(0,4);
  console.log(rand);
  const result = prompt("Hearts, spades, diamonds, or clubs?");
  const input = result.toLowerCase();
  const type = suits[rand];
  console.log(input);
  if (input === type) {
    alert("Congrats, you win!");
  }
  else if (input !== type) {
    alert("Sorry, you lost!");
  }
}

farewell.innerHTML = '<h1>Thanks for playing!<h1>';
