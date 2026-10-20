function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default class Deck{
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
    deal(){
        //this creates a random number based on the length of the deck
        let rando = getRandomInt(this.cards.length);
        //this pulls a random card from the deck and removes that chaacter from the deck
        let card = this.cards.splice(rando, 1);
        //returns the random character
        return card[0];
    }
};

