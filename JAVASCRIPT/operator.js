// 運算子

let x = 10;
let y = 6;

let a = 10;
let b = '10';

// 算術運算子
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);//求餘數

// 比較運算子
console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
console.log(x == y);
console.log(x === y);// 值與型態皆須相同
console.log(a == b);
console.log(a === b);// 值與型態皆須相同
console.log(x != y);

// 指定運算子
console.log(x = y);
console.log(x += y); // x = x + y
console.log(x -= y); // x = x - y
console.log(x *= y); // x = x * y
console.log(x /= y); // x = x / y
console.log(x %= y); // x = x % y
// x = 0;

// 邏輯運算子(AND OR NOT)
console.log(x > 0 && y > 0);
console.log(x > 0 || y > 0);
console.log(!x);
console.log(!y);

//
console.log(x++);
console.log(x);
console.log(y--);
console.log(y);