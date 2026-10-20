function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export class Deck{
    constructor(){
        this.cards = [];
    }
    addCard(card){
        this.cards.push(card);
    }

    getDeck(){
        return this.cards;
    }
    deal(){
    
        let rando = getRandomInt(this.cards.length);
        let card = this.cards.splice(rando, 1);
    
        return card[0];
    }
};

