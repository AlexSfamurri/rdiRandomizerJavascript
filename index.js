import { dealCharactersToPlayers } from "./dealToPlayers.js";

// console.log(dealCharactersToPlayers(4));

const inputIDValue = "playerCountInput";
// const buttonIDValue = "submitBtn";
const displayIDValue = "displayCharacters";

const inputEl = document.getElementById(inputIDValue);
// const buttonEl = document.getElementById(buttonIDValue);
const displayEl = document.getElementById(displayIDValue);

inputEl.addEventListener('input', (event) => {
    
    let playerCount = event.target.value;
    let displayStr = "";
    // event.target.value contains the updated string
    const playerCharacterObj = dealCharactersToPlayers(playerCount);
    for(let i = 0; i < playerCount; i++){
        let playerKey = "Player" + Number(i + 1);
        displayStr += playerKey + " " + playerCharacterObj[playerKey].getName() + " \n \n ";
    }


    displayEl.textContent = displayStr;

});