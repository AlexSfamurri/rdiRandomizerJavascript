class Character{
    constructor(name, source, villainOrHero, hasBossDeck = false){
        //stores the name
        this.name = name;
        this.source = source;
        this.villainOrHero = villainOrHero;
        this.hasBossDeck = hasBossDeck;
        //future plans could add character difficulty
    }
    
    getName(){
        //returns the name of the character
        return this.name;
    }
    getSource(){
        return this.source;
    }
    getVillainOrHero(){
        return this.villainOrHero;
    }
    getBossDeckBool(){
        return this.hasBossDeck;
    }
}

export { Character };