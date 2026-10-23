function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

class Deck{
    constructor(){
        //this is where the characters will be stored
        this.cards = [];
    }
    addCard(card){
        //this is where we add characters to the deck
        this.cards.push(card);
    }

    getDeck(){
        //this returns the entire deck
        return this.cards;
    }
    emptyDeck(){
        this.cards = [];
        console.log(this.cards.length)
    }
    updateWithModifiedDeck(newDeck){
        this.cards = newDeck;
    }
    deal(){
        console.log("deck size before dealing " + this.cards.length)
        //this creates a random number based on the length of the deck
        let rando = getRandomInt(this.cards.length);
        //this pulls a random card from the deck and removes that chaacter from the deck
        let card = this.cards.splice(rando, 1);
        
        console.log("deck size after dealing " + this.cards.length)
        //returns the random character
        return card[0];
    }
    dealSpecific(index){
        let card = this.cards.splice(index, 1);
        return card[0];
    }
};

export { Deck };