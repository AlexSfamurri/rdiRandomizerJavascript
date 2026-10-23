import { prepDeck } from "./deckPrep.js"

/*
something is broken here. when this code is implemented the deck size doubles with each run
*/
// takes the deck and an array of filter choices
const filterDeck = (deck, filterChoices = [])=>{
    //gets the number of choices selected
    const numOfChoices = filterChoices.length;
    //gets the current deck
    
    console.log(deck.getDeck().length + " is the number of characters currently in the deck at the beginning of filterDeck");
    console.log(filterChoices.length + " is the number of filter choices");
    
    
    //makes sure there is at least one choice to filter
    if(!numOfChoices < 1){
        //creates an empty array to be used as the new modified deck
        const newDeck = [];
        console.log(newDeck.length + " is how many elements are in newDeck in filterDeck before filtration");
        //for each choice
        for(let i = 0; i < numOfChoices; i++){
            //and for each character
            for(let j = 0; j < deck.getDeck().length; j++){
                // console.log(deck.getDeck()[j].getSource())
                // if this choice's name or source or villain is equal to this currecnt character
                if(deck.getDeck()[j].getSource() === filterChoices[i] || deck.getDeck()[j].getVillainOrHero() === filterChoices[i]){
                    //add that character to the new deck
                    newDeck.push(deck.dealSpecific(j));
                }
                
            }
        }
        //update deck with the new deck
        return newDeck;
    }
    return deck.getDeck();
    

}

export { filterDeck };