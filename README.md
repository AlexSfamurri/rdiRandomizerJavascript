# RDI Random Character Picker

Red Dragon Inn is a copyright of SlugFest Games West, LLC and as well as their characters. 



## How it works
* user enters a number into the input field
* based on that number, deals out that many characters randomly
* assigned each character obj to a PlayerN key in a js obj
* transforms that data into a string that is then displayed
* optionally, user can check the checkboxes that can filter based on hero, villian, and source.

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
| 41 | made the checkboxes for the filter but not connected yet | made the checkboxes | dev |
| 42 | added value attribute to checkboxes | added value attribute to checkboxes | dev |
| 43 | fixed a bug that filtered everything away | fixed a filter bug | dev |
| 44 | added the check box interaction for filtering and found a bug where characters are repeating somehow | checkboxes connected to code | dev |
| 45 | for some reason between each run the deck doubles in size even when i show the deck being emptied | struggle is real deck bug | dev |
| 46 | isolated the issue to filterDeck.js will need to fix the logic there | isolated issue to filetDeck.js | dev |
| 47 | made some changes across the board. cleaned up some panic attempts to fix and changed how filter works and added a specific card deal mechanic in the deck class | added dealSpecific to deck class | dev |
| 48 | working backwards i appear to have fixed the doubling deck size issue filter caused | fixed filterDeck | dev |
| 49 | so now when trying to filter by sources, we are only getting half of the results | still bugs in filter | dev |
| 50 | new bug now that gives me two from the right rdi and two from the next rdi | bugs still in filter | dev |
| 51 | appear to have fixed the bug. went back and changed how specific cards are dealt. no longer messing with the original deck in this case | fixed filter bug so far | dev |
| 52 | test for bug, did not find same bug | squashed filter logic bug | dev |
| 53 | merged | merged | main |
| 54 | fixed relative path | fixed relative path | dev |
| 55 | merged | merged | main |
| 56 | updated README to include optional filter | updated README | dev |
| 57 | remembered i should mention that Slugfest are the creators of this wonderful game | mentioned copyright | dev |
| 58 | merged | merged | main |
| 59 | trying to get the checkboxes to line up the way i want | css safety commit | dev |
| 60 | added an attribute for if the character has a boss deck | added hasBossDeck attribute | dev |
| 61 | found another filter bug. filteroptions array needs to be refreshed | need to refreshfilteroptions array | dev |
| 62 | made and tested boss mode character dealt modification | boss mode | dev |
| 63 | tinkering around trying to fix checkboxes placement | safety commit | dev |
| 64 | went to replicate the refresh bug and it appears to be resolved, i did move declarations so that could have fixed it | bug squashed | dev |
| 65 | chris helped me with the css. flex is not always the answer | css coming together | dev |