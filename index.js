import { dealCharactersToPlayers } from "./dealToPlayers.js";


// stores the html id value for input
const inputIDValue = "playerCountInput";
// const buttonIDValue = "submitBtn";
//stores the html id value for where we will display
const displayIDValue = "displayCharacters";

//grabs the input element that matches its id
const inputEl = document.getElementById(inputIDValue);
// const buttonEl = document.getElementById(buttonIDValue);
//grabs the display element that matches its id
const displayEl = document.getElementById(displayIDValue);

//when a number is put into the input
inputEl.addEventListener('input', (event) => {
    
    //gets the value for the number of players
    let playerCount = Number(event.target.value);
    //empty string to be filled inside the for loop
    let displayStr = "";
    // makes an obj out of the dealCharactersToPlayers function when we pass the number of players
    const playerCharacterObj = dealCharactersToPlayers(playerCount);
    //for each players
    for(let i = 0; i < playerCount; i++){
        //create the PlayerN key
        let playerKey = "Player" + Number(i + 1);
        //adds the playerkey as well as the name of the character
        displayStr += "\n \n | " + playerKey + " " + playerCharacterObj[playerKey].getName() + " | \n \n ";
    }


    displayEl.textContent = displayStr;

});