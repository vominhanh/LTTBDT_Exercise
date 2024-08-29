//map
Array.prototype.myMap = function(callback) {
    let newArray = []
    for (let i = 0; i < this.length; i++) {
        let newMappedItem = callback(this[i], i, this)
        newArray.push(newMappedItem)
    }
    return newArray
}

function double(params) {
    return params * 3
}

arr = [2, 30, 40, 10, 5, 2]
arr1 = arr.myMap(double)
console.log(arr1);

//reduce
Array.prototype.myReduce = function(callback, initialValue) {
    for (let i = 0; i < this.length; i++) {
        initialValue = callback(initialValue, this[i], i, this)
    }
    return initialValue
}

arr2 = arr.myReduce((acc, curr) => acc + curr, 6)
console.log(arr2);

//find
Array.prototype.myFind = function(callback) {
    let result
    for (let i = 0; i < this.length; i++) {
        let isFound = callback(this[i], i, this)
        if (isFound) {
            result = this[i]
            break
        }
    }
    return result
}

const foundNumber = arr.myFind(num => num > 10);

console.log(foundNumber);