// let drinks = new Object();
// drinks.name = '珍珠奶茶';
// drinks.price = 50;
// drinks.size = '750ml';

// let drinks = {
//     name: '珍珠奶茶',
//     price: 50,
//     size: '750ml'
// }

// console.log(drinks);
// console.log(drinks.name);
// console.log(drinks.price);
// console.log(drinks.size);
// console.log(drinks['name']);
// console.log(drinks['price']);
// console.log(drinks['size']);

let drinks = [
    {
        id:1,
        name:'珍珠奶茶',
        price: 50
    },
    {
        id:2,
        name:'柳橙綠茶',
        price: 55
    },
    {
        id:3,
        name:'冰淇淋紅茶',
        price: 40
    },
    {
        id:4,
        name:'拿鐵',
        price: 60
    }
];

for(let drink of drinks){
    console.log(drink.name);
}
drinks.forEach(function(drink){
    console.log(drink.price)
})
let drinksName = drinks.map(function(drink){
    return drink.name;
})
// let drinksPrice = drinks.map(function(drink){
//     return drink.price;
// })

let drinksPrice = drinks.map(drink => drink.price);
console.log(drinks);
console.log(drinksName);
console.log(drinksPrice);

// let cheap = drinks.filter(function(drink){
//     return drink.price < 50;
// })

let cheap = drinks.filter(drink => drink.price < 50);

console.log(cheap);