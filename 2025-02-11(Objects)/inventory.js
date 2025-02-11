const inventories = {}
inventories.apple = 10;
inventories.banana = 5;
inventories.orange = 8;
inventories.mango = 8;

for (let inventory in inventories) {
    console.log(`${inventory}: ${inventories[inventory]}`);
}
let totalNumber = 0;
for (let inventory in inventories) {
    totalNumber += inventories[inventory];
}
console.log(totalNumber);