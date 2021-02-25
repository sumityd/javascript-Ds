function setIthBit(number, poistion){
    const mask = 1 << poistion;
    const getSetBit = number | mask;
    return getSetBit;
}

let test1 = setIthBit(5,3);
console.log(test1);