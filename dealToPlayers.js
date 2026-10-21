import { prepDeck, deck } from "./deckPrep.js";
import { filterDeck } from "./filterDeck.js"
//prime the deck
prepDeck();

const numOfCharacters = deck.getDeck().length;

// takes the number of players and deals out characters
const dealCharactersToPlayers = (numPlayers, filterChoices)=>{
    //makes sure we are working with a fresh deck
    prepDeck();

    //this takes the filter options and applies them to the deck
    filterDeck(deck, filterChoices);

    //creates an empty object to store player key and character value
    const playersPairings = {};
    //for the number of players
    for(let i = 0; i < numPlayers; i++){
        //pair playerN with random character
        playersPairings["Player" + Number(i + 1)] = deck.deal();
    }
    //returns the obj that has playerN keys and randomcharacter values
    return playersPairings;
}

export { dealCharactersToPlayers, numOfCharacters };

