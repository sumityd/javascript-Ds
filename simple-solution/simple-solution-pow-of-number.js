function powofNumber(number){
    if(number === 0){
        return 0;
    }

    if(number < 0){
        number = -number
    }

    res = number;
    for(let i = 1;i < number;i++){
        res += number;
    }
    return res;
}

let test = powofNumber(5);
// O(n)
console.log(test)