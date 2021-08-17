//函式陳述式 (提升性)
// console.log(test());

// function test(){
//     return 'test';
// }



//函式表達式
// let test2 = function(){
//     return 'test2';
// }

// console.log(test2());

// function hello(name){
//     return `hello ${name}`;
// }

// console.log(hello('John'));

// function square(x){
//     return x*x;
// }
// console.log(square(11));

// function dollar(nt,exchange){
//     let tax = 1.8;
//     return nt * exchange * tax;
// }
// console.log(dollar(100,28));

//箭頭函式

// let test = function(){
//     return 'test';
// }

// let test = () => {
//     return 'test';
// }
//函式只有一個參數時，可省略小括號
// let test = a => {
//     return a;
// }


//動作只有return時，可以省略大括號與return
let test = a => a;

// let square = (x,y) => {
//     return x*y;
// }

let square = (x,y) => x*y;

console.log(test(123));
console.log(square(111,222));