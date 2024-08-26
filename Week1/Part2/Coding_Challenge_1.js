// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!


var Dolphins = [100, 100, 100]

var Dolphins1 = [85, 54, 41]

var Koalas = [400, 400, 400]

var Koalas1 = [23, 24, 27]

// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
function calcAverage(params) {
    let sum = 0
    for (let i = 0; i < params.length; i++) {
        sum += params[i];
    }
    return sum / params.length
}


// 2. Use the function to calculate the average for both teams
console.log("Dolphins", calcAverage(Dolphins));
console.log("Koalas", calcAverage(Koalas));


// 3.Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"

let avgDolhins = calcAverage(Dolphins)
let avgKoalas = calcAverage(Koalas)

let avgDolhins1 = calcAverage(Dolphins1)
let avgKoalas1 = calcAverage(Koalas1)

function checkWinner(avgDolhins, avgKoalas) {
    if (avgDolhins > avgKoalas * 2) {
        return `Dolphins win (${avgDolhins} vs. ${avgKoalas})`
    } else {
        if (avgKoalas > avgDolhins * 2) {
            return `Koalas win (${avgKoalas} vs. ${avgDolhins})`
        } return `Khong doi nao thang`
    }
}


// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
console.log(checkWinner(avgDolhins, avgKoalas));
console.log(checkWinner(avgDolhins1, avgKoalas1));


