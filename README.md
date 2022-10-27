# _{Repo Name}_

#### By _**Alejandro Socarras, Austin Moos, Matthew Belcher**_

#### _{Brief Description}_

## Technologies Used

* {List}

## Description

_{More detailed information about contents}_

## Setup/Installation Requirements

_{"N/A" if setup/install not required}_

## Known Bugs

_{"No known bugs" if none}_

## License

_[MIT License](https://opensource.org/licenses/MIT)_

Copyright (c) _<DATE>_ {Author}

## Tests 

Describe: pigLatin()

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

Test: "It will move the leading consonant to the end of the word and add 'ay' for words that begin with only one consonant." 
Code: pigLatin("code")
Expected Output: "odecay" 

Test: "It will move all of the first consecutive consonants to the end and add "ay" for words that begin with more than one consonant."
Code: pigLatin("crown")
Expected Output:  "owncray"

Test: "It will move all of the first consecutive consonants to the end and add "ay" for multiple words that begin with more than one consonant.
Code: pigLatin("cheesy crowns")
Expected Output: "eesychay ownscray"

Test: "It will move a leading 'qu' to the end of the word as a combined initial consonant." 
Code: pigLatin("quack")
Expected Output: "ackquay"

Test: "It will apply the preceding rules to a sentence containing words of each type."
Code: pigLatin("Words of each type quack")
Expected Output: "ordsWay ofway eachway ypetay ackquay"

<!-- Write a Pig Latin translator or should we say an "igPay atinLay anslatorTray"?  -->