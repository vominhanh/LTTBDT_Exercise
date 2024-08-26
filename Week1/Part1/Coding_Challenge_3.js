var Dolphins = [699, 99, 399]

var Koalas = [499, 99, 399]

console.log(`Dolphins score ${Dolphins[1]}, ${Dolphins[2]} and ${Dolphins[0]}. Koalas score ${Koalas[1]}, ${Koalas[2]} and ${Koalas[0]}`);


// 1. Calculate the average score for each team, using the test data below
function average(params) {
    let sum = 0
    for (let i = 0; i < params.length; i++) {
        sum += params[i];
    }
    return sum / params.length
}

var D_average = average(Dolphins)
var K_average = average(Koalas)

// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)

console.log(D_average);
console.log(K_average);


if (D_average > K_average) {
    console.log("Dophin win");

} else {
    if (D_average < K_average) {
        console.log("Koala win");

    } else {
        console.log("Hoa");

    }

}
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �


if (D_average > K_average && D_average >= 100) {
    console.log("Dophin thuong 1");

} else {
    if (D_average < K_average && K_average >= 100) {
        console.log("Koala thuong 1");

    } else {
        console.log("Hoa");

    }

}
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy

if (D_average > K_average && D_average >= 100) {
    console.log("Dophin thuong 2");

} else {
    if (D_average < K_average && K_average >= 100) {
        console.log("Koala thuong 2");

    } else {
        if (D_average >= 100 && K_average >= 100) {

            console.log("Hoa");
        }


    }

}