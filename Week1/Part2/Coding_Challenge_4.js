// Let's improve Steven's tip calculator even more, this time using loops!

//tips
function calcTip(bill) {

    var tip = []
    for (let index = 0; index < bill.length; index++) {
        tip.push((bill[index] >= 50 && bill[index] <= 300) ? bill[index] * 0.15 : bill[index] * 0.2)
    }
    return tip
}


// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
let bill = [125, 555, 44, 55, 37, 300, 220, 74, 99, 260, 210];


// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
console.log("Bills : ", bill);
let tips = calcTip(bill)

console.log("Tips : ", tips);
let totals = bill.map((num, idx) => {
    return num + tips[idx]
}
)
console.log("Total : ", totals);








