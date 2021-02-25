function square(number){
    if(number === 0){
        return 0;
    }

    if(number < 0){
        number = -number;
    }

    // Get floor(n/2) (using right shift)
    let x = number >> 1;
    if( number & 1){
        return ((square(x) << 2) + (x << 2) + 1)
    }else{
        return (square(x) << 2)
    }
}

let test = square(5);
// O(log(n))
console.log(test)