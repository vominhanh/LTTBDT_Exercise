var bill = [57, 3, 5];


// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)

// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
let totalValue
let tip
for (let index = 0; index < bill.length; index++) {
    tip = (bill[index] >= 50 && bill[index] <= 300) ? bill[index] * 0.15 : bill[index] * 0.2

    totalValue = bill[index] + tip;

    console.log(`The bill was ${bill[index]}, the tip was ${tip}, and the total value ${totalValue}`);
}