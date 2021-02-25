function findNumberConvertAtoB(number1, number2){
    return findNumberOfSetBits(number1 ^ number2);
}

function findNumberOfSetBits(number){
    let count = 0;
    while(number > 0){
       number = number & (number - 1);
       count++; 
    }
    return count;
}

let test = findNumberConvertAtoB(10,20);
console.log(test)