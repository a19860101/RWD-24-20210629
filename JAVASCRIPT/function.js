//函式陳述式 (提升性)
console.log(test());

function test(){
    return 'test';
    // alert('test');
}



//函式表達式
let test2 = function(){
    return 'test2';
}

console.log(test2());