// if
let x = 123;
if(x > 0){
    console.log('success');
}

// if...else
if(x > 0){
    console.log('success!');
}else{
    console.log('error!');
}

// if...else if...else
if(x > 0){
    console.log('正');
}else if(x < 0){
    console.log('負');
}else{
    console.log('error!!');
}

// switch

switch(x){
    case 0:
        console.log(0);
        // break;
    case 10:
        console.log(10);
        // break;
    case 100:
        console.log(100);
        // break;
    default:
        console.log('error');
}

switch(true){
    case x > 0:
        console.log('正數');
        break;
    case x < 0:
        console.log('負數');
        break;
    default:
        console.log('error!!!!!');
}

// 三元運算子
let i = -100;
let result = i > 0 ? 'success@':'error@';
console.log(result);
// 條件 ? 成立 : 不成立
let result2 = i > 0 ? 'success@@': i < 0 ? 'success@@@':'error@@';
console.log(result2);
// 條件 ? 成立 : 條件二 ? '成立':'不成立'