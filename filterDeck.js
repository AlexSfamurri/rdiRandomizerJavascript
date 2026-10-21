
// takes the deck and an array of filter choices
const filterDeck = (deck, filterChoices = [])=>{
    //gets the current deck
    const deckOfCharacters = deck.getDeck();
    //gets the number of choices selected
    const numOfChoices = filterChoices.length;
    // gets the length of the deck of characters
    let numOfCharacters = deckOfCharacters.length;
    //creates an empty array to be used as the new modified deck
    const newDeck = [];
    //makes sure there is at least one choice to filter
    if(numOfChoices < 1){
        //for each choice
        for(let i = 0; i < numOfChoices; i++){
            //and for each character
            for(let j = 0; j < numOfCharacters; j++){
                // if this choice's name or source or villain is equal to this currecnt character
                if(deckOfCharacters[j].getSource() === filterChoices[i] || deckOfCharacters[j].getVillainOrHero() === filterChoices[i]){
                    //add that character to the new deck
                    newDeck.push(deckOfCharacters[j])
                }
                
            }
        }
        //update deck with the new deck
        deck.updateWithModifiedDeck(newDeck);
    }
    

}

export { filterDeck };