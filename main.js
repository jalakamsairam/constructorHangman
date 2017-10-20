//create an array of 20 words
let words = ["taken", "intern", "jaws", "up"];
//we need to chose a word from this array using wath.random
let random = Math.floor(Math.random() * words.length);
//generate a chosen word
let chosenWord = words[random];
//we also need a right letter and wrong letter array to store the values of the values we enter
let rightLetter = [];
let wrongLetter = [];

//string to track the game
var string;
//print chosenWord
console.log(chosenWord);
//once the word is chosen we need to create an array with underscores equal to the number of  letters in each word/
let underScore = [];
//require inquirer to take inputs
var inquirer = require("inquirer");

let underScoreGenerator = (choosenWord) => {
    for (let i = 0; i < chosenWord.length; i++) {
        underScore.push("_");
    }
    return underScore;
}
console.log(underScoreGenerator());
// we need to print key presses so lets take it using enquirer
function game() {
    inquirer.prompt([{
            type: "input",
            name: "input",
            message: "guess the letter(enter single charecter (a-z))",
            // filter:function(str){
            //     if(typeOf(str) === "string" && str.length=1){
            //         return str;
            //     }
            //     else{
            //         console.log("enter a single letter");
            //     }
            // }
        }

    ]).then((data) => {

          //we need to store the input we get in to a variable

        if (typeof (data.input) != "string" || data.input.length != 1) {
            console.log("enter a single letter");
            game();
        } else {
            var keyWord = data.input;
            var prettyString = underScore.join(" ");
            if (chosenWord.indexOf(keyWord) > -1) {
                rightLetter.push(keyWord);
                console.log(keyWord);
                for (let i = 0; i < chosenWord.length; i++) {
                    if (chosenWord[i] === keyWord) {
                        underScore[i] = keyWord;
                    }
                }
                console.log(underScore);
                string = underScore.join("");
                prettyString = underScore.join(" ")
                console.log(prettyString);
                if (string != chosenWord) {
                    console.log("inside this if loop at line 53")
                    game();

                }
                if (string === chosenWord) {
                    console.log(prettyString);
                    console.log("you win");
                    process.exit();
                }

            } else {
                wrongLetter.push(keyWord);
                console.log("the key word is " + keyWord);
                console.log("the string is " + string);
                console.log(chosenWord);
                game();
            }
        }
    })

}

if (underScore.indexOf("_") > -1) {
    game();
}