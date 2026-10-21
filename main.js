console.log("hi");

import { prepDeck, deck } from "./deckPrep.js";


console.log("hi");


// global variable to keep track of number of players
let numOfPlayers = 0;
// a function that just returns the result of deck.deal()
const getRandomCharacter = ()=>{
    return deck.deal();
}


const inputEl = document.getElementById("playerCountInput");
const buttonEl = document.getElementById("submitBtn");
const outputEl = document.getElementById("displayCharacters");
//get the number of players 

buttonEl.addEventListener("click", function(){
    prepDeck();
    console.log("registered a click");
    numOfPlayers = Number(inputEl.value);
    const playerListOfKeyValuePairs = [];
    for(let i = 0; i < numOfPlayers; i++){
        playerListOfKeyValuePairs.push({playerOrder: "Player" + i + 1, character: deck.deal()});
    }
    console.log("First obj is " + playerListOfKeyValuePairs[0]);
})