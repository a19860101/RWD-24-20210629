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

function hello(name){
    return `hello ${name}`;
}

console.log(hello('John'));

function square(x){
    return x*x;
}
console.log(square(11));

function dollar(nt,exchange){
    let tax = 1.8;
    return nt * exchange * tax;
}
console.log(dollar(100,28));