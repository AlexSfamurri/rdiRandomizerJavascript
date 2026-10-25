
// takes the deck and an array of filter choices
const filterDeck = (deck, filterChoices = [])=>{
    //gets the number of choices selected
    const numOfChoices = filterChoices.length;
    
    
    //makes sure there is at least one choice to filter
    if(!numOfChoices < 1){
        //creates an empty array to be used as the new modified deck
        const newDeck = [];
        //creating a array of index's
        const arrayOfDeckIndexs = [];
        //keep track of index's and how often they are added
        const indexTracker = {};
        //for each choice
        for(let i = 0; i < numOfChoices; i++){
            //and for each character
            for(let j = 0; j < deck.getDeck().length; j++){
                // if this choice's name or source or villain is equal to this currecnt character
                if(deck.getDeck()[j].getSource() === filterChoices[i] || deck.getDeck()[j].getVillainOrHero() === filterChoices[i]){
                    //checks to see if we have already come accross this index
                    if(indexTracker[j] != "used"){
                        //if we havent we then update the object with the value used stored at the key made by the index
                        indexTracker[j] = "used"
                        //we grow our array of indexes with the unique index
                        arrayOfDeckIndexs.push(j);
                    }
                }
            }
        }
        //for each element in the array
        arrayOfDeckIndexs.forEach((trackedIndex)=>{
            //we push a character card from the deck based on it's index
            newDeck.push(deck.dealSpecific(trackedIndex))
        })

        //update deck with the new deck
        return newDeck;
    }
    return deck.getDeck();
    

}

export { filterDeck };