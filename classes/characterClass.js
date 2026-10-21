class Character{
    constructor(name, source, villanOrHero){
        //stores the name
        this.name = name;
        this.source = source;
        this.villanOrHero = villanOrHero;
        //future plans could add character difficulty
    }
    
    getName(){
        //returns the name of the character
        return this.name;
    }
    getSource(){
        return this.source;
    }
    getVillianOrHero(){
        return this.villanOrHero;
    }
}

export { Character };