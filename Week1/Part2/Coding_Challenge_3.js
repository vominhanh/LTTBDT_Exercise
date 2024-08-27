// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)

// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)

function person(name, mass, height) {
    this.name = name;
    this.mass = mass;
    this.height = height;
}

let Mark = new person("Mark Miller", 67, 1.67);
let John = new person("John Smith", 56, 1.64)
console.log(Mark.mass);


// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
function calcBMI(person) {

    let BMI = person.mass / person.height ** 2
    return BMI
}


// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
console.log((calcBMI(Mark) > calcBMI(John))
    ? `Chi so BMI cua ${Mark.name} (${calcBMI(Mark)}) cao hon cua ${John.name} (${calcBMI(John)})`
    : `Chi so BMI cua ${John.name} (${calcBMI(John)}) cao hon cua ${Mark.name} (${calcBMI(Mark)})`);

