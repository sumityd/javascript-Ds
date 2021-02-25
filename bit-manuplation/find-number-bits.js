function findNumberOfSetBits(number){
    let count = 0;
    while(number > 0){
       number = number & (number - 1);
       count++; 
    }
    return count;
}

let test1 = findNumberOfSetBits(6);
console.log(test1);