import { dealCharactersToPlayers, numOfCharacters, deck } from "./dealToPlayers.js";


// stores the html id value for input
const inputIDValue = "playerCountInput";
//stores the html id value for where we will display
const displayIDValue = "displayCharacters";


//grabs the input element that matches its id
const inputEl = document.getElementById(inputIDValue);
//grabs the display element that matches its id
const displayEl = document.getElementById(displayIDValue);



//keep track of the different optional options being selected



//when a number is put into the input
inputEl.addEventListener('input', (event) => {
    
    //hero checkbox
    const hero = document.getElementById("hero");
    //villain checkbox
    const villain = document.getElementById("villain");
    //rdi3 checkbox
    const rdi3 = document.getElementById("rdi3");
    //rdi5 checkbox
    const rdi5 = document.getElementById("rdi5");
    //rdi6 checkbox
    const rdi6 = document.getElementById("rdi6");
    //rdi7 checkbox
    const rdi7 = document.getElementById("rdi7");
    //rdi8 checkbox
    const rdi8 = document.getElementById("rdi8");
    //rdi9 checkbox
    const rdi9 = document.getElementById("rdi9");
    //rdi10 checkbox
    const rdi10 = document.getElementById("rdi10");
    //allies check box
    const allies = document.getElementById("allies");
    //smorgasbox checkbox
    const smorgasbox = document.getElementById("smorgasbox");

    const filterOptions = [];
    let bossModeBool = false;
    if(hero.checked){
        filterOptions.push("hero");
    }
    
    if(villain.checked){
        filterOptions.push("villain");
    }

    if(rdi3.checked){
        filterOptions.push("rdi3");
    }

    if(rdi5.checked){
        filterOptions.push("rdi5");
    }

    if(rdi6.checked){
        filterOptions.push("rdi6");
    }

    if(rdi7.checked){
        filterOptions.push("rdi7");
    }

    if(rdi8.checked){
        filterOptions.push("rdi8");
    }

    if(rdi9.checked){
        filterOptions.push("rdi9");
    }

    if(rdi10.checked){
        filterOptions.push("rdi10");
    }

    if(allies.checked){
        filterOptions.push("allies");
    }

    if(smorgasbox.checked){
        filterOptions.push("smorgasbox");
    }

    //how many obj's are in the deck
    let deckSize = numOfCharacters;
    //gets the value for the number of players
    let playerCount = Number(event.target.value);
    //empty string to be filled inside the for loop
    let displayStr = "";
    // console.log(deckSize);
    // makes sure that the  of playercount was less than or equal to the number of possible characters
    if(playerCount <= deckSize && playerCount > 0){    
        // makes an obj out of the dealCharactersToPlayers function when we pass the number of players
        const playerCharacterObj = dealCharactersToPlayers(playerCount, filterOptions, bossModeBool);
        let bossMarked = false;
        //for each players
        for(let i = 0; i < playerCount; i++){
            //create the PlayerN key
            let playerKey = "Player" + Number(i + 1);
            if(bossModeBool && !bossMarked && playerCharacterObj[playerKey].getBossDeckBool()){
                bossMarked = true;
                displayStr += "\n \n | " + playerKey + " " + playerCharacterObj[playerKey].getName() + " BOSS | \n \n ";
            }else{
                //adds the playerkey as well as the name of the character
                displayStr += "\n \n | " + playerKey + " " + playerCharacterObj[playerKey].getName() + " | \n \n ";
            }
            
        }
    }else{
        displayStr = "Invalid entry";
    }
    


    displayEl.textContent = displayStr;

    //not sure if this call is truely necessary, will need to check later
    deck.emptyDeck();
});