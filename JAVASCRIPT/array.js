// let foods = new Array();
// foods[0] = '滷肉飯';
// foods[1] = '牛肉麵';
// foods[2] = '肉圓';

// let foods = new Array('滷肉飯','牛肉麵','肉圓');

let foods = ['滷肉飯','牛肉麵','肉圓','臭豆腐','豆花'];
// console.log(foods);
// console.log(foods[0]);
// console.log(foods[1]);
// console.log(foods[2]);

// length
console.log(foods.length)

// 陣列迭代
// for(let i=0;i<foods.length;i++){
//     console.log(foods[i]);
// }

// for...of
for(let food of foods){
    console.log(food);
}

// for...in
for(let i in foods){
    console.log(foods[i]);
}