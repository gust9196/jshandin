// What to wear - task 1
function whatToWear (temperature){

if (temperature < 21) {
    return "Trousers and Sweatshrit";
} else if (temperature > 21) {
    return "Shorts and T-shrit";
    }
}

console.log(whatToWear(10)) //Vælg temperatur her



// Dice game - task 2

function rollDice (amountOfRolls){
    let amountOfSixes = 0
    for (let i = 0; i < amountOfRolls; i++) {
        const randomDiceNumber = Math.floor(Math.random () *6) + 1;
        console.log ("You just rolled a " +randomDiceNumber);

        if(randomDiceNumber === 6){
            amountOfSixes++
            if (amountOfSixes === amountOfRolls){
                console.log("Jackpot🎉")

                 }
            }

    }
}

rollDice(1) //Vælg hvor mange terninger der skal rulles her


//Dicegame v1 (virker, men kan ikke vise jackpot delen)
/*  function rollDice(numberOfRolls) {
    for (let i = 0; i < numberOfRolls; i++) {
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        if (randomNumber === 6){
            console.log(`You just hit a 6! Rolled: ${randomNumber}`)
        } else{
            console.log(`Bad luck, tryk again! Rolled: ${randomNumber}`)

            }

        }
    }

}
console.log(rollDice(2));
*/

function getSentimentScore(string){
    let splitString = string.split ("")
    return splitString
}


//Sentiment Analyser
function sentimentAnalyser (text){
    const positive = ["good", "awesome", "happy"]
    const negative = ["bad", "down", "wired", "sad"]
function get sentiment
    let score = 0
    string.split(" ")
    for (let i = 0; i < ; i++) {
        split.text.length
        if positive includes === true ++1
    }
    if negative includes == true --1
    {

    }

}
console.log(sentimentAnalyser('Hej med dig freder'))
