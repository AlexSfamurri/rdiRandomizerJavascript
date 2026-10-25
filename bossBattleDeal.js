
const bossMode = (deck)=>{
    const bossDeck = [];

    deck.getDeck().forEach((characterCard)=>{
        if(characterCard.getBossDeckBool()){
            bossDeck.push(characterCard);
        }
    })

    return bossDeck;
}

export { bossMode }