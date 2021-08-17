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