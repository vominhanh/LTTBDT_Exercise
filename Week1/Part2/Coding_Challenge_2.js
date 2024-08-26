// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
function calcTip(bill) {

    var tip = []
    for (let index = 0; index < bill.length; index++) {
        tip.push((bill[index] >= 50 && bill[index] <= 300) ? bill[index] * 0.15 : bill[index] * 0.2)
    }
    return tip
}


// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
let bill = [125, 555, 44];
console.log("Bills : ", bill);


// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before

let tips = calcTip(bill)

console.log("Tips : ", tips);


// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip

let total = bill.map((num, idx) => {
    return num + tips[idx]
}
)
console.log("Total : ", total);

