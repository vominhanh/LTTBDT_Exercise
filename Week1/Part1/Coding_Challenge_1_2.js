//1. Store Mark's and John's mass and height in variables
var mass_Mark = 50
var height_Mark = 1.5

var mass_John = 56
var height_John = 1.7

console.log(`Marks weights ${mass_Mark}kg and is ${height_Mark}m tall. John weights  ${mass_John} kg and is  ${height_John}m tall`)

//2. Calculate both their BMIs using the formula (you can even implement both versions)
var BMI_John = 1;
var BMI_Mark = 1;
BMI_Mark = mass_Mark / height_Mark ** 2


BMI_John = mass_John / height_John ** 2

//3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
var markHigherBMI = 0;
if (BMI_John > BMI_Mark) {
    markHigherBMI = BMI_John;
    console.log(`John's BMI is higher than Mark's!`);
    console.log(`John's BMI ${BMI_John} is higher than Mark's ${BMI_Mark}!`);


} else {
    markHigherBMI = BMI_Mark
    console.log(`Mark's BMI is higher than John's!`);
    console.log(`Mark's BMI ${BMI_Mark} is higher than John's ${BMI_John}!`);
}