# RDI Random Character Picker

## How it works
* user enters a number into the input field
* based on that number, deals out that many characters randomly
* assigned each character obj to a PlayerN key in a js obj
* transforms that data into a string that is then displayed

## ACP log
| # | What I changed | Commit message | Branch |
|---|----------------|----------------|--------|
| 1 | made deck class | creating deck class first | main |
| 2 | made it so deck could be used else where | exporting deck class | dev |
| 3 | made character class | created a very bare bones character class | dev |
| 4 | went back and added comments | added comments like a good developer | dev |
| 5 | made gitignore | made gitignore | dev |
| 6 | moved classes to own folder | been some time since last commit. moved classes to their own folder and have been building the deck | dev |
| 7 | continuing to add to the deck | a quick commit while i still add to the deck | dev |
| 8 | renamed the main file to deckPrep | renamed main to deckPrep | dev |
| 9 | finished deckPrep for now and added export to it | finished deckprep for now and added export to it | dev |
| 10 | changed from exporting at declaration to after at eof | changed from exporting at declaration to after at eof | dev |
| 11 | found a bug in deckPrep that could break the deck | found a niche for prep deck so added an emptydeck method to deck to clear deck before prep | dev |
| 12 | made a new main and added a get random character function | started main by making a get random character function that just returns the result of deck.deal | dev |
| 13 | realized i need user input so making an html to take user input | realized i need user input so am making a html to take user input | dev |
| 14 | struggle is real | struggling to remember how to get data from the input field in html | dev |
| 15 | struggle is really real | still struggling to get data from the html page, and when running in chrome get weird syntax errors that don't seem to occur in vs code | dev |
| 16 | went looking for mispellings to take my mind off of the struggle | corrected the villain mispelling | dev |
| 17 | found more mispellings | fixed more villain mispellings | dev |
| 18 | once again changed main to dealToPlayer to continue to seperate concerns to try and figure out bug | changed main to dealToPlayer where the dealing to players logic shall live | dev |
| 19 | created index.js | created index.js | dev |
| 20 | added 3 global variables with the value of the three id's we are working with | added 3 global variables with the value of the three id's we are working with | dev |
| 21 | added type module to the script tags which turns out to have been the problem all along | finally got data from the html to the javascript. apparently i needed to add to the script tag | dev |
| 22 | new line is not creating a new line. suspect it gets lost in translation to html | still not getting new line to work | dev |
| 23 | added much needed comments | added much needed comments | dev |
| 24 | added the characters from rdi10 | added the characters from rdi10 | dev |
| 25 | added vertical pipe to the display str to break up the player character results to make it easier to read | added vertical pipe to the display str to break up the player character results to make it easier to read | dev |
| 26 | fixed a niche error that could occur if someone entered a number larger than the number of character's available, now an error will be displayed should that occur | fixed a niche error that could occur if someone entered a number larger than the number of character's available, now an error will be displayed should that occur | dev |
| 27 | merged dev to main | merged dev to main | main |
| 28 | pulled main into dev | pulled main into dev | dev |
| 29 | crerated README.md | crerated README.md | dev |
| 30 | merge | merge | main |
| 31 | pulled down from main | pulled down from main | dev |
| 32 | was adding more to the html and found a bug when the first entry is put | added to html | dev |
| 33 | deck was not primed until the first attempt happened so primed it before that | primed deck before dealling is attempted | dev |
| 34 | instead of passing deck from dealToPlayers to index, i just sent the value of the number of characters (length of the deck) | passing number of characters rather than whole obj | dev |
| 35 | took out function that just returned the result of deck.deal() to limit number of uneeded function calls | took out function and used deck.deal() directly | dev |
| 36 | trying to make things look better with css | created a css file and folder and algn center | dev |
| 37 | centered the content so far and made it easier to read with black background and white/read lettering. currently having some font-sizing issues | applied css to center and adjust colors | dev |
| 38 | solved weird font issue. i forgot to put px | forgot px in font-size | dev |
| 39 | fixed a niche case for negative or 0 entry | checks to make sure there are more than 0 players | dev |
| 40 | made a filter to filter characters based on the character obj's attributes | made a filter for characters | dev |