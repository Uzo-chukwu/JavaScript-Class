

const testScores = [90,78,12,45,67,89,9,45,56,80]

function getDistinction(testScores) {
    distinction = testScores.filter((x) => x >= 70);
    return distinction;
}
console.log(getDistinction(testScores));

const grades =[85,92,78,88,95]

function upgradeGrades(grades) {
    let gradeUpgrades = grades.map((x) => x + 5);
    return gradeUpgrades;
}

console.log(upgradeGrades(grades));


let integers = [2,4,6,8,10]

function squareIntegers(integers) {
    let integerSquared = integers.map((x) => Math.pow(x, 2));
    return integerSquared;
}
console.log(squareIntegers(integers));

const members = ["Emily","Jack","Sophia","Daniel"];
const books = ["java","python","javascript","database"];

function distributeBooks(members, books) {
    let pairs = {};
    let count = 0;
    for (const member of members) {
        pairs.member =books[count];
    }
    return pairs;
}

console.log(distributeBooks(members,books));

function getTotal(expenses){
    let total = 0;
    for (let items in expenses) {
        total += expenses[items]
    }
    return total;
}

const expenses = {"groceries": 150,"dinning out": 100,"transportation": 50, "entertainment":80};
console.log(getTotal(expenses) );










