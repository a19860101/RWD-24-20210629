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
// console.log(foods.length)

// 陣列迭代
// for(let i=0;i<foods.length;i++){
//     console.log(foods[i]);
// }

// for...of
// for(let food of foods){
//     console.log(food);
// }

// for...in
// for(let i in foods){
//     console.log(foods[i]);
// }

// push() 新增資料到陣列後方
foods.push('鹹水雞','麻油雞');

// pop() 刪除陣列後方的資料
foods.pop();

// unshift()  新增資料到陣列前方
foods.unshift('烤玉米');

// shift() 刪除陣列的第一筆資料
foods.shift();

// splice() 拼接
// foods.splice(1,1,'紅燒牛肉麵','清燉牛肉麵');
// foods.splice(2,0,'紅燒牛肉麵','清燉牛肉麵');
foods.splice(4,1);

console.log(foods)