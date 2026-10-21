class Character{
    constructor(name, source, villainOrHero){
        //stores the name
        this.name = name;
        this.source = source;
        this.villainOrHero = villainOrHero;
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
}

export { Character };