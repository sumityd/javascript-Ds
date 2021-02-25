function ithBit(number, position){
    const mask = 1 << position;
    const getPositionBit = number & mask;
    if(getPositionBit !== 0){
        return 1;
    }else{
        return 0;
    }
}


let test = ithBit(5, 2);
console.log(test)