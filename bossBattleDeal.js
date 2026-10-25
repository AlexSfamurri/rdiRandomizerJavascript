import { Deck } from "./classes/deckClass.js";


const bossMode = (deck)=>{
    const bossDeck = new Deck();

    deck.getDeck().forEach((characterCard)=>{
        if(characterCard.getBossDeckBool()){
            // console.log(characterCard)
            bossDeck.addCard(characterCard);
        }
    })

    return bossDeck;
}

export { bossMode }