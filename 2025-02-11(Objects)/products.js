const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 500 },
    { id: 4, name: "Desktop", price: 700 }
];
function findExpensiveProducts(products, threshold) {
    let expensiveProducts = [];
    for (let product in products) {
        if (products[product].price > threshold){
            expensiveProducts.push(products[product].name);
        }
    }
    return expensiveProducts;
}

console.log(findExpensiveProducts(products, 700));