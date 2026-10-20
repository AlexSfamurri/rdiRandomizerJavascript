import {prepDeck, deck} from "./deckPrep.js";
// global variable to keep track of number of players
let numOfPlayers = 0;
// a function that just returns the result of deck.deal()
const getRandomCharacter = ()=>{
    return deck.deal();
}

//get the number of players 