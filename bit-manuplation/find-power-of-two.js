function isPowerOfTwo(number){
    if(number  && !(number & (number - 1)) ){
        return true;
    }else{
        return false;
    }
}

function isPowerOfTwo2(number){
    if(number > 0 && (number & (number - 1)) > 0){
        return false;
    }else{
        return true;
    }
}

let testPower = isPowerOfTwo(2);
let testPower1 = isPowerOfTwo2(128);
console.log(testPower)
console.log(testPower1)