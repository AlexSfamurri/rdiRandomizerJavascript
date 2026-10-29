import { prepDeck, deck } from "./deckPrep.js";
import { filterDeck } from "./filterDeck.js"
import { bossMode } from "./bossBattleDeal.js";
import { getRandomInt } from"./classes/deckClass.js";
//prime the deck
prepDeck();

let numOfCharacters = deck.getDeck().length;

// takes the number of players and deals out characters
const dealCharactersToPlayers = (numPlayers, filterChoices=[], bossBattleMode = false)=>{
    //makes sure we are working with a fresh deck
    prepDeck();
    //create a boss deck of character cards that have boss decks
    const bossDeck = bossMode(deck);

    //this takes the filter options and applies them to the deck
    deck.updateWithModifiedDeck(filterDeck(deck, filterChoices));
    //if boss battle mode selected run this
    
    numOfCharacters = deck.getDeck().length;
    // console.log(deck.getDeck()[0])
    //creates an empty object to store player key and character value
    const playersPairings = {};
    //for the number of players
    for(let i = 0; i < numPlayers; i++){
        //pair playerN with random character
        playersPairings["Player" + Number(i + 1)] = deck.deal();
    }
    deck.emptyDeck();
    //returns the obj that has playerN keys and randomcharacter values
    
    

    if(bossBattleMode){
        let randomKey = "Player" + Number(getRandomInt(numPlayers));
        playersPairings[randomKey] = bossDeck.deal();
    }

    return playersPairings;
}

export { dealCharactersToPlayers, numOfCharacters, deck };

