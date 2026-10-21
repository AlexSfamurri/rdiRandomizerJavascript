import { prepDeck, deck } from "./deckPrep.js";

// a function that just returns the result of deck.deal()
const getRandomCharacter = ()=>{
    return deck.deal();
}

const dealCharactersToPlayers = (numPlayers)=>{
    prepDeck();
    const playersPairings = {};
    for(let i = 0; i < numPlayers; i++){
        playersPairings["Player" + Number(i + 1)] = getRandomCharacter();
    }
    return playersPairings;
}

// console.log(dealCharactersToPlayers(4));

// i don't know why i can't pull from the html page going to work on the rest of the logic
// const inputEl = document.getElementById("playerCountInput");
// const buttonEl = document.getElementById("submitBtn");
// const outputEl = document.getElementById("displayCharacters");
// //get the number of players 

// buttonEl.addEventListener("click", function(){
//     prepDeck();
//     console.log("registered a click");
//     numOfPlayers = Number(inputEl.value);
//     const playerListOfKeyValuePairs = [];
//     for(let i = 0; i < numOfPlayers; i++){
//         playerListOfKeyValuePairs.push({playerOrder: "Player" + i + 1, character: deck.deal()});
//     }
//     console.log("First obj is " + playerListOfKeyValuePairs[0]);
// })

export { dealCharactersToPlayers };